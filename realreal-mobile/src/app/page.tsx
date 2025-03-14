'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/layout/Header';
import BottomNav from '../components/navigation/BottomNav';

// Banner component for promotional sections
interface BannerProps {
  title: string;
  subtitle?: string;
  backgroundColor: string;
  textColor: string;
  buttonText: string;
  buttonLink: string;
  buttonColor?: string;
  buttonTextColor?: string;
}

const PromoBanner = ({ 
  title, 
  subtitle, 
  backgroundColor, 
  textColor, 
  buttonText, 
  buttonLink,
  buttonColor = "bg-black",
  buttonTextColor = "text-white"
}: BannerProps) => {
  return (
    <div className={`w-full mb-6 overflow-hidden rounded-lg ${backgroundColor}`}>
      <div className="p-6">
        <h2 className={`text-2xl font-serif mb-1 ${textColor}`}>{title}</h2>
        {subtitle && <p className={`mb-4 ${textColor} opacity-90`}>{subtitle}</p>}
        <Link href={buttonLink}>
          <div className={`${buttonColor} ${buttonTextColor} py-3 px-6 inline-block`}>
            <span className="font-medium tracking-wider">{buttonText}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

// Featured Item component for seasonal/featured items
interface FeaturedItemProps {
  title: string;
  brand: string;
  image: string;
  href: string;
}

const FeaturedItem = ({ title, brand, image, href }: FeaturedItemProps) => {
  return (
    <Link href={href}>
      <div className="relative rounded overflow-hidden">
        <div className="aspect-square relative">
          <Image
            src={image}
            alt={`${brand} ${title}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-end p-4">
          <div className="bg-white bg-opacity-80 px-4 py-2 w-full">
            <p className="text-center font-medium text-sm">{brand}</p>
            <p className="text-center text-sm">{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function HomePage() {
  // Featured seasonal items - redirecting all product links to /handbags
  const featuredItems = [
    { 
      brand: 'Gucci',
      title: 'Leather Ophidia Mini',
      image: '/images/products/gucci-ophidia.png',
      href: '/handbags' // Changed from /product/1
    },
    { 
      brand: 'Burberry',
      title: 'Leather Crossbody Bag',
      image: '/images/products/burberry-crossbody.png',
      href: '/handbags' // Changed from /product/2
    },
    { 
      brand: 'Chanel',
      title: 'Vintage Quilted Flap Bag',
      image: '/images/products/chanel-flap.png',
      href: '/handbags' // Changed from /product/5
    },
    { 
      brand: 'Louis Vuitton',
      title: 'Monogram Canvas Neverfull MM',
      image: '/images/products/lv-neverfull.png',
      href: '/handbags' // Changed from /product/6
    },
  ];
  
  return (
    <div className="pb-16">
      <Header title="The RealReal" />
      
      {/* Promo Banner */}
      <div className="bg-gray-100 py-2 text-center text-sm">
        <p>20% Off! Code: REAL — Terms Apply*</p>
      </div>
      
      <main className="px-4 pt-4">
        {/* New Arrivals Banner */}
        <PromoBanner 
          title="New Arrivals"
          subtitle="10,000+ Must-See Finds"
          backgroundColor="bg-gray-100"
          textColor="text-black"
          buttonText="SHOP NOW"
          buttonLink="/handbags"
          buttonColor="bg-black"
        />
        
        {/* Sale Banner - pointing to handbags */}
        <PromoBanner 
          title="Winter Sale"
          subtitle="Up to 70% Off Designer Items"
          backgroundColor="bg-[#B2202E]" 
          textColor="text-white"
          buttonText="SHOP SALE"
          buttonLink="/handbags" // Changed from /category/sale
          buttonColor="bg-white"
          buttonTextColor="text-[#B2202E]"
        />
        
        {/* Seasonal / Featured Items Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-serif mb-4">Featured Items</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {featuredItems.map((item, index) => (
              <FeaturedItem
                key={index}
                brand={item.brand}
                title={item.title}
                image={item.image}
                href={item.href}
              />
            ))}
          </div>
        </div>
        
        {/* Trending Designers Section - pointing to /shop */}
        <div className="mt-8 pb-8">
          <h2 className="text-2xl font-serif mb-4">Trending Designers</h2>
          
          <div className="flex flex-wrap gap-2">
            {['Gucci', 'Chanel', 'Louis Vuitton', 'Prada', 'Burberry', 'Dior'].map((designer) => (
              <Link key={designer} href="/shop">
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