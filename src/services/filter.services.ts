import {getProducts_byCategory, getProducts_byPrice} from "../entities/product.entity";

class filter {
    async filterByPrice(max_price:number,min_price:number) {
        try {
            const products = await getProducts_byPrice(max_price,min_price);
            return products;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async filterByCategory(category_id:number) {
        try {
            const products = await getProducts_byCategory(category_id);
            return products;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
}
export default filter;
