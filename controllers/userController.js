const {auth, db} = require('../db')


const authUser = async (req, res, next) => {
    const u_email = req.params.email.substring(1);
    const u_pass = req.params.pass.substring(1);
    try {
        const user = await auth.signInWithEmailAndPassword(u_email, u_pass);
        const userData = await db 
        .collection("users")
        .doc(user.user.uid)
        .get();
        
        console.log(userData.data());
        res.send(userData.data());

      } catch (error) {
        console.error(error);
        res.send(error);
      }
    }

module.exports = {
    authUser
}
