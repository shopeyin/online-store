import React from "react";

import "./cart-item.style.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart__item">
    <table class="table" style={{ textAlign: "center" }}>
      <tbody>
        <tr>
          <td className="name">
            <img src={imageUrl} alt="item" class="img-fluid" />
          </td>
          <td className="item__details">
            <span className="name">{name}</span>
            <br />
            <span className="price">
              {" "}
              {quantity} x ${price}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CartItem;

// <table class="table" style={{ textAlign: "center" }}>
//   <tbody>
//     <tr>
//       <td className="name">
//         <img src={imageUrl} alt="item" />
//       </td>
//       <td className="item-details">
//         <span className="name">{name}</span>
//         <span className="price">
//           {" "}
//           {quantity} x ${price}
//         </span>
//       </td>
//     </tr>
//   </tbody>
// </table>;

// <img src={imageUrl} alt="item" />
//     <div className="item-details">
//       <span className="name">{name}</span>
//       <span className="price">
//         {" "}
//         {quantity} x ${price}
//       </span>
//     </div>
