import admin from '../../lib/all-admin'

const reconcileLikes = (req, res) => {

    const userRef = admin.firestore().collection("users").doc(req.query.user_id)
    const pageRef = admin.firestore().collection("pages").doc(req.query.slug)

    const getUserData = async (userRef) => {
        let resp = await userRef.get()
        let userData = resp.data()
        console.log('userdata ----', userData)
        if(!userData){
            userRef.set({
                user_id: req.query.user_id,
                pages: [req.query.slug]
            })
            resp = await userRef.get()
            userData = resp.data()
        } else{
            if(!userData.pages){
                userRef.set({
                    pages: [req.query.slug]
                }, {merge: true})
            }
            else{
                userRef.set({
                    pages: [...userData.pages, req.query.slug]
                }, {merge: true})
            }
        }
        
        return userData
    }

    const getPageData = async (pageRef) => {
        let resp = await pageRef.get()
        let pageData = resp.data()
        console.log('pagedata ----', pageData)
        if(!pageData){
            pageRef.set({
                slug: req.query.slug,
                users: [req.query.user_id]
            })
            resp = await pageRef.get()
            pageData = resp.data()
        }else{
            if(!pageData.users){
                pageRef.set({
                    users: [req.query.user_id]
                }, {merge: true})
            }
            else{
                pageRef.set({
                    users: [...pageData.users, req.query.user_id]
                }, {merge: true})
            }
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