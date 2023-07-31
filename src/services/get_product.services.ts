import { fetchProducts } from "../entities/product.entity";

class get_products {
  async getProduct() {
    const prd = await fetchProducts();
    if(!prd)
    {
        return null
    }
    else
    {
        return prd
    }
  }
}

export default get_products;
