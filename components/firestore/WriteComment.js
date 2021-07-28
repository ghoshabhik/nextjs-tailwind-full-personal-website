import firebase from 'firebase/app'
import 'firebase/firestore'
import { useState, useRef } from 'react'

import AlertBox from '../ui/AlertBox'

const WriteComment = ({slug, user}) => {

    let btnRef = useRef();
    const [commentVal, setCommentVal] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [alertType, setAlertType] = useState('')

    const sendData = async () => {
        try {
            firebase
                .firestore()
                .collection('comments')
                .doc() 
                .set({
                    comment: commentVal,
                    time_stamp: firebase.firestore.FieldValue.serverTimestamp(),
                    user_id: user.id,
                    user_email: user.email,
                    slug: slug
                })
                .then(console.log('comment added'))
                await fetch(`/api/reconcile-comments?user_id=${user.id}&slug=${slug}&user_email=${user.email}`,{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({comment: commentVal})
                })
                .then(() => {
                    setAlertText("Comment Saved!")
                    setAlertType("success")
                })
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(btnRef.current){
            btnRef.current.setAttribute("disabled", "disabled")
        }
        setDisabled(true)
        console.log("Comment: ", commentVal)
        sendData()
        btnRef.current.removeAttribute("disabled")
        setDisabled(false)
        setCommentVal('')
    }

    return (
        <div className="lg:w-2/5 w-full px-3">
            <form className="flex flex-col" disabled={disabled}>
                <textarea className="p-2 rounded focus:ring-0 bg-white dark:bg-gray-700" 
                value={commentVal} placeholder="Question/ Comments?? Please enter here..." rows="5" onChange={(e) => setCommentVal(e.target.value)}></textarea>
                <button className="mt-2 px-4 w-auto h-10 bg-purple-200 dark:bg-purple-700 rounded hover:bg-purple-300 dark:hover:bg-purple-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none" 
                type="submit" onClick={handleSubmit} ref={btnRef}><span>{disabled ? '💾 saving...' : 'Save 💬'}</span></button>
            </form>
            {alertText && <AlertBox text={alertText} type={alertType} setAlertText={setAlertText} setAlertType={setAlertType}/>}
        </div>
    )
}

export default WriteComment