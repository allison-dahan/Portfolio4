import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
  product: {
    id: number;
    brand: string;
    name: string;
    price: string;
    imageUrl: string;
    likes?: number;
  };
}

const ProductCard = ({ product }: ProductProps) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  
  return (
    <div className="relative">
      <div className="absolute top-2 right-2 z-10">
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill={isFavorite ? "black" : "none"} 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          {product.likes && (
            <span className="ml-1 text-xs">{product.likes}</span>
          )}
        </button>
      </div>
      
      <Link href={`/`}>
        <div className="block">
          <div className="relative aspect-square overflow-hidden">
            <Image 
              src={product.imageUrl} 
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <div className="mt-2">
            <h3 className="font-bold text-md">{product.brand}</h3>
            <p className="text-sm text-gray-700">{product.name}</p>
            <p className="font-medium mt-1">{product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;