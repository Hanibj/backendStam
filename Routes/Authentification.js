const express =require("express")

const authentificationserv =require('../Services/AuthentificationService')

const authrouter=express.Router()

authrouter.post('/Signin',authentificationserv.SigninUser)
authrouter.post('/Signup',authentificationserv.SignupClient)
authrouter.patch('/ResetPassword',authentificationserv.ResetPassword)

module.exports=authrouter;