import express from 'express';
import {signup,signin,googleAuth,facebookAuth,githubAuth} from '../controllers/authCtrl.js'

const router = express.Router();

// signup
router.post('/signup', signup)
//signin
router.post('/signin', signin)
// Google auth 
router.get('/google', googleAuth)
//FacebookAuth
router.get('/facebook', facebookAuth)
// Github Auth
router.get('/github', githubAuth)

export default router;