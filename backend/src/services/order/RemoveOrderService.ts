import prismaClient from "../../prisma";

interface OrderRequest{
    order_id: string;
}

class RemoveOrderService{
async execute({ order_id }: OrderRequest){

    const order = await prismaClient.order.delete({
        where: {
            //id deve estar escrito da mesma forma q esta no banco, pois ele ira acessar a tabela e aquela coluna de dados
            //caso colque um nome diferente ele nunca vai achar aquela colunano banco
            id: order_id,
        }
    })

    return order;

    }
}

export { RemoveOrderService }