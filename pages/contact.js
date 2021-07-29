import Link from 'next/link'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useState, useRef } from 'react'

import AlertBox from '../components/ui/AlertBox'
import FirebaseAuth from '../components/auth/FirebaseAuth'
import { useUser } from '../firebase/useUser'

const Contact = () => {

    let btnRef = useRef();
    const { user } = useUser()
    const [showLogin, setShowLogin] = useState(false)
    const [commentVal, setCommentVal] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [alertType, setAlertType] = useState('')
    
    const sendData = async () => {
        try {
            firebase
                .firestore()
                .collection('contacts')
                .doc() 
                .set({
                    message: commentVal,
                    time_stamp: firebase.firestore.FieldValue.serverTimestamp(),
                    user_id: user.id,
                    user_email: user.email
                })
                .then(console.log('message added'))
                await fetch(`/api/reconcile-comments?user_id=${user.id}&slug=${'WEBSITECONTACT'}&user_email=${user.email}`,{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({comment: commentVal})
                })
                .then(() => {
                    setAlertText("✨ Your message is saved! ✨")
                    setAlertType("success")
                }).catch(() => {
                    setAlertText("😒 there is some problem saving your message at this time, Please send me an email at abhik.ghosh5@gmail.com.")
                    setAlertType("error")
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
        <div className="">
            <div className="lg:w-2/5 mx-auto py-3 px-4 bg-blue-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-500">
                <p className="text-4xl lg:text-5xl mb-10 font-medium font-hand text-center">Say Hello!!</p>
                    {user ? <form className="flex flex-col" disabled={disabled}>
                        <textarea className="p-2 rounded border focus:ring-0 bg-white dark:bg-gray-700" 
                        value={commentVal} placeholder="Your message..." rows="5" onChange={(e) => setCommentVal(e.target.value)}></textarea>
                        <button className="mt-2 px-4 w-auto h-10 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none" 
                        type="submit" onClick={handleSubmit} ref={btnRef}><span>{disabled ? '💾 saving...' : 'Save'}</span></button>
                    </form> : <div className="">
                
                <p className="text-gray-600 dark:text-gray-400">Leave a comment here. It could be anything – appreciation, information, wisdom, or even humor.</p>
                <button onClick={() => setShowLogin(!showLogin)} className="bg-gray-400 dark:bg-gray-600 mt-5 px-3 py-1 rounded">
                    {showLogin ? <span className="text-bold">🤐</span> : <span className="text-bold">Login</span>}
                </button>
                {showLogin && <FirebaseAuth signInUrl={'contact'}/>}
                
            </div>}
                    
                    
                    {alertText && <AlertBox text={alertText} type={alertType} setAlertText={setAlertText} setAlertType={setAlertType}/>}
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">⚠️Your information will never be disclosed/used anywhere outside of this website</p>
            </div>
        </div>
    )
}

export default Contact
