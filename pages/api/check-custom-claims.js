import auth from '../../lib/auth-admin'

const checkClaims = (req, res) => {
auth
  .getUser('1ZSojxVN8BPQVGjtb6kP21vTgiv2')
  .then((userRecord) => {
      console.log('User Record ---- ',userRecord.customClaims)
    // The claims can be accessed on the user record.
    if(!userRecord.customClaims){
        return res.status(200).json({
            admin: false
        })
    }
    return res.status(200).json({
        admin: userRecord.customClaims['admin']
    })
  }).catch(e => {
      console.log(e)
  })
}


export default checkClaims