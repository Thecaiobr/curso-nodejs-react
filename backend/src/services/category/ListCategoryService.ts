import prismaClient from "../../prisma";

class ListCategoryService{
  async execute(){

    //faz a busca da categoria, espera ir ao banco e devolve o que foi encontrado na variavel category
    const category = await prismaClient.category.findMany({
      select:{
        id: true,
        name: true,
      }
    })

    return category;

  }
}

export { ListCategoryService }