import express  from "express";
import { getAllUsers, createUser, findUser, deleteUser, updateUser } from "../controller/function.js"

const router = express.Router();

export let users = [
    {
        firstname : "Siddique",
        middlename : "Zameer",
        lastname : "Ahmed",
        age : 20,
        id : "9d6a040e-91e4-400d-b9dc-91f239880c31"
    },
    {
        firstname : "Siddique",
        middlename : "Zuber",
        lastname : "Ahmed",
        age : 20,
        id : "6d6a040e-91e4-400d-b9dc-91f239880c31"

    }, 
]
router.get('/get', getAllUsers);

router.post('/post', createUser);

router.get('/:user_given_id',findUser);

router.delete('/:delete_id',deleteUser);

router.patch('/:id_want_to_update',updateUser);
export default router ;
