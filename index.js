import  express  from "express";
import bodyParser from "body-parser"
import router from "./router/routers.js";
const app = express();
const port = 8080;
const ip = '0.0.0.0';

app.use(bodyParser.json());

app.use('/',router);

app.listen(port, () => console.log(`Server Running on port: http://localhost:${port}`));



