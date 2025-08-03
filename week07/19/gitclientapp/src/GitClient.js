import axios from 'axios';

class GitClient {
  async getRepositories(username) {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response.data.map(repo => repo.name);
  }
}

export default GitClient;