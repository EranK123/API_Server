const {db} = require('../db')
const firebase = require("firebase");

const authUser = async (req, res, next) => {
    const u_email = req.params.email.substring(1);
    const u_pass = req.params.pass.substring(1);
    try {
        const user = await firebase.auth().signInWithEmailAndPassword(u_email, u_pass);
        const userId =user.user.uid;
        const userRef = db.ref(`Users/${userId}`);
        const userSnapshot = await userRef.once("value");
        const userData = userSnapshot.val();
        if (!userData) {
            throw new Error("User not found in the database");
        }
        console.log(userData);
        res.send(userData);

      } catch (error) {
        console.error(error);
        res.send(error);
      }
    }

module.exports = {
    authUser
}
