const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const user= {
    cart:async(parent,args,ctx,info)=>{
       const data = await prisma.user.findMany({
        where: {
            id: parent.cartId,
        },  
       })
    }
}