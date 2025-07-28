let CheckoutSteps = [
    {
        name: "Customer Info",
        Component: () => (
            <div>Provide Your contact Details</div>
        )
    },
    {
        name: "Shipping Info",
        Component: () => (
            <div>Enter Your Shipping address</div>
        )
    },
    {
        name: "Payment",
        Component: () => (
            <div>Complete Payment for your order</div>
        )
    },
    {
        name: "Delivered",
        Component: () => (
            <div>Your Order has been delivered</div>
        )
    }
];

export default CheckoutSteps;
