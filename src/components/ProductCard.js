import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import ReactStars from "react-stars";
import { addToCard } from "../redux/actionCreators/actionCreator";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
    <div
      className='shadow bg-white rounded border  p-3 flex flex-col text-indigo-900'
    >
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-sm'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>
        <ReactStars
        count={5}
        size={20}
        onChange={ratingChanged}
        color2={'#ffd700'}
        value={product.rating}
        edit={false}
        />
      </p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature, index) => {
            return <li key={index} className='text-xs font-medium text-slate-700'>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        <button onClick={()=> dispatch(addToCard(product))} className='bg-indigo-500 rounded py-1 px-2 flex-1 text-white text-bold'>
          Add to cart
        </button>
        <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded'
        >
          <BiListPlus className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
