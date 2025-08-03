import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const dummyRepos = [
      { name: 'repo1' },
      { name: 'repo2' },
    ];
    axios.get.mockResolvedValue({ data: dummyRepos });

    const client = new GitClient();
    const repos = await client.getRepositories('techiesyed');

    expect(repos).toEqual(['repo1', 'repo2']);
  });
});