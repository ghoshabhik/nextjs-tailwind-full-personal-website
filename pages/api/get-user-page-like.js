import admin from '../../lib/all-admin'

const getUserPageLike = async (req, res) => {
    if (!req.query.user_id || !req.query.slug) {
        return res.status(400).json({
            error: 'Missing query parameters'
        })
    }

    const ref = admin.firestore().collection('pages').doc(req.query.slug)
    const resp = await ref.get()
    const pageData = resp.data()
    var pageUsers = []

    if(pageData){
        pageUsers = pageData.users
        if(pageUsers.includes(req.query.user_id)){
            return res.status(200).json({
                user_id: req.query.user_id,
                page: req.query.slug,
                userLikedThisPage: true
            })
        }
    }

    return res.status(200).json({
        userLikedThisPage: false
    })
}

export default getUserPageLike