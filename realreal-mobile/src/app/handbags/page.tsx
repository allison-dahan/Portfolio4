'use client'

import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import ProductCard from '../../components/products/ProductCard';
import FilterSort from '../../components/filters/FilterSort';
import BottomNav from '../../components/navigation/BottomNav';

// Mock data for handbags
const handbags = [
  {
    id: 1,
    brand: 'Gucci',
    name: 'Leather Ophidia Mini',
    price: 'CA$1,303.68',
    imageUrl: '/images/products/gucci-ophidia.jpg',
    likes: 34
  },
  {
    id: 2,
    brand: 'Burberry',
    name: 'Leather Crossbody Bag',
    price: 'CA$737.51',
    imageUrl: '/images/products/burberry-crossbody.jpg',
    likes: 65
  },
  {
    id: 3,
    brand: 'Christian Dior',
    name: 'Embossed Leather Book Large',
    price: 'CA$2,105.30',
    imageUrl: '/images/products/dior-book.jpg',
    likes: 55
  },
  {
    id: 4,
    brand: 'Salvatore Ferragamo',
    name: 'Leather Top Handle Bag',
    price: 'CA$895.00',
    imageUrl: '/images/products/ferragamo-handle.jpg',
    likes: 38,
    isHold: true
  },
  {
    id: 5,
    brand: 'Chanel',
    name: 'Vintage Quilted Flap Bag',
    price: 'CA$3,599.99',
    imageUrl: '/images/products/chanel-flap.jpg',
    likes: 89
  },
  {
    id: 6,
    brand: 'Louis Vuitton',
    name: 'Monogram Canvas Neverfull MM',
    price: 'CA$1,945.00',
    imageUrl: '/images/products/lv-neverfull.jpg',
    likes: 72
  }
];

export default function HandbagsPage() {
  const [products, setProducts] = useState(handbags);
  
  const sortOptions = [
    'Newest First',
    'Price: Low to High',
    'Price: High to Low',
    'Recently Price Dropped',
    'Trending'
  ];
  
  const handleSort = (option: string) => {
    let sortedProducts = [...products];
    
    switch(option) {
      case 'Price: Low to High':
        sortedProducts.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^\d.]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^\d.]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'Price: High to Low':
        sortedProducts.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^\d.]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^\d.]/g, ''));
          return priceB - priceA;
        });
        break;
      case 'Trending':
        sortedProducts.sort((a, b) => (b.likes || 0) - (a.likes || 0));
        break;
      default:
        // Default is 'Newest First' - No sorting needed as the mock data is already arranged this way
        break;
    }
    
    setProducts(sortedProducts);
  };
  
  const handleFilter = (filters: any) => {
    // In a real app, this would apply the filters to the products
    console.log('Applying filters:', filters);
  };
  
  return (
    <div className="pb-16">
      <Header title="Handbags" showBackButton />
      
      <FilterSort 
        onSort={handleSort} 
        onFilter={handleFilter}
        sortOptions={sortOptions}
        initialSort="Newest First"
      />
      
      <main>
        <div className="px-2 pt-4">
          <h1 className="text-2xl font-bold px-2 mb-4">New Arrivals</h1>
          
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Save Search Banner */}
          <div className="mt-6 mb-4 p-4 bg-black text-white text-center rounded">
            <button className="flex items-center justify-center w-full">
              <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-medium">SAVE SEARCH</span>
            </button>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}