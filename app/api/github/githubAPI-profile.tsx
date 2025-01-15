import axios from "axios";

export interface GitHubProfile {
  name: string;
  username: string;
  avatarUrl: string;
}

const CACHE_DURATION = 2 * 60 * 60 * 1000;

export async function fetchGitHubProfile(
  username: string
): Promise<GitHubProfile> {
  const cacheKey = `githubProfile_${username}`;
  
  const cachedData = typeof window !== "undefined" ? localStorage.getItem(cacheKey) : null;
  const currentTime = Date.now();

  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    if (currentTime - parsedData.timestamp < CACHE_DURATION) {
      return parsedData.data;
    }
  }

  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const data = response.data;

    const profile: GitHubProfile = {
      name: data.name || "GitHub User",
      username: data.login,
      avatarUrl: data.avatar_url,
    };

    if (typeof window !== "undefined") {
      localStorage.setItem(
        cacheKey,
        JSON.stringify({
          timestamp: currentTime,
          data: profile,
        })
      );
    }

    return profile;
  } catch {
    throw new Error("Falha ao buscar o perfil do GitHub");
  }
}
