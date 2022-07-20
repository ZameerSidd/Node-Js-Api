import { users }  from "../routes/users.js"
import { v4 as uuidv4 } from "uuid";

export const getAllUsers =  (req, res)=> {
    res.send(users);
};

export const createUser = (req, res)=> {
    // console.log('Post Route Reached');
    // console.log(req.body);
    const inputBody = req.body;
    // const middlename = req.body.middlename;
    // const storeUserEithId = [];
    // storeUserEithId.push({...inputBody, id : uuidv4()});
    users.push({...inputBody, id : uuidv4()});
    // console.log(middlename)
    res.send(`User With Middle Name Of ${inputBody.middlename} Added Successfully`);
};

export const findUser =  (req, res)=>{
    const  { user_given_id }= req.params;
    console.log(user_given_id);
    const foundUser = users.find((users) => users.id.toLowerCase() == user_given_id);
    res.send(foundUser);
};

export const deleteUser = (req, res)=> {
    const { delete_id } = req.params;
    console.log(delete_id);
    users = users.filter((users) => users.id == delete_id);
    console.log(users);
    // users = users.filter((users)=> users.id != delete_id);
    res.send(`User With Id ${delete_id} Deleted From Database`);
}

export const updateUser =  (req, res)=>{
    const { id_want_to_update } = req.params;
    const body = req.body;
    const user = users.find((users)=> users.id == id_want_to_update);
    // console.log(body.firstname);
    if(body.firstname != null)
    user.firstname = body.firstname;
    if(body.middlename != null)
    user.middlename = body.middlename;
    if(body.lastname != null)
    user.lastname = body.lastname;
    if(body.age != null)
    user.age = body.age;
    res.send(`User With Id ${id_want_to_update} is been Updated`);
}; 