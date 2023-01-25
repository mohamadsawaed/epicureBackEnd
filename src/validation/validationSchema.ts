import mongoose from "mongoose";
const passwordValidator = require('password-validator');


const schema= new passwordValidator();
schema.is().min(8)
.is().max(100)
.has().uppercase()
.has().lowcase()
.has().digits()
.is().not().oneOf(['password']);
//if(!schema.validat[password])