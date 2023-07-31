import { fetchCategories } from "../entities/category.entity";

class getCategories {
  async get_Categories() {
    const categories = await fetchCategories();
    if(!categories)
    {
        return null
    }
    else
    {
        return categories
    }
  }
}

export default getCategories;
