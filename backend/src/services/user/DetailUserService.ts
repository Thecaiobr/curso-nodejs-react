import prismaClient from "../../prisma";

class DetailUserService{
    async execute(user_id: string){
        //vai porcurar no banco o usuário que tem esse mesmo id que estamos fornecendo
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select:{
                id: true,
                name: true,
                email: true,
            }
        })

        return user;
    }
}

export { DetailUserService }