const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const user= {
    post:async(parent,args,ctx,info)=>{
       const data = await prisma.post.findMany({
          where:{
            id:parent.userId
          } 
       })
       return data
    }
}

module.exports = user