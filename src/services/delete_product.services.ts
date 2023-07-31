import {remove} from "../entities/product.entity";

class delete_product {
    async delProduct(pid:number) {
        try {
            await remove(pid);
            return true;
        } catch (error) {
            console.error(error);
            throw new Error("Failed to add product");
        }
    }
}
export default delete_product;
