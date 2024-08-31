import { useState } from 'react';
import Button from '../ui/Button';
import { formatCurreny } from '../helpers/helpers';
import { motion } from 'framer-motion';

function ProductListItem({
   cart,
   product,
   onAddToCart,
   onIncrementQuantity,
   onDecriseQuantity,
}) {
   const [isShow, setIsShow] = useState(null);

   const { id, image, name, category, price } = product;
   const obj = cart?.find((item) => item.id === id);

   function toggleButton(id) {
      setIsShow((prev) =>
         id === prev && obj?.quantity !== undefined ? null : id
      );
   }

   return (
      <article className="product__list--item">
         <div className="wrapper-img">
            <picture>
               <source srcSet={image.desktop} media="(min-width:64em)" />
               <source srcSet={image.tablet} media="(min-width: 35.75em)" />
               <img
                  src={image.mobile}
                  alt={name}
                  className={`${
                     isShow === id && obj?.quantity !== undefined
                        ? 'has-border'
                        : ''
                  }`}
               />
            </picture>
         </div>
         {isShow === id && obj?.quantity !== undefined ? (
            <motion.div
               initial={{ scale: 0, translateX: '-50%' }}
               animate={{ scale: 1 }}
               transition={{ ease: 'easeOut', duration: 0.2 }}
               className="product--quantity"
            >
               <button
                  onClick={() => onDecriseQuantity(id)}
                  className="btn btn-quantity"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="10"
                     height="2"
                     fill="none"
                     viewBox="0 0 10 2"
                  >
                     <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                  </svg>
               </button>
               <span>{obj.quantity}</span>
               <button
                  onClick={() => onIncrementQuantity(id)}
                  className="btn btn-quantity"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="10"
                     height="10"
                     fill="none"
                     viewBox="0 0 10 10"
                  >
                     <path
                        fill="#fff"
                        d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                     />
                  </svg>
               </button>
            </motion.div>
         ) : (
            <Button
               onEvent={() => {
                  toggleButton(id);
                  onAddToCart(product);
               }}
               sytles="btn--add"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  fill="none"
                  viewBox="0 0 21 20"
               >
                  <g fill="#C73B0F">
                     <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                     <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
                  </g>
                  <defs>
                     <clipPath id="a">
                        <path fill="#fff" d="M.333 0h20v20h-20z" />
                     </clipPath>
                  </defs>
               </svg>
               Add to Cart
            </Button>
         )}

         <div className="product__description">
            <span className="product__description--text">{category}</span>
            <h3 className="heading--3">{name}</h3>
            <strong className="product__description--price">
               {formatCurreny(price)}
            </strong>
         </div>
      </article>
   );
}

export default ProductListItem;
