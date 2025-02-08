import  express ,{Request ,Response} from "express";
import cors from "cors";
import "dotenv/config"



const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async(req:Request ,res:Response)=>{
res.json({message:"Hello world ! ,good luck!"});
});

app.listen(8080,()=>{
    console.log("server listening on 8080");
})
