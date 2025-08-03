import React, { useEffect, useState } from 'react';
import GitClient from './GitClient';

function App() {
  const [repos, setRepos] = useState([]);
  const gitClient = new GitClient();

  useEffect(() => {
    const fetchData = async () => {
      const data = await gitClient.getRepositories('techiesyed');
      setRepos(data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Repositories for techiesyed</h1>
      <ul>
        {repos.map((repo, index) => (
          <li key={index}>{repo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;