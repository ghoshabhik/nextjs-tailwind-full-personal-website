import admin from '../../lib/all-admin'

const reconcileUnlikes = (req, res) => {

    function removeItemAll(arr, value) {
        var i = 0;
        while (i < arr.length) {
          if (arr[i] === value) {
            arr.splice(i, 1);
          } else {
            ++i;
          }
        }
        return arr;
      }

    const userRef = admin.firestore().collection("users").doc(req.query.user_id)
    const pageRef = admin.firestore().collection("pages").doc(req.query.slug)

    const getUserData = async (userRef) => {
        const resp = await userRef.get()
        const userData = resp.data()
        if(userData){
            userRef.set({
                pages: removeItemAll(userData.pages, req.query.slug)
            })
        }
        return userData
    }

    const getPageData = async (pageRef) => {
        const resp = await pageRef.get()
        const pageData = resp.data()
        if(pageData){
            pageRef.set({
                users: removeItemAll(pageData.users, req.query.user_id)
            })
        }
        return pageData
    }

    const fireStoreUserData = getUserData(userRef)
    const fireStorePageData = getPageData(pageRef)

    return res.status(200).json({
        status: "reconciled unlike"
    })
    
}

export default reconcileUnlikes