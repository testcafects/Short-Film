const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


const Query = {
    coupounById: async(parent,args,ctx,info)=>{
        const coupons = await prisma.coupenCode.findUnique({
         where: {
             id: +args.id,
         },   
        });
        // console.log(coupons);
        return coupons;
    },
    
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
               console.log(d)
               return false
            }
           
    }
};

module.exports = Query;