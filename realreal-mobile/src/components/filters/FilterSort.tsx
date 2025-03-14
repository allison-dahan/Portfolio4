'use client'

import React, { useState } from 'react';

// Define FilterOptions type
type FilterOptions = {
  categories?: string[];
  designers?: string[];
  priceRanges?: string[];
};

interface FilterSortProps {
  onFilter: (filters: FilterOptions) => void;
  onSort: (option: string) => void;
  sortOptions: string[];
  initialSort?: string;
}

const FilterSort = ({ onFilter, onSort, sortOptions, initialSort }: FilterSortProps) => {
  const [activeSort, setActiveSort] = useState(initialSort || "Newest First");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<FilterOptions>({
    categories: [],
    designers: [],
    priceRanges: []
  });
  
  const handleSortChange = (option: string) => {
    setActiveSort(option);
    onSort(option);
    setIsSortOpen(false);
  };
  
  const handleApplyFilters = () => {
    onFilter(selectedFilters);
    setIsFilterOpen(false);
  };
  
  return (
    <div className="sticky top-0 z-20 bg-white">
      <div className="flex justify-between p-2 border-b border-gray-200">
        <button 
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded"
        >
          <span className="mr-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 21V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 10V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 21V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 21V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 12V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 14H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 16H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          Filter
        </button>
        
        <div className="relative">
          <button 
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded"
          >
            <span className="mr-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Sort
          </button>
          
          {isSortOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-30 w-56">
              <ul>
                {sortOptions.map((option) => (
                  <li key={option}>
                    <button
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        activeSort === option ? 'font-bold' : ''
                      }`}
                      onClick={() => handleSortChange(option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {activeSort && (
        <div className="px-4 py-2 text-gray-500 text-sm">
          {activeSort}
        </div>
      )}
      
      {/* Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
          <div className="bg-white w-full h-5/6 rounded-t-xl overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="text-lg font-medium"
              >
                ←
              </button>
              <h2 className="text-lg font-medium">Filter</h2>
              <button 
                onClick={() => {
                  setSelectedFilters({
                    categories: [],
                    designers: [],
                    priceRanges: []
                  });
                }}
                className="text-lg font-medium"
              >
                RESET
              </button>
            </div>
            
            <div className="overflow-y-auto h-full pb-20">
              {/* Filter content goes here */}
              {/* Example: Category Filter */}
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg mb-4">Category</h3>
                <div className="space-y-4">
                  {['Women', 'Men', 'Jewelry', 'Watches', 'Art', 'Home', 'Kids'].map((category) => (
                    <div key={category} className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="mr-3 h-5 w-5"
                          onChange={(e) => {
                            const isChecked = e.target.checked;
                            setSelectedFilters(prev => {
                              const updatedCategories = isChecked 
                                ? [...(prev.categories || []), category]
                                : (prev.categories || []).filter(c => c !== category);
                              return { ...prev, categories: updatedCategories };
                            });
                          }}
                          checked={selectedFilters.categories?.includes(category) || false}
                        />
                        <span>{category}</span>
                      </label>
                      <button className="transform transition-transform">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg mb-4">Designer</h3>
                <div className="space-y-4">
                  {['Gucci', 'Louis Vuitton', 'Chanel', 'Prada', 'Burberry', 'Dior'].map((designer) => (
                    <div key={designer} className="flex items-center">
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="mr-3 h-5 w-5"
                          onChange={(e) => {
                            const isChecked = e.target.checked;
                            setSelectedFilters(prev => {
                              const updatedDesigners = isChecked 
                                ? [...(prev.designers || []), designer]
                                : (prev.designers || []).filter(d => d !== designer);
                              return { ...prev, designers: updatedDesigners };
                            });
                          }}
                          checked={selectedFilters.designers?.includes(designer) || false}
                        />
                        <span>{designer}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg mb-4">Price</h3>
                <div className="space-y-4">
                  {['Under $500', '$500-$1000', '$1000-$2500', '$2500-$5000', 'Over $5000'].map((priceRange) => (
                    <div key={priceRange} className="flex items-center">
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="mr-3 h-5 w-5"
                          onChange={(e) => {
                            const isChecked = e.target.checked;
                            setSelectedFilters(prev => {
                              const updatedPriceRanges = isChecked 
                                ? [...(prev.priceRanges || []), priceRange]
                                : (prev.priceRanges || []).filter(p => p !== priceRange);
                              return { ...prev, priceRanges: updatedPriceRanges };
                            });
                          }}
                          checked={selectedFilters.priceRanges?.includes(priceRange) || false}
                        />
                        <span>{priceRange}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="fixed bottom-0 w-full bg-white p-4 border-t border-gray-200">
              <button 
                onClick={handleApplyFilters}
                className="w-full bg-black text-white py-3 rounded font-medium"
              >
                APPLY FILTERS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSort;