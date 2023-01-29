import express from 'express';
import {signup,signin,googleAuth,facebookAuth,githubAuth,logout} from '../controllers/authCtrl.js'

const router = express.Router();

// signup
router.post('/signup', signup)
//signin
router.post('/signin', signin)
// Google auth 
router.post('/google', googleAuth)
//FacebookAuth
router.post('/facebook', facebookAuth)
// Github Auth
router.post('/github', githubAuth)

// Logout
router.get('/logout', logout)

export default router;