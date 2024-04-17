import prismaClient from "../../prisma";

interface DetailRequest{
    order_id: string;
}

class DetailOrderService{
    async execute({ order_id }: DetailRequest){

        const orders = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            //para incluir todos os dados sobre a order e o product na resposta da requisição
            include: {
                product: true,
                order: true
            }
        })

        return orders;

    }
}

export { DetailOrderService }