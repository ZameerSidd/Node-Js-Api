import express  from "express";

const testingRouter = express.Router();

testingRouter.get('/test', (req,res)=>{
    res.send('Test Router');
});

export default testingRouter; 
