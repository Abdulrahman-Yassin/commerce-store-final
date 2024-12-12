// // import { useLocation, useNavigate } from "react-router-dom";
// import styles from "./CheckOut.module.css";

// // import payment from "../images/Frame 834.png"

// import { useState } from "react";

// import { useLocation } from "react-router-dom";
// import emailjs from 'emailjs-com';

// function CheckOut() {
//   const location = useLocation();
//   // const navigate = useNavigate();

//   // const checkoutData = location.state;

//   // if (!checkoutData) {
//   //   navigate("/Cart");
//   //   return null;
//   // }

//   // **********************************************************************

  


//   // ****************************************************************************

//   return (
//     <div className={styles.page}>
//       <span>
//         Home / Cart / <span> CheckOut</span>
//       </span>
//       <h1>Billing Details</h1>
//       <div className={styles.container}>
//         <div className={styles.form}>
//           <span>First Name*</span>
//           <input type="text" />
//           <span>Company Name</span>
//           <input type="text" />
//           <span>Street Address*</span>
//           <input type="text" />
//           <span>Apartment, floor, etc. (optional)</span>
//           <input type="text" />
//           <span>Town/City*</span>
//           <input type="text" />
//           <span>Phone Number*</span>
//           <input type="text" />
//           <span>Email Address*</span>
//           <input type="text" />
//         <button className={styles.apply}>Place Order</button>
//         </div>
//         <div className={styles.total}>
//             {/* <div>
//                 {checkoutData.products.map((product, index) => (
//                     <div key={index} className={styles.product}>
//                         <div>
//                             <img src={product.image} alt={product.name} width="50" />
//                             <span>{product.name}  x{product.quantity} </span>
//                         </div>
//                         <span> ${product.subtotal}</span>
//                     </div>
//                 ))}
//             </div> */}
//             {/* <div className={styles.Price}>
//                 <span>Subtotal: </span>
//                 <span>${checkoutData.totalPrice}</span>
//             </div>
//             <hr />
//             <div className={styles.Price}>
//                 <span>Shipping:</span>
//                 <span>Free</span>
//             </div>
//             <hr />
//             <div className={styles.Price}>
//                 <span>Total: </span>
//                 <span>${checkoutData.totalPrice}</span>
//             </div> */}
//             {/* <div className={styles.payment}>
//                 <div className={styles.radio}>
//                     <div>
//                       <div className={styles.bank}>
//                           <input type="radio" value='bank' id="bank" name="payment" />
//                           <label htmlFor="bank">Bank</label>
//                       </div>
//                       <img src={payment} alt="" />
//                     </div>
//                 </div>
//                   <div className={styles.cash}>
//                       <input type="radio" value='Cash' name="payment" id="Cash"/>
//                       <label htmlFor="Cash">Cash on delivery</label>
//                   </div>
//                 <div className={styles.coupon}>
//                     <input type="text" placeholder="Coupon Code" />
//                     <button className={styles.apply}>Apply Coupon</button>
//                 </div>
//                 </div> */}
//         </div>
//       </div>
//                 {/* <button className={styles.apply}>Place Order</button> */}
//     </div>
//   );
// }

// export default CheckOut;



// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import emailjs from 'emailjs-com';
// import styles from "./CheckOut.module.css";

// function CheckOut() {
//   const location = useLocation();
//   const checkoutData = location.state; 

//   const [customerDetails, setCustomerDetails] = useState({
//     firstName: '',
//     companyName: '',
//     streetAddress: '',
//     apartment: '',
//     city: '',
//     phoneNumber: '',
//     email: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCustomerDetails(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const sendOrder = () => {
//     if (!customerDetails.firstName || !customerDetails.phoneNumber || !customerDetails.email) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     const emailParams = checkoutData?.productName && checkoutData?.selectedColor && checkoutData?.selectedSize
//       ? {
//           productName: checkoutData.productName,
//           selectedColor: checkoutData.selectedColor,
//           selectedSize: checkoutData.selectedSize,
//           quantity: checkoutData.quantity,
//           price: checkoutData.price,
//           customerName: customerDetails.firstName,
//           customerPhone: customerDetails.phoneNumber,
//           customerEmail: customerDetails.email,
//           companyName: customerDetails.companyName,
//           streetAddress: customerDetails.streetAddress,
//           apartment: customerDetails.apartment,
//           city: customerDetails.city
//         }
//       : {
//           products: checkoutData.products?.map(p => `${p.name} x${p.quantity}`).join(', '),
//           totalPrice: checkoutData.totalPrice,
//           customerName: customerDetails.firstName,
//           customerPhone: customerDetails.phoneNumber,
//           customerEmail: customerDetails.email,
//           companyName: customerDetails.companyName,
//           streetAddress: customerDetails.streetAddress,
//           apartment: customerDetails.apartment,
//           city: customerDetails.city
//         };

//     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams, 'YOUR_PUBLIC_KEY')
//       .then(response => {
//         console.log('SUCCESS!', response.status, response.text);
//         alert("Order placed successfully!");
//       })
//       .catch(err => {
//         console.log('FAILED...', err);
//         alert("Failed to place order, please try again.");
//       });
//   };

//   return (
//     <div className={styles.page}>
//       <span>
//         Home / Cart / <span> CheckOut</span>
//       </span>
//       <h1>Billing Details</h1>
//       <div className={styles.container}>
//         <form className={styles.form}>
//           <span>First Name*</span>
//           <input type="text" name="firstName" value={customerDetails.firstName} onChange={handleInputChange} required />
//           <span>Company Name (optional)</span>
//           <input type="text" name="companyName" value={customerDetails.companyName} onChange={handleInputChange} />
//           <span>Street Address*</span>
//           <input type="text" name="streetAddress" value={customerDetails.streetAddress} onChange={handleInputChange} />
//           <span>Apartment, floor, etc (optional)</span>
//           <input type="text" name="apartment" value={customerDetails.apartment} onChange={handleInputChange} required />
//           <span>Town/City*</span>
//           <input type="text" name="city" value={customerDetails.city} onChange={handleInputChange} required />
//           <span>Phone Number*</span>
//           <input type="text" name="phoneNumber" value={customerDetails.phoneNumber} onChange={handleInputChange} required />
//           <span>Email Address*</span>
//           <input type="email" name="email" value={customerDetails.email} onChange={handleInputChange} required />

//           <button className={styles.apply} onClick={sendOrder}>Place Order</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CheckOut;

import { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from 'emailjs-com';
import styles from "./CheckOut.module.css";

function CheckOut() {
  const location = useLocation();
  const checkoutData = location.state; 

  const [customerDetails, setCustomerDetails] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phoneNumber: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendOrder = () => {
    // التحقق من حقول البيانات الشخصية
    if (!customerDetails.firstName || !customerDetails.phoneNumber || !customerDetails.email) {
      alert("يرجى ملء جميع الحقول المطلوبة.");
      return;
    }

    // إعداد بيانات البريد الإلكتروني
    const emailParams = {
      productName: checkoutData.productName,
      selectedColor: checkoutData.color,
      selectedSize: checkoutData.size,
      quantity: checkoutData.quantity,
      price: checkoutData.totalPrice,
      customerName: customerDetails.firstName,
      customerPhone: customerDetails.phoneNumber,
      customerEmail: customerDetails.email,
      companyName: customerDetails.companyName,
      streetAddress: customerDetails.streetAddress,
      apartment: customerDetails.apartment,
      city: customerDetails.city
    };

    // إرسال البريد الإلكتروني باستخدام EmailJS
    emailjs.send('service_9rk90oo', 'template_kesl1ws', emailParams, 'DjGn5KUxfogq-ehOl')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert("تم تقديم الطلب بنجاح!");
      })
      .catch(err => {
        console.log('FAILED...', err);
        alert("فشل في تقديم الطلب، يرجى المحاولة مرة أخرى.");
      });
  };

  return (
    <div className={styles.page}>
      <span>
        Home / Cart / <span> CheckOut</span>
      </span>
      <h1>تفاصيل الفاتورة</h1>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); sendOrder(); }}>
          <span>الاسم الأول*</span>
          <input type="text" name="firstName" value={customerDetails.firstName} onChange={handleInputChange} required />
          <span>اسم الشركة (اختياري)</span>
          <input type="text" name="companyName" value={customerDetails.companyName} onChange={handleInputChange} />
          <span>عنوان الشارع*</span>
          <input type="text" name="streetAddress" value={customerDetails.streetAddress} onChange={handleInputChange} required />
          <span>شقة، طابق، إلخ (اختياري)</span>
          <input type="text" name="apartment" value={customerDetails.apartment} onChange={handleInputChange} />
          <span>المدينة*</span>
          <input type="text" name="city" value={customerDetails.city} onChange={handleInputChange} required />
          <span>رقم الهاتف*</span>
          <input type="text" name="phoneNumber" value={customerDetails.phoneNumber} onChange={handleInputChange} required />
          <span>البريد الإلكتروني*</span>
          <input type="email" name="email" value={customerDetails.email} onChange={handleInputChange} required />

          <button className={styles.apply} type="submit">تقديم الطلب</button>
        </form>
      </div>
    </div>
  );
}

export default CheckOut;