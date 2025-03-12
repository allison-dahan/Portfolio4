'use client'

import React from 'react';
import Header from '../../components/layout/Header';
import BottomNav from '../../components/navigation/BottomNav';

export default function ObsessionsPage() {
  return (
    <div className="pb-16">
      <Header title="Obsessions" />
      
      <main className="p-6 flex flex-col items-center justify-center min-h-[70vh]">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Your Obsessions</h1>
          <p className="mb-6 text-gray-600">Save items you love and get notifications on price drops.</p>
          
          <div className="p-10 border border-gray-300 rounded-lg flex flex-col items-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="mt-4 text-lg">No items saved yet</p>
            <p className="mt-2 text-sm text-gray-500">Start adding items to your obsessions</p>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}