import axios from "axios";

export interface GitHubRepo {
  name: string;
  description: string;
  htmlUrl: string;
  homepage: string | null;
  language: string;
  stargazersCount: number;
  forksCount: number;
  topics: string[];
  imageUrl: string;
}

interface GitHubRepoAPI {
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  owner: {
    login: string;
  };
}

const CACHE_DURATION = 2 * 60 * 60 * 1000;

async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const cacheKey = `githubRepos_${username}`;
  const cachedData = typeof window !== "undefined" ? localStorage.getItem(cacheKey) : null;

  const currentTime = Date.now();

  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    if (currentTime - parsedData.timestamp < CACHE_DURATION) {
      return parsedData.data;
    }
  }

  try {
    const reposResponse = await axios.get(
      `https://api.github.com/users/${username}/repos?type=public`
    );
    const reposData: GitHubRepoAPI[] = reposResponse.data;

    const reposWithImages: GitHubRepo[] = await Promise.all(
      reposData.map(async (repo) => {
        const imageUrl = await fetchBannerImage(repo.owner.login, repo.name);
        return {
          name: repo.name,
          description: repo.description,
          htmlUrl: repo.html_url,
          homepage: repo.homepage,
          language: repo.language,
          stargazersCount: repo.stargazers_count || 0,
          forksCount: repo.forks_count || 0,
          topics: repo.topics || [],
          imageUrl,
        };
      })
    );

    if (typeof window !== "undefined") {
      localStorage.setItem(
        cacheKey,
        JSON.stringify({
          timestamp: currentTime,
          data: reposWithImages,
        })
      );
    }

    return reposWithImages;
  } catch {
    throw new Error("Failed to fetch GitHub repositories");
  }
}

async function fetchBannerImage(owner: string, repo: string): Promise<string> {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contents/public/assets/Banner.png`
    );
    if (response.status === 200) {
      const data = response.data;
      return data.download_url;
    }
  } catch {
    return `https://opengraph.githubassets.com/924fefaf2edf5020d29a79146860635a7ba6f51f378ab563c2d879840bff770f/${owner}/${repo}`;
  }

  return `https://opengraph.githubassets.com/924fefaf2edf5020d29a79146860635a7ba6f51f378ab563c2d879840bff770f/${owner}/${repo}`;
}

export { fetchGitHubRepos, fetchBannerImage };
