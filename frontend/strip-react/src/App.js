import { useEffect, useState } from "react";
import "./App.css";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51MlOuZSDCHf8adi5O3PcUJXupmmuqOYUD89GRKpGA9gCW41P72S1YlXJzDVwFeb5sjCSoJ2r6DNb2TpobFKDWW0I00KQQjqixv"
);
function App() {
  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#8e8f90",
    },
  };
  const [clientSecret, setClientSecret] = useState("");
  const options = {
    clientSecret,
    appearance,
  };
  useEffect(() => {
    fetch("http://localhost:5023/create-stripe-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 10000 }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log("clientSecret :>> ", clientSecret);
      });
  }, []);
  return (
    <div className="App">
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default App;
