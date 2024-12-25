import { useEffect, useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant.js";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const navigation = useNavigation();

  const formErrors = useActionData();
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    if (formErrors?.rejected) {
      setShowError(true);
      const timeout = setTimeout(() => {
        setShowError(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [formErrors]);

  return (
    <div>
      <h2>Ready to order? Lets go!</h2>

      <Form method="POST" action="/order/new">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(fakeCart)} />

        <div>
          <button
            disabled={true}
            className="inline-block rounded-full bg-yellow-400 px-3 py-4 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
          >
            {navigation.state === "submitting" ? "Placing Order" : "Order now"}
          </button>
        </div>
        {showError && <p>{formErrors.rejected}</p>}
      </Form>
    </div>
  );
}

export async function action({ request }) {
  // Get the form data from the request
  const formData = await request.formData();

  // Convert the FormData to a plain object for easy inspection
  const data = Object.fromEntries(formData.entries());

  // Log the form data object

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  const errors = {};

  if (!isValidPhone(order.phone)) {
    errors.phone = "Invalid Phone Number. Try again ";
  }

  if (Object.keys(errors).length > 0) return errors;
  try {
    // const newOrder = await createOrder(order);
    // return redirect(`/order/${newOrder.id}`); // You can return a redirect or other data if needed
    // return null;
  } catch (error) {
    errors.rejected = error.message;
    return errors;
  }
}

export default CreateOrder;
