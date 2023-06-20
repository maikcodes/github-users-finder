import { useEffect, useState } from 'react'
import './card.css'
import './searchbar.css'
import { getGithubUser } from './services/github.srvices'
import { UserCard } from './components/UserCard'

function App() {
  const [user, setUser] = useState({})
  const [name, setName] = useState('');

  useEffect(() => {
    getGithubUser('maikcodes').then((userData) => setUser(userData))
  }, [])

  const getUser = (event) => {
    event.preventDefault();
    setName(event.target.value)
    getGithubUser(name).then((userData) => setUser(userData))
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <>
      <h1 className='page-title'>Github user finder</h1>
      <div>
        <div className='search-bar'>
          <i className="bi bi-search"></i>
          <form onSubmit={getUser}>
            <input type="text" value={name} onChange={handleNameChange} placeholder='Search GitHub username...' />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
      <UserCard user={user} />
    </>
  )
}

export default App
