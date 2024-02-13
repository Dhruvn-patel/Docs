const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = 5023;

const stripe = require("stripe")(
  "sk_test_51MlOuZSDCHf8adi5vk1J7x4WJhF3zpvAzchoAYMPTkO4mo7FxbijKBrVJz9b0fHahC0MeK1s62IsTyHIRfCAATZk00cLoLX19Z"
);
app.post("/create-stripe-payment", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`
listening port ${port}
`);
});
