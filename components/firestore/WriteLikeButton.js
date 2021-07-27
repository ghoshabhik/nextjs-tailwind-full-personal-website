import firebase from 'firebase/app'
import 'firebase/firestore'

import { useState } from 'react'
import { trigger } from 'swr'

const WriteLikeButton = ({slug, user}) => {

    const [disabled, setDisabled] = useState(false)
    
    const likePage = async () => {
        setDisabled(true)
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
    }

    return (
        <div className="text-purple-700 dark:text-purple-200">
              <button onClick={likePage} disabled={disabled}
                      className="px-4 w-auto h-10 bg-purple-200 dark:bg-purple-700 rounded-full hover:bg-purple-300 dark:hover:bg-purple-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                <span>{disabled ? "❤️ Liking it..." : "Liked this page 🧐"}</span>
              </button>
        </div>
    )
}

export default WriteLikeButton