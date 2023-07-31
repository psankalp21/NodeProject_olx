import {update} from "../entities/product.entity";

class update_product {
    async updateProduct(id:number,updatedData:any) {
        try {
            const result = await update(id,updatedData);
            return result;
        } catch (error) {
            console.error(error);
            throw new Error("Failed to update product");
        }
    }
}
export default update_product;
