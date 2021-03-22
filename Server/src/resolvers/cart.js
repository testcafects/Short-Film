const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const carts= {
    posts:async(parent,args,ctx,info)=>{
       const posts = await prisma.post.findUnique({
        where:{
            id:parent.id
        }
       })
       return posts
    console.log(parent)
    },

}

module.exports = carts