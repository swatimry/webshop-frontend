import latte from "../../assests/latte.jpg";
import mocha from "../../assests/mocha.jpg";
import coldcoffe from "../../assests/coldcoffe.jpg";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CartItem = ({
  itemname,
  itemquantity,
  itemimg,
  increment,
  decrement,
}) => {
  return (
    <div className="cartitem">
      <div>
        <h4>{itemname}</h4>
        <img src={itemimg} alt={itemname} />
      </div>

      <div>
        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={itemquantity} />
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
const Cart = () => {
  const Dispatch = useDispatch();
  const { cartItems, ItemsPrice, totalAmount, taxPrice, shippingCharges } =
    useSelector((State) => State.cartdata);
  const increment = (item) => {
    switch (item) {
      case 1:
        Dispatch({ type: "AddFrappe" });
        Dispatch({ type: "calcamount" });
        break;
      case 2:
        Dispatch({ type: "AddLatte" });
        Dispatch({ type: "calcamount" });
        break;
      case 3:
        Dispatch({ type: "AddAmericano" });
        Dispatch({ type: "calcamount" });
        break;
      default:
        break;
    }
  };

  const decrement = (item) => {
    switch (item) {
      case 1:
        Dispatch({ type: "DecFrappe" });
        Dispatch({ type: "calcamount" });
        break;
      case 2:
        Dispatch({ type: "DecLatte" });
        Dispatch({ type: "calcamount" });
        break;
      case 3:
        Dispatch({ type: "DecAmericano" });
        Dispatch({ type: "calcamount" });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItemslocal", JSON.stringify(cartItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({
        ItemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
      })
    );
  }, [cartItems, ItemsPrice, taxPrice, totalAmount, shippingCharges]);
  return (
    <section className="cartsection">
      <main>
        <CartItem
          itemname={"Frappe"}
          itemquantity={cartItems.Frappe.quantity}
          itemimg={coldcoffe}
          increment={() => {
            increment(1);
          }}
          decrement={() => {
            decrement(1);
          }}
        />

        <CartItem
          itemname={"Latte"}
          itemquantity={cartItems.Latte.quantity}
          itemimg={latte}
          increment={() => {
            increment(2);
          }}
          decrement={() => {
            decrement(2);
          }}
        />

        <CartItem
          itemname={"Americano"}
          itemquantity={cartItems.Americano.quantity}
          itemimg={mocha}
          increment={() => {
            increment(3);
          }}
          decrement={() => {
            decrement(3);
          }}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{ItemsPrice}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{taxPrice}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{totalAmount}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};
export default Cart;
