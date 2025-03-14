'use client'

import React from 'react';
import Link from 'next/link';
import Header from '../../components/layout/Header';
import BottomNav from '../../components/navigation/BottomNav';

// Category item component
interface CategoryItemProps {
  title: string;
  href: string;
  count?: number;
}

const CategoryItem = ({ title, href, count }: CategoryItemProps) => {
  return (
    <Link href={href}>
      <div className="py-4 px-4 border-b border-gray-100 flex items-center justify-between">
        <span className="font-medium">{title}</span>
        <div className="flex items-center">
          {count && <span className="text-gray-500 mr-2 text-sm">{count}</span>}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  );
};

// Featured designer component
interface DesignerChipProps {
  name: string;
  href: string;
}

const DesignerChip = ({ name, href }: DesignerChipProps) => {
  return (
    <Link href={href}>
      <div className="bg-gray-100 px-4 py-2 rounded-full">
        <span className="font-medium">{name}</span>
      </div>
    </Link>
  );
};

export default function ShopPage() {
  // Main categories
  const mainCategories = [
    { title: 'Women', href: '/category/women', count: 10245 },
    { title: 'Men', href: '/category/men', count: 8753 },
    { title: 'Jewelry', href: '/category/jewelry', count: 4521 },
    { title: 'Watches', href: '/category/watches', count: 3287 },
    { title: 'Bags', href: '/category/bags', count: 6542 },
    { title: 'Home', href: '/category/home', count: 2145 },
    { title: 'Kids', href: '/category/kids', count: 1532 },
  ];

  // Featured designers
  const featuredDesigners = [
    'Gucci', 'Chanel', 'Louis Vuitton', 'Prada', 'Burberry', 'Dior',
    'Hermès', 'Cartier', 'Tiffany & Co.', 'Fendi', 'Saint Laurent', 'Balenciaga'
  ];
  
  return (
    <div className="pb-16">
      <Header title="Shop" />

      <main>
        {/* Categories Section */}
        <div className="bg-white">
          <div className="px-4 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-serif">Categories</h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            {mainCategories.map((category) => (
              <CategoryItem 
                key={category.title}
                title={category.title}
                href={category.href}
                count={category.count}
              />
            ))}
          </div>
        </div>
        
        {/* Popular Searches */}
        <div className="mt-6 px-4">
          <h2 className="text-2xl font-serif mb-4">Popular Searches</h2>
          
          <div className="space-y-2">
            <CategoryItem title="New Arrivals" href="/category/new-arrivals" />
            <CategoryItem title="Sale" href="/category/sale" />
            <CategoryItem title="Handbags" href="/handbags" />
            <CategoryItem title="Fine Jewelry" href="/category/fine-jewelry" />
            <CategoryItem title="Luxury Watches" href="/category/luxury-watches" />
          </div>
        </div>
        
        {/* Featured Designers Section */}
        <div className="mt-6 px-4 pb-8">
          <h2 className="text-2xl font-serif mb-4">Featured Designers</h2>
          
          <div className="flex flex-wrap gap-2">
            {featuredDesigners.map((designer) => (
              <DesignerChip 
                key={designer}
                name={designer}
                href={`/designer/${designer.toLowerCase().replace(' ', '-')}`}
              />
            ))}
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}