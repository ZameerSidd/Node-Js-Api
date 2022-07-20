import  express  from "express";

const router = express.Router();

router.get('/get', (req, res)=>{
    res.send('Get Method');
});

export default router;