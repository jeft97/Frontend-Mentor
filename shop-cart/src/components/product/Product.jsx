import ProductList from './ProductList';
import ProductListItem from './ProductListItem';
import './product.style.css';

function Product({
   cart,
   products,
   isLoading,
   onAddToCart,
   onIncrementQuantity,
   onDecriseQuantity,
   errorMessage,
}) {
   return (
      <div className="product">
         <h1 className="heading--1">Desserts</h1>
         {isLoading && <div className="loader"></div>}
         {errorMessage !== '' && (
            <div className="error-message">
               <p>{errorMessage}</p>
            </div>
         )}
         <ProductList>
            {products.map((product, i) => (
               <ProductListItem
                  cart={cart}
                  key={product.id}
                  onAddToCart={onAddToCart}
                  product={product}
                  onIncrementQuantity={onIncrementQuantity}
                  onDecriseQuantity={onDecriseQuantity}
               />
            ))}
         </ProductList>
      </div>
   );
}

export default Product;
