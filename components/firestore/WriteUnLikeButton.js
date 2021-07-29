import firebase from 'firebase/app'
import 'firebase/firestore'
import { useState } from 'react'
import { trigger } from 'swr'

const WriteUnLikeButton =  ({slug, user}) => {

    const [disabled, setDisabled] = useState(false)

    const unlikePage = async () => {
        setDisabled(true)
        try {
            await fetch(`/api/reconcile-unlike?user_id=${user.id}&slug=${slug}`)
            // await trigger('/api/get-user-page-like')
            // await trigger('/api/page-likes')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="text-gray-700 dark:text-gray-200">
              <button onClick={unlikePage}
                      className="px-4 w-auto h-10 bg-red-400 dark:bg-red-400 rounded-full hover:bg-red-300 dark:hover:bg-red-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                <span>{disabled ? "🙁 saving unlike..." : "You liked the page 🙂 "}</span>
              </button>
        </div>
    )
}

export default WriteUnLikeButton