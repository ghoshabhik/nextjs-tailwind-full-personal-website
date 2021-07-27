import admin from '../../lib/all-admin'

const pageLikes = async (req, res) => {

    const pageRef = admin.firestore().collection("pages").doc(req.query.slug)

    const getPageData = async (pageRef) => {
        const resp = await pageRef.get()
        const pageData = resp.data()
        console.log(pageData)
        if(pageData){
            return res.status(200).json({
                page: req.query.slug,
                likes: pageData.users.length
            })
        }else{
            return res.status(200).json({
                page: req.query.slug,
                likes: 0
            })
        }
    }

    await getPageData(pageRef)

    // return res.status(200).json({
    //     success: true
    // })
    
}

export default pageLikes