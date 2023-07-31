import { Category } from "../database/models/category.model";

export async function fetchCategories() {
    const result = await Category.findAll();
    console.log(result);
    return result;


}
