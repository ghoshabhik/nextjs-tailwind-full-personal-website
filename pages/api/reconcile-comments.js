import admin from '../../lib/all-admin'

const reconcileComments = (req, res) => {

    const userRef = admin.firestore().collection("users").doc(req.query.user_id)
    const pageRef = admin.firestore().collection("pages").doc(req.query.slug)
    const timestamp = new Date().toString()
    console.log(req.body, req.query.user_id, req.query.slug)

    let userData
    let pageData

    const value = {
        slug: req.query.slug,
        user_id: req.query.user_id,
        user_email: req.query.user_email,
        comment: req.body.comment,
        timestamp
    }

    const getUserData = async (userRef) => {

        let resp = await userRef.get()
        userData = resp.data()
        if(!userData){
            userRef.set({
                user_id: req.query.user_id,
                comments: [value]
            })
            resp = await userRef.get()
            userData = resp.data()
        } else{
            if(!userData.comments){
                userRef.set({
                    comments: [value]
                }, {merge: true})
            }
            else{
                userRef.set({
                    comments: [...userData.comments, value]
                }, {merge: true})
            }
        }
        
        return userData
    }

    const getPageData = async (pageRef) => {
        let resp = await pageRef.get()
        pageData = resp.data()
        if(!pageData){
            pageRef.set({
                slug: req.query.slug
            })
            resp = await pageRef.get()
            pageData = resp.data()
        } else{
            if(!pageData.comments){
                pageRef.set({
                    comments: [value]
                }, {merge: true})
            }
            else{
                pageRef.set({
                    comments: [...pageData.comments, value]
                }, {merge: true})
            }
        }
        
        return pageData
    }

    getUserData(userRef)
    getPageData(pageRef)
    
    return res.status(200).json({
        status: "reconciled comment",
        useData: userData
    })
}

export default reconcileComments