'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../src/components/layout/Header';
import BottomNav from '../../../src/components/navigation/BottomNav';

// Create a separate CategoryTile component
interface CategoryTileProps {
  title: string;
  image: string;
  href: string;
  isWide?: boolean;
}

const CategoryTile = ({ title, image, href, isWide = false }: CategoryTileProps) => {
  return (
    <Link href={href}>
      <div className={`relative rounded overflow-hidden ${isWide ? 'col-span-2' : 'col-span-1'}`}>
        <div className="aspect-square relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 flex items-end p-4">
          <div className="bg-white bg-opacity-80 px-4 py-2 w-full">
            <p className="text-center font-medium uppercase text-sm tracking-wide">{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function ShopPage() {
  // Category navigation tabs
  const categoryTabs = ['HOME', 'KIDS', 'ALL', 'WOMEN', 'MEN', 'JEWELRY', 'WATCHES'];
  const [activeTab, setActiveTab] = React.useState('WOMEN');
  
  // Featured product categories
  const featuredCategories = [
    { 
      title: 'HANDBAGS', 
      image: '/images/products/category-handbags.jpg',
      href: '/category/women/handbags' 
    },
    { 
      title: 'DRESSES', 
      image: '/images/products/category-dresses.jpg', 
      href: '/category/women/dresses' 
    },
    { 
      title: 'JACKETS & COATS', 
      image: '/images/products/category-jackets.jpg', 
      href: '/category/women/jackets-coats' 
    },
    { 
      title: 'SHOES',
      image: '/images/products/category-shoes.jpg', 
      href: '/category/women/shoes' 
    },
    { 
      title: 'ACCESSORIES', 
      image: '/images/products/category-accessories.jpg',
      href: '/category/women/accessories' 
    },
    { 
      title: 'ACTIVEWEAR', 
      image: '/images/products/category-activewear.jpg',
      href: '/category/women/activewear' 
    },
  ];
  
  return (
    <div className="pb-16">
      <Header title="The RealReal" />
      
      {/* Category Tabs */}
      <div className="border-b border-gray-200 overflow-x-auto scrollbar-hide">
        <div className="flex whitespace-nowrap px-2">
          {categoryTabs.map((tab) => (
            <button
              key={tab}
              className={`py-3 px-4 font-medium text-sm relative ${
                activeTab === tab
                  ? 'text-black'
                  : 'text-gray-400'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Promo Banner */}
      <div className="bg-gray-100 py-2 text-center text-sm">
        <p>20% Off! Code: REAL — Terms Apply*</p>
      </div>
      
      <main>
        {/* Featured Header */}
        <div className="px-4 pt-6 pb-4">
          <p className="uppercase text-sm tracking-wider font-medium">THIS JUST IN</p>
          <h1 className="text-4xl font-serif mt-1">10,000+ Must-See Finds</h1>
        </div>
        
        {/* Shop All Banner */}
        <div className="px-4 mb-4">
          <Link href="/category/all">
            <div className="bg-black text-white py-3 flex items-center justify-center">
              <span className="font-medium tracking-wider">SHOP ALL</span>
            </div>
          </Link>
        </div>
        
        {/* Featured Categories Grid */}
        <div className="px-4 grid grid-cols-2 gap-4">
          {featuredCategories.map((category, index) => (
            <CategoryTile
              key={category.title}
              title={category.title}
              image={category.image}
              href={category.href}
              isWide={index === 0} // Make the first category tile wider
            />
          ))}
        </div>
        
        {/* New Arrivals Section */}
        <div className="mt-8 px-4">
          <h2 className="text-2xl font-serif mb-4">New Arrivals</h2>
          
          <Link href="/category/new-arrivals">
            <div className="border border-gray-300 py-3 text-center">
              <span className="font-medium">VIEW ALL NEW ARRIVALS</span>
            </div>
          </Link>
        </div>
        
        {/* Trending Designers Section */}
        <div className="mt-8 px-4 pb-8">
          <h2 className="text-2xl font-serif mb-4">Trending Designers</h2>
          
          <div className="flex flex-wrap gap-2">
            {['Gucci', 'Chanel', 'Louis Vuitton', 'Prada', 'Burberry', 'Dior'].map((designer) => (
              <Link key={designer} href={`/designer/${designer.toLowerCase().replace(' ', '-')}`}>
                <div className="bg-gray-100 px-4 py-2 rounded-full">
                  <span className="font-medium">{designer}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Exclusive Offers Banner */}
        <div className="fixed bottom-16 left-0 right-0 bg-black text-white py-3 px-4 flex justify-between items-center z-10">
          <div>
            <p className="text-sm font-medium">New: Your Exclusive Offers</p>
          </div>
          <div className="flex items-center">
            <span className="mr-4">1 Offer</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}