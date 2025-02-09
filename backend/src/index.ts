import  express ,{Request ,Response} from "express";
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose";


mongoose.connect(process.env.DATABASE_CONNECTIONS_STRING as string).then(()=>{
    console.log("database connection established")
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async(req:Request ,res:Response)=>{
res.json({message:"Hello world ! ,good luck!"});
});

app.listen(8080,()=>{
    console.log("server listening on 8080");
})
