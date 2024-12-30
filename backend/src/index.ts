import express,{Request,Response} from "express"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import { ContentModel, LinkModel, UserModel } from "./db"
import { UserMiddleware } from "./middleware"
import { random } from "./utils"
import cors from "cors"
const JWT_PASSWORD = "hdbflhdabflBFKLHBLIVHBVFLUYevhlfVAVH"
const app = express()
app.use(cors())
app.use(express.json())
app.post("/api/v1/signup",async (req , res) =>{
    //zod validation baad mian
    const username = req.body.username;
    const password = req.body.password;
 
   try{
    await UserModel.create({
        username,
        password
    })
    res.status(200).json({
        msg:"User signed up"
    })
   }catch(err){
    res.status(401).json({msg:"Error while signing up"})
   }

})
app.post("/api/v1/signin",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const existingUser =await UserModel.findOne({
        username,
        password
    })
    if (existingUser){
        const token = jwt.sign({
            id: existingUser._id}, JWT_PASSWORD)
        res.json({
            token
        })

    }else{
        res.status(403).json({
            message:"Invalid credentials"
        })
    }
    

})
//@ts-ignore
app.post("/api/v1/content",UserMiddleware,async(req,res)=>{
    const link = req.body.link;
    const type = req.body.type;
    const title = req.body.title;
    await ContentModel.create({
        link,
        type,
        title,
        //@ts-ignore
        userId:req.userId,
        tags:[]
    })
    res.status(200).json({
        msg:"Content added"
    })


})
app.get("/api/v1/content",UserMiddleware,async(req,res)=>{
    //@ts-ignore
    const userId =req.userId;
    const content = await ContentModel.find({
        userId:userId
    }).populate("userId","username")
    res.json({
        content
    })


})
app.delete("/api/v1/content",UserMiddleware,async(req,res)=>{
    const contentId = req.body.contentId
    await ContentModel.deleteMany({
        contentId,
        //@ts-ignore

        userId:req.userId
    })
    res.json({
        msg:"Deleted"
    })
})

app.post("/api/v1/brain/share",UserMiddleware,async(req,res)=>{
    const share =  req.body.share
    if (share) {
        const existingLink = await LinkModel.findOne({
            //@ts-ignore
            userId:req.userId
        })
        if (existingLink){
            res.json({
                hash:existingLink.hash
            })
            return
        }
        const hash = random(10)
        await LinkModel.create({
            //@ts-ignore
            userId:req.userId,
            hash:hash
        })
        res.json({msg:"share/" + hash})
    }else{
        await LinkModel.deleteMany({
            //@ts-ignore
            userId:req.userId
        })
        res.json({msg:"Deleted "})
    }
    


})
app.get("/api/v1/brain/:shareLink",async(req,res)=>{
    const hash = req.params.shareLink
    const link = await LinkModel.findOne({
        hash

    })
    if (!link){
        res.status(411).json({
            msg:"Incorrect inputs"
        })
        return
    }
    const content = await ContentModel.find({
        userId:link.userId
    })
    const user = await UserModel.findOne({
        userId : link.userId
    })
    res.json({
        username : user?.username,
        content:content
    })

})


app.listen(3000)