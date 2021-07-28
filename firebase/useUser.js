import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import firebase from 'firebase/app'
import 'firebase/auth'
import initFirebase from '../firebase/initFirebase'
import {
    removeUserCookie,
    setUserCookie,
    getUserFromCookie,
} from './userCookies'
import { mapUserData } from './mapUserData'

initFirebase()

const useUser = (redirectPageUrl) => {
    const [user, setUser] = useState()
    const router = useRouter()

    if(!redirectPageUrl) redirectPageUrl = '/auth'

    const logout = async () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                // Sign-out successful.
                // router.push(redirectPageUrl)
            })
            .catch((e) => {
                console.error(e)
            })
    }

    useEffect(() => {
        // var userData = null
        // Firebase updates the id token every hour, this
        // makes sure the react state and the cookie are
        // both kept up to date
        const cancelAuthListener = firebase.auth().onIdTokenChanged((user) => {
            // user.getIdToken().then(claims => {
            //     console.log('Claims -=== ',claims)
            // })
            if (user) {
                var userData = mapUserData(user)
                user.getIdTokenResult().then(idTokenResult => {
                    // const adminClaims = {admin : idTokenResult.claims.admin}
                    if(idTokenResult.claims.admin){
                        userData.adminClaims = "Site Admin"
                    }
                    else {
                        userData.adminClaims = "User"
                    }
                    // console.log('UserData >>> ',userData)
                })
                setUserCookie(userData)
                setUser(userData)
            } else {
                removeUserCookie()
                setUser()
            }
        })

        const userFromCookie = getUserFromCookie()
        // if (!userFromCookie) {
        //     router.push('/')
        //     return
        // }
        setUser(userFromCookie)

        return () => {
            cancelAuthListener()
        }
    }, [])

    return { user, logout }
}

export { useUser }