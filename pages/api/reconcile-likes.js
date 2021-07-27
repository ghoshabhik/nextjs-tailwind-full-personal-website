import admin from '../../lib/all-admin'

const reconcileLikes = (req, res) => {

    const userRef = admin.firestore().collection("users").doc(req.query.user_id)
    const pageRef = admin.firestore().collection("pages").doc(req.query.slug)

    const getUserData = async (userRef) => {
        const resp = await userRef.get()
        const userData = resp.data()
        if(!userData){
            userRef.set({
                pages: [req.query.slug]
            })
        }
        else{
            userRef.set({
                pages: [...userData.pages, req.query.slug]
            })
        }
        return userData
    }

    const getPageData = async (pageRef) => {
        const resp = await pageRef.get()
        const pageData = resp.data()
        if(!pageData){
            pageRef.set({
                users: [req.query.user_id]
            })
        }
        else{
            pageRef.set({
                users: [...pageData.users, req.query.user_id]
            })
        }
        return pageData
    }

    const fireStoreUserData = getUserData(userRef)
    const fireStorePageData = getPageData(pageRef)
    
    return res.status(200).json({
        status: "reconciled like"
    })
}

export default reconcileLikes