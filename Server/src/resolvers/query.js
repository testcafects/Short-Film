const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


const Query = {
    postBygenre: async(parent,args,ctx,info)=>{
        const post = await prisma.post.findMany({
         where: {
             genreId: +args.id,
         },
         include: {
            Director: true,
          },    
        });
        // console.log(coupons);
        return post;
    },
    
    cart: async(parent,args,ctx,info)=>{
        const cart = await prisma.cart.findMany({
         where: {
             userId: args.userId,
         }, 
         include: {
            Post: true,
          },  
        });
        
        return cart;
    },

    carts: async(parent,args,ctx,info)=>{
        const carts = await prisma.cart.findMany({
        })
           return carts;
    },
    users: async(parent,args,ctx,info)=>{
        const users = await prisma.user.findMany({
        })
           return users;
    },
    // posts: async(parent,args,ctx,info)=>{
    //     const posts = await prisma.post.findMany({
    //     })
    //        return posts;
    // },
    
    validate: async(parent,args,ctx,info)=>{

        var d = parseInt(new Date().getTime())

        const status=await prisma.coupenCode.findUnique({
            where: {
                title: args.title,
            },   
           });
           if(status!==null){
               const from= status.validFrom.getTime()
               const to=status.validTo.getTime()
            //    str1.localeCompare(str2)
            
               if(to>d && from<d){
                return true;
               }
               else{
                 return false
               }
           }
           else{
               
               return false
            }
           
    }
};

module.exports = Query;