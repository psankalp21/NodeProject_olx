import {updatebid} from "../entities/product.entity";

class bid_product {
    async bid(user_id:number,product_id:number,amount:number) {
        try {
            await updatebid(user_id,product_id,amount);
            return true;
        } catch (error) {
            console.error(error);
            throw new Error("Failed to add product");
        }
    }
}
export default bid_product;
