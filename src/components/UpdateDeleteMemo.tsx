import React, { useState, useContext, useCallback } from 'react'
import firebase from 'firebase/app'
import { updateDoc, deleteDoc } from '../firebase'
import { FirebaseContext } from '../contexts'
import { Memo } from '../models'
import { collectionName } from '../consts'
import dayjs from 'dayjs'

const UpdateDeleteMemo: React.FC<{ memo: Memo }> = ({ memo }) => {
  const [input, setInput] = useState('')
  const { user } = useContext(FirebaseContext)
  const onUpdate = useCallback(
    (event) => {
      event.preventDefault()

      updateDoc(collectionName.memos, {
        id: memo.id,
        body: input,
        creater: user ? user.email : null,
        createdAt: memo.createdAt,
        updatedAt: firebase.firestore.Timestamp.now(),
      })

        /* updatedAt: firebase.firestore.FieldValue.serverTimestamp(), */
      alert('更新しました。')
    },
    [input]
  )

  const onDelete = useCallback((event) => {
    event.preventDefault()

    deleteDoc(collectionName.memos, {
      id: memo.id,
      body: memo.body,
      creater: memo.creater,
      createdAt: memo.createdAt,
      updatedAt: memo.updatedAt,
    })
  }, [])

  return (
    <div className='wrap-update-delete-memo'>
      {/* <textarea onChange={(e) => setInput(e.target.value)}> *1/} */}
		{"最終更新："}
		{dayjs.unix(memo.createdAt.seconds).format('MM/DD HH:mm')}
		{"　"}
        {memo.body}
		{/* {memo.createdAt.toString()} */}
		{/* {memo.createdAt._seconds * 1000} */}
      {/* </textarea> */}
      {/* <button onClick={onUpdate}>更新</button> */}
      {/* <button onClick={onDelete}>削除</button> */}
	{/* <hr /> */}
    </div>
  )
}

export default UpdateDeleteMemo
