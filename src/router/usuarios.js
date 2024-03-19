const { Router }=require('express');
const router=Router();
const path = require('path');
const yourAbsolutePath = path.join( __dirname,'./routes/users');


/*const { getUsers, changeStatus,changeRol, createUser, getUserByID, deleteUserByID, updateUserByID, postLogin, updatePassByID, getUsersType } =require('../controllers/users.controller');
router.get('/users/:id',getUserByID);
router.get('/userstipo',getUsersType);
router.post('/users',createUser);
router.post('/users/login',postLogin);
router.post('/users/:id',getUsers);
router.delete('/users/:id',deleteUserByID);
router.put('/users/:id',updateUserByID);
router.put('/userspw/:id',updatePassByID);
router.put('/userstatus/:id',changeStatus);
router.put('/userrol/:id',changeRol);
*/
module.exports=router;