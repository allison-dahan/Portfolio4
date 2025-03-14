// This file provides placeholders for images during development
// Since we don't have the real images yet

// Category placeholder images
const categoryImages = {
    categories: '/images/categories.jpg',
    designers: '/images/designers.jpg',
    'new-arrivals': '/images/new-arrivals.jpg',
    sale: '/images/sale.jpg',
    bags: '/images/bags.jpg',
    jewelry: '/images/jewelry.jpg',
    'rare-finds': '/images/rare-finds.jpg',
  };
  
  // Product category placeholders
  const productCategoryImages = {
    handbags: '/images/products/category-handbags.jpg',
    dresses: '/images/products/category-dresses.jpg',
    'jackets-coats': '/images/products/category-jackets.jpg',
    shoes: '/images/products/category-shoes.jpg',
    accessories: '/images/products/category-accessories.jpg',
    activewear: '/images/products/category-activewear.jpg',
  };
  
  // Product placeholders
  const productImages = {
    'gucci-ophidia': '/images/products/gucci-ophidia.jpg',
    'burberry-crossbody': '/images/products/burberry-crossbody.jpg',
    'dior-book': '/images/products/dior-book.jpg',
    'ferragamo-handle': '/images/products/ferragamo-handle.jpg',
    'chanel-flap': '/images/products/chanel-flap.jpg',
    'lv-neverfull': '/images/products/lv-neverfull.jpg',
  };
  
  // Designer logos (if needed)
  const designerLogos = {
    gucci: '/images/designers/gucci.jpg',
    burberry: '/images/designers/burberry.jpg',
    'louis-vuitton': '/images/designers/louis-vuitton.jpg',
    chanel: '/images/designers/chanel.jpg',
    prada: '/images/designers/prada.jpg',
    dior: '/images/designers/dior.jpg',
  };
  
  // This function helps create a temporary color placeholder
  // Use this if you don't have the actual placeholder image files yet
  const createColorPlaceholder = (name: string, color = '#f0f0f0'): string => {
    // In a real app, you would check if the image exists and return a fallback if not
    // For now, we'll always return the color placeholder for testing
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' width='500' height='500'%3E%3Crect width='1' height='1' fill='${color.replace('#', '%23')}' /%3E%3Ctext x='0.5' y='0.5' font-family='Arial' font-size='0.1' fill='%23888' text-anchor='middle' alignment-baseline='middle'%3E${name}%3C/text%3E%3C/svg%3E`;
  };
  
  export {
    categoryImages,
    productCategoryImages,
    productImages,
    designerLogos,
    createColorPlaceholder,
  };