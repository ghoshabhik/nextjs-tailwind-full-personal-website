import { useState, useEffect } from 'react';
import useSWR, {trigger} from 'swr';

import FirebaseAuth from '../../components/auth/FirebaseAuth';
import WriteLikeButton from '../firestore/WriteLikeButton';
import WriteUnLikeButton from '../firestore/WriteUnLikeButton';
import WriteComment from '../firestore/WriteComment';
import { useUser } from '../../firebase/useUser';
import fetcher from '../../lib/fetcher'


const LikeButton = ({slug, contentType}) => {

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
        <div className="flex flex-col justify-center w-full items-center space-y-3">
        <span className="px-3 py-2 rounded text-center">{likeData?.likes + " like(s) so far on this page"}</span>
        {user ? data?.userLikedThisPage ? <><WriteUnLikeButton slug={slug} user={user}/><WriteComment slug={slug} user={user}/></> :
            <><WriteLikeButton slug={slug} user={user}/><WriteComment slug={slug} user={user}/></> : <button onClick={() => setShowLogin(!showLogin)}
                      className="px-4 w-auto py-2 bg-red-200 dark:bg-red-700 rounded-full hover:bg-red-300 dark:hover:bg-red-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                {showLogin ? <span>Close Login Form</span> : <span>Please login to Like/ Comment</span>}
              </button>
              
            } 
            {showLogin ? <FirebaseAuth signInUrl={contentType+'/'+slug}/> : ''}
        {/* </div> */}
        </div>
        </>
    )
}

export default LikeButton