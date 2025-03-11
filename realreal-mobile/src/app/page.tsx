'use client'

import React from 'react';
import Link from 'next/link';
import Header from '../../src/components/layout/Header';
import BottomNav from '../../src/components/navigation/BottomNav';

export default function Home() {
  const categories = [
    { id: 'categories', name: 'Categories', image: '/images/categories.jpg' },
    { id: 'designers', name: 'Designers', image: '/images/designers.jpg' },
    { id: 'new-arrivals', name: 'New Arrivals', image: '/images/new-arrivals.jpg' },
    { id: 'sale', name: 'Sale', image: '/images/sale.jpg', highlight: 'Up to 75% Off' },
    { id: 'bags', name: 'Bags', image: '/images/bags.jpg' },
    { id: 'jewelry', name: 'Jewelry', image: '/images/jewelry.jpg' },
    { id: 'rare-finds', name: 'Rare Finds', image: '/images/rare-finds.jpg', action: 'LEARN MORE' }
  ];
  
  return (
    <div className="pb-16">
      <Header />
      
      <main>
        <div className="mt-4">
          <h1 className="text-3xl px-4 pb-2">Shop</h1>
          
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <div className="block relative my-2">
                <div className="flex w-full h-32 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center px-4">
                    <div>
                      <h2 className="text-2xl font-bold">{category.name}</h2>
                      <p className="mt-1">VIEW ALL</p>
                    </div>
                    {category.highlight && (
                      <div className="ml-auto text-right">
                        <p className="text-3xl font-serif">{category.highlight}</p>
                      </div>
                    )}
                  </div>
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