import './product-card.styles.scss';

import Button from '../button/button.component';
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <h3 className="name">{name}</h3>
        <p className="price">{price}</p>
      </div>
      <Button buttonType='inverted'>ADD TO CART</Button>
    </div>
  );
}

export default ProductCard;