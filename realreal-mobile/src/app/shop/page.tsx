'use client'

import React from 'react';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import BottomNav from '../../components/navigation/BottomNav';

interface Category {
  id: string;
  name: string;
  image: string;
  highlight?: string;
  viewAll?: boolean;
  action?: string;
}

export default function ShopPage() {
  const categories: Category[] = [
    { id: 'categories', name: 'Categories', image: '/images/categories.jpg', viewAll: true },
    { id: 'designers', name: 'Designers', image: '/images/designers.jpg', viewAll: true },
    { id: 'new-arrivals', name: 'New Arrivals', image: '/images/new-arrivals.jpg', viewAll: true },
    { id: 'sale', name: 'Sale', image: '/images/sale.jpg', highlight: 'Up to 75% Off', viewAll: true },
    { id: 'bags', name: 'Bags', image: '/images/bags.jpg', viewAll: true },
    { id: 'jewelry', name: 'Jewelry', image: '/images/jewelry.jpg', viewAll: true },
    { id: 'rare-finds', name: 'Rare Finds', image: '/images/rare-finds.jpg', action: 'LEARN MORE' }
  ];
  
  return (
    <div className="pb-16">
      <Header />
      
      <main>
        <div className="mt-1">
          <h1 className="text-2xl px-4 py-2 font-serif">Shop</h1>
          
          {categories.map((category) => (
            <Link key={category.id} href={category.id === 'new-arrivals' ? '/handbags' : `/category/${category.id}`}>
              <div className="relative my-1 h-32 border-b border-gray-100 bg-gray-50 overflow-hidden">
                <div className="absolute inset-0">
                  {/* We'll use empty divs with background colors as placeholders */}
                  {/* In production, you would use real images */}
                  <div className="absolute inset-0 bg-gray-200" style={{
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} />
                </div>
                
                <div className="relative h-full flex items-center px-4">
                  <div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    {category.viewAll && <p className="mt-1 text-sm">VIEW ALL</p>}
                    {category.action && <p className="mt-1 text-sm">{category.action}</p>}
                  </div>
                  {category.highlight && (
                    <div className="ml-auto text-right">
                      <p className="text-3xl font-serif">{category.highlight}</p>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}