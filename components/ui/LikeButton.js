import { useState, useEffect } from 'react';
import useSWR, {trigger} from 'swr';

import FirebaseAuth from '../../components/auth/FirebaseAuth';
import WriteLikeButton from '../firestore/WriteLikeButton';
import WriteUnLikeButton from '../firestore/WriteUnLikeButton';
import { useUser } from '../../firebase/useUser';
import fetcher from '../../lib/fetcher'


const LikeButton = ({slug}) => {

    const [showLogin, setShowLogin] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(null)
    const [totalLikes, setTotalLikes] = useState(null)
    const { user } = useUser()

    useEffect(() => {
        user && setLoggedInUser(user.id) 
    },[user])
    
    const { data } = useSWR(`/api/get-user-page-like?user_id=${loggedInUser}&slug=${slug}`, fetcher, {refreshInterval:1000})
    const { data : likeData } = useSWR(`/api/page-likes?slug=${slug}`, fetcher, {refreshInterval:1000})
    // console.log(data)

    
    return (
        <>
        <div className="text-sm px-3 py-2 rounded shadow-md text-gray-50 dark:text-gray-900 dark:bg-gray-50 bg-gray-900">{likeData?.likes + "❤️ so far on this page"}</div>
        {user ? data?.userLikedThisPage ? <WriteUnLikeButton slug={slug} user={user}/> :
            <WriteLikeButton slug={slug} user={user}/> : <button onClick={() => setShowLogin(!showLogin)}
                      className="px-4 w-auto py-2 bg-purple-200 dark:bg-purple-700 rounded-full hover:bg-purple-300 dark:hover:bg-purple-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                {showLogin ? <span>Close Login Form</span> : <span>Please login to Like/ Comment</span>}
              </button>
              
            } 
            {showLogin ? <FirebaseAuth signInUrl={'snippet/'+slug}/> : ''}
        </>
    )
}

export default LikeButton