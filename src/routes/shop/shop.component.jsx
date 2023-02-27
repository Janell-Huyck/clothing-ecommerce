import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import  ProductCard from "../../components/product-card/product-card.component";

import './shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    console.log(products);
    return (
      <div className='products-container'>
          {products && products.map((product) => (
                    <div key={product.id}>
                        <ProductCard product = {product} />
                    </div>
            
                ))}
        </div>
    ) };
export default Shop;
