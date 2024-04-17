import prismaClient from "../../prisma";

interface OrderRequest{
    order_id: string;
}

//where fala que deve ser atualizado a order com aquele determinado id e depois o data pergunta qual atributo deve ser atualizado
class SendOrderService{
    async execute({ order_id }: OrderRequest){
        const order = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data:{
                draft: false
            }
        })

        return order;
    }
}

export { SendOrderService }