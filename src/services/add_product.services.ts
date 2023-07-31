import {add} from "../entities/product.entity";

class add_product {
    async addProduct(user_id:number, product_name:string, description:string, base_price:number ,category_id:number,address_id:number) {
        try {
            await add(user_id, product_name, description, base_price ,category_id,address_id);
            return true;
        } catch (error) {
            console.error(error);
            throw new Error("Failed to add product");
        }
    }
}
export default add_product;
