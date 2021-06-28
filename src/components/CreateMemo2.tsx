import React, { useState, useContext, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import { addDoc } from '../firebase'
import { FirebaseContext } from '../contexts'
import firebase from 'firebase/app'
import { collectionName } from '../consts'

const CreateMemo2: React.FC = () => {
  const [input, setInput] = useState('')
  const { user } = useContext(FirebaseContext)

  const onCreate = useCallback(
    async (event) => {
      event.preventDefault()

      await addDoc(collectionName.memos, {
        body: '離席',
        creater: user ? user.email : null,
        createdAt: firebase.firestore.Timestamp.now(),
        updatedAt: firebase.firestore.Timestamp.now(),
      })
        /* createdAt: firebase.firestore.FieldValue.serverTimestamp(), */
        /* updatedAt: firebase.firestore.FieldValue.serverTimestamp(), */

      /* setInput('') */
      setInput('')
    },
    [input]
  )
  return (
	  <div >
    {/* <div className='wrap-create-memo'> */}
      {/* <textarea */}
      {/*   placeholder='メモを入力してください。' */}
      {/*   value={input} */}
      {/*   onChange={(e) => setInput(e.target.value)} */}
      {/* /> */}
      {/* <button onClick={onCreate} disabled={!input}> */}
		<button onClick={onCreate}>
			テレワーク中断・終了
      </button>
    </div>
  )
}




export default withRouter(CreateMemo2)
