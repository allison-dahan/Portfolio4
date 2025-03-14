'use client'

import React from 'react';
import Header from '../../components/layout/Header';
import BottomNav from '../../components/navigation/BottomNav';

export default function MyTRRPage() {
  return (
    <div className="pb-16">
      <Header title="My TRR" />
      
      <main className="p-6">
        <h1 className="text-2xl font-serif mb-6">My Account</h1>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded flex justify-between items-center">
            <div>
              <h2 className="font-medium">Orders</h2>
              <p className="text-sm text-gray-500">View your order history</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="p-4 border border-gray-200 rounded flex justify-between items-center">
            <div>
              <h2 className="font-medium">Payment Methods</h2>
              <p className="text-sm text-gray-500">Manage your payment methods</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="p-4 border border-gray-200 rounded flex justify-between items-center">
            <div>
              <h2 className="font-medium">Account Settings</h2>
              <p className="text-sm text-gray-500">Update your personal information</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}