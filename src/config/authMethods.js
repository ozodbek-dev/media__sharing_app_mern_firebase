import auth from "./firebse";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";


export const googleProvider= new GoogleAuthProvider();
export const facebookProvider= new FacebookAuthProvider();
export const githubProvider= new GithubAuthProvider();
