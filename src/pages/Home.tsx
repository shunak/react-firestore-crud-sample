import React, { useContext } from 'react'
import { logout } from '../firebase'
import { FirebaseContext } from '../contexts'
import CreateMemo from '../components/CreateMemo'
import CreateMemo2 from '../components/CreateMemo2'
import MemoList from '../components/MemoList'

const Home = () => {
  const { user } = useContext(FirebaseContext)

  return (
    <>
      <header className='header-page'>
        <h1>Home( Login )</h1>
        <div className='wrap-header-page'> 
          <p>
            <strong>{user?.email}でログイン中</strong>
          </p>
          <button onClick={logout}>ログアウト</button>
        </div>
      </header>
      <div className='wrap-home'>
        <CreateMemo />
        <CreateMemo2 />
        <MemoList />
      </div>
    </>
  )
}

export default Home
