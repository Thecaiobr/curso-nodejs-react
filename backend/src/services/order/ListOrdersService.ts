import prismaClient from "../../prisma";


//lista os pedidos que ainda estão em aberto, que nao foram concluidos na cozinha e que nao estao mais em rascunho
class ListOrdersService{
    async execute(){

        const orders = await prismaClient.order.findMany({
            where: {
                draft: false,
                status: false
            },
            //ordernar a partir do mais recente
            orderBy: {
                created_at: 'desc'
            }
        })

        return orders;

    }
}

export { ListOrdersService }