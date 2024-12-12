/*eslint-disable */


// import CANONEOSDSLRCamera  from "./images/products/2.jpg"
// import ASUSFHDGamingLaptop  from "./images/products/3.jpg"
// import CurologyProductSet  from "./images/products/4.jpg"
// import KidsElectricCar  from "./images/products/5.jpg"
// import JrZoomSoccerCleats  from "./images/products/6.jpg"
// import GP11ShooterUSBGamepad  from "./images/products/7.jpg"
// import QuiltedSatinJacket  from "./images/products/8.jpg"

import React, { createContext, useState, useEffect } from 'react';

// إنشاء السياق
export const ProductContext = createContext();




export const ProductProvider = ({ children }) => {


    const getInitialProducts = () => {
      const savedProducts = localStorage.getItem('products');
      if (savedProducts) {
        // إذا كانت المنتجات موجودة بالفعل في localStorage
        return JSON.parse(savedProducts);
      } else {
        // إذا لم تكن المنتجات موجودة، إضافة المنتجات الافتراضية إلى localStorage
        const initialProducts = [
          {
            name: "ASUS",
            price: "L.E  12000",
            image1: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/ASUS_tfrzuk.jpg',
            image2: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/ASUS_tfrzuk.jpg',
            image3: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/ASUS_tfrzuk.jpg',
            image4: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/ASUS_tfrzuk.jpg',
            id: 1,
            color: ['red', 'green', 'blue', 'white', 'black'],
            sizes: ['S', 'M', 'L'],
            quantity: 10
          },
          {
            name: "Pull & Bear",
            price: "L.E  360",
            image1: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667003/Pull_Bear_wwgwjm.jpg',
            image2: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667003/Pull_Bear_wwgwjm.jpg',
            image3: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667003/Pull_Bear_wwgwjm.jpg',
            image4: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667003/Pull_Bear_wwgwjm.jpg',
            id: 2,
            color: ['red', 'green', 'blue', 'white', 'black'],
            sizes: ['S', 'M', 'L'],
            quantity: 10
          },
          {
            name: "H&M",
            price: "L.E  300",
            image1: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/H_M_cio4ct.jpg',
            image2: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/H_M_cio4ct.jpg',
            image3: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/H_M_cio4ct.jpg',
            image4: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/H_M_cio4ct.jpg',
            id: 3,
            color: ['red', 'green', 'blue', 'white', 'black'],
            sizes: ['S', 'M', 'L'],
            quantity: 10
          },
          {
            name: "Stradivarius",
            price: "L.E  500",
            image1: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/Stradivarius_tbamke.jpg',
            image2: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/Stradivarius_tbamke.jpg',
            image3: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/Stradivarius_tbamke.jpg',
            image4: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/Stradivarius_tbamke.jpg',
            id: 4,
            color: ['red', 'green', 'blue', 'white', 'black'],
            sizes: ['S', 'M', 'L'],
            quantity: 10
          },
          {
            name: "IKEA office",
            price: "L.E  1000",
            image1: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/IKEA_v5kxzk.jpg',
            image2: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/IKEA_v5kxzk.jpg',
            image3: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/IKEA_v5kxzk.jpg',
            image4: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/IKEA_v5kxzk.jpg',
            id: 5,
            color: ['red', 'green', 'blue', 'white', 'black'],
            sizes: ['S', 'M', 'L'],
            quantity: 10
          },
          {
            name: "IKEA",
            price: "L.E  1500",
            image1: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/IKEA_hnitze.webp',
            image2: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/IKEA_hnitze.webp',
            image3: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/IKEA_hnitze.webp',
            image4: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/IKEA_hnitze.webp',
            id: 6,
            color: ['red', 'green'],
            sizes: ['S', 'M', 'L'],
            quantity: 10
          },
          {
            name: "DualShock4",
            price: "L.E  1000",
            image1: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/DualShock4_jyz7gt.jpg',
            image2: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/DualShock4_jyz7gt.jpg',
            image3: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/DualShock4_jyz7gt.jpg',
            image4: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/DualShock4_jyz7gt.jpg',
            id: 7,
            color: ['red', 'green', 'blue', 'white', 'black'],
            sizes: ['S', 'M', 'L'],
            quantity: 10
          },
          {
            name: "JBL Wireless",
            price: "L.E  660",
            image1: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/JBL_Wireless_hqdqcv.jpg',
            image2: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/JBL_Wireless_hqdqcv.jpg',
            image3: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/JBL_Wireless_hqdqcv.jpg',
            image4: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/JBL_Wireless_hqdqcv.jpg',
            id: 8,
            color: ['red', 'green', 'blue', 'white', 'black'],
            sizes: ['S', 'M', 'L'],
            quantity: 10
          },
          {
            name: "Luxury",
            price: "L.E  660",
            image1: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/Luxury_gvn33z.jpg',
            image2: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/Luxury_gvn33z.jpg',
            image3: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/Luxury_gvn33z.jpg',
            image4: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/Luxury_gvn33z.jpg',
            id: 9,
            color: ['red', 'green', 'blue', 'white', 'black'],
            sizes: ['S', 'M', 'L'],
            quantity: 10
          },
          {
            name: "Reebok",
            price: "L.E  200",
            image1: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/Reebok_uzqsrp.jpg',
            image2: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/Reebok_uzqsrp.jpg',
            image3: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/Reebok_uzqsrp.jpg',
            image4: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/Reebok_uzqsrp.jpg',
            id: 10,
            color: ['red', 'green', 'blue', 'white', 'black'],
            sizes: ['S', 'M', 'L'],
            quantity: 10
          },
          {
            name: "ViewSonic",
            price: "L.E  3000",
            image1: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/ViewSonic_jmgecw.jpg',
            image2: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/ViewSonic_jmgecw.jpg',
            image3: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/ViewSonic_jmgecw.jpg',
            image4: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667002/ViewSonic_jmgecw.jpg',
            id: 11,
            color: ['red', 'green', 'blue', 'white', 'black'],
            sizes: ['S', 'M', 'L'],
            quantity: 10
          },
          {
            name: "Passive Subwoofers",
            price: "L.E  400",
            image1: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667003/Passive_Subwoofers_bf32km.jpg',
            image2: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667003/Passive_Subwoofers_bf32km.jpg',
            image3: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667003/Passive_Subwoofers_bf32km.jpg',
            image4: 'https://res.cloudinary.com/dvpn5174r/image/upload/v1733667003/Passive_Subwoofers_bf32km.jpg',
            id: 12,
            color: ['red', 'green', 'blue', 'white', 'black'],
            sizes: ['S', 'M', 'L'],
            quantity: 10
          }
        ]
        localStorage.setItem('products', JSON.stringify(initialProducts));
        
        // إرجاع المنتجات الافتراضية للاستخدام في الحالة
        return initialProducts;
      }
    };


  
  // استخدام الحالة لتخزين المنتجات
  const [products, setProducts] = useState(getInitialProducts);

  // حفظ البيانات في التخزين المحلي عند أي تحديث للمنتجات
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

    // دالة لتحديث المنتج
  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) => 
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  // دالة لإضافة منتج جديد
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // دالة لحذف منتج
  const deleteProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
  };

  const getProductsByIdRange = (minId, maxId) =>
    products.filter(product => product.id > minId && product.id < maxId)

  return (
    <ProductContext.Provider value={{ products, updateProduct, addProduct, deleteProduct, getProductsByIdRange }}>
      {children}
    </ProductContext.Provider>
  );
};


// import React, { createContext, useState } from 'react';

// // إنشاء السياق
// export const ProductContext = createContext();

// // مكون يوفر البيانات
// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([
//     // هنا قم بإدخال المنتجات الافتراضية أو قم بجلبها من API أو ملف JSON
//     {
//       id: 1,
//       name: "Product 1",
//       price: 100,
//       colors: ['red', 'green'],
//       sizes: ['S', 'M', 'L'],
//       quantity: 10
//     },
//     // المزيد من المنتجات...
//   ]);

//   // دالة لتحديث المنتج
//   const updateProduct = (updatedProduct) => {
//     setProducts((prevProducts) => 
//       prevProducts.map((product) =>
//         product.id === updatedProduct.id ? updatedProduct : product
//       )
//     );
//   };

//   // دالة لإضافة منتج جديد
//   const addProduct = (newProduct) => {
//     setProducts((prevProducts) => [...prevProducts, newProduct]);
//   };

//   // دالة لحذف منتج
//   const deleteProduct = (productId) => {
//     setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
//   };

//   return (
//     <ProductContext.Provider value={{ products, updateProduct, addProduct, deleteProduct }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };
