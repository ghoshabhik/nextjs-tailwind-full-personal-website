import auth from '../../lib/auth-admin'

const checkClaims = (req, res) => {
  auth
  .setCustomUserClaims('1ZSojxVN8BPQVGjtb6kP21vTgiv2', { admin: true })
  .then(() => {
    // The new custom claims will propagate to the user's ID token the
    // next time a new one is issued.
  }).catch(e => {
      console.log(e)
  })
}


export default checkClaims