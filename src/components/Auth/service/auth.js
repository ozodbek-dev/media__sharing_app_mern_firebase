import auth from "../../../config/firebse";
import { signInWithPopup } from "firebase/auth";
const firebaseAuth = (provider) => {
  return signInWithPopup(auth,provider).then(res=>res.user).catch(err=>err)
};

export default firebaseAuth;
