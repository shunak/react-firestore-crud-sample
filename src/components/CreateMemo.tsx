import React, { useState, useContext, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import { addDoc } from '../firebase'
import { FirebaseContext } from '../contexts'
import firebase from 'firebase/app'
import { collectionName } from '../consts'
import  Button from '../../node_modules/@material-ui/core/Button'                                                                                                               

const CreateMemo: React.FC = () => {
  const [input, setInput] = useState('')
  const { user } = useContext(FirebaseContext)
  const onCreate = useCallback(
    async (event) => {
      event.preventDefault()

      await addDoc(collectionName.memos, {
		body: '在席',
        creater: user ? user.email : null,
        createdAt: firebase.firestore.Timestamp.now(),
        updatedAt: firebase.firestore.Timestamp.now(),
      }
      /* await addDoc(collectionName.memos, { */
      /*   body: input, */
      /*   creater: user ? user.email : null, */
      /*   createdAt: firebase.firestore.Timestamp.now(), */
      /*   updatedAt: firebase.firestore.Timestamp.now(), */
      /* } */
	)
        /* createdAt: firebase.firestore.FieldValue.serverTimestamp(), */
        /* updatedAt: firebase.firestore.FieldValue.serverTimestamp(), */

      /* setInput('') */
      setInput('')
    },
    [input]
  )
  return (
	  <div>
    {/* <div className='wrap-create-memo'> */}
    {/*   <textarea */}
    {/*     placeholder='メモを入力してください。' */}
    {/*     value={input} */}
    {/*     onChange={(e) => setInput(e.target.value)} */}
    {/*   /> */}
    {/*   <button onClick={onCreate} disabled={!input}> */}
		{/* <button onClick={onCreate}> */}
		<Button variant="contained" onClick={onCreate} >
			テレワーク開始
      </Button>
    </div>
  )
}


export default withRouter(CreateMemo)
