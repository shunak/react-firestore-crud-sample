import React, { useContext } from 'react'
import { logout } from '../firebase'
import { FirebaseContext } from '../contexts'
import CreateMemo from '../components/CreateMemo'
import CreateMemo2 from '../components/CreateMemo2'
import MemoList from '../components/MemoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import  Typography  from '../../node_modules/@material-ui/core/Typography'
import  Button from '../../node_modules/@material-ui/core/Button'

const Home = () => {
  const { user } = useContext(FirebaseContext)

  return (
    <>
      <header className='header-page'>
		  {/* <Typography color="textSecondary"> */}
        <h1>テレワーク打刻</h1>
		  {/* </Typography> */}
        <div className='wrap-header-page'> 
          <p>
            <strong>{user?.email}</strong>
          </p>
          {/* <button className='btn-logout' onClick={logout}><FontAwesomeIcon icon={ faSignOutAlt } /></button> */}
			<Button onClick={logout}>Logout <FontAwesomeIcon icon={faSignOutAlt}/></Button>
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
