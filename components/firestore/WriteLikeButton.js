import firebase from 'firebase/app'
import 'firebase/firestore'

import { useState, useRef } from 'react'
import { trigger } from 'swr'

const WriteLikeButton = ({slug, user}) => {
    let btnRef = useRef();
    const [disabled, setDisabled] = useState(false)
    
    const likePage = async () => {
        setDisabled(true)
        if(btnRef.current){
            btnRef.current.setAttribute("disabled", "disabled")
        }
        try {
            firebase
                .firestore()
                .collection('likes')
                .doc() 
                .set({
                    like: 1,
                    slug:slug,
                    time_stamp: firebase.firestore.FieldValue.serverTimestamp(),
                    user_id: user.id
                })
                .then(console.log('like added'))
                await fetch(`/api/reconcile-likes?user_id=${user.id}&slug=${slug}`)
                // await trigger('/api/get-user-page-like')
                // await trigger('/api/page-likes')
                
        } catch (error) {
            console.log(error)
            // alert(error)
        }
        btnRef.current.removeAttribute("disabled")
        // setDisabled(false)
    }

    return (
        <div className="text-gray-700 dark:text-gray-200">
              <button ref={btnRef} onClick={likePage} disabled={disabled}
                      className="px-4 w-auto h-10 bg-red-200 dark:bg-red-700 rounded-full hover:bg-red-300 dark:hover:bg-red-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                <span>{disabled ? "❤️ Liking it..." : "Liked this page? 🧐"}</span>
              </button>
        </div>
    )
}

export default WriteLikeButton