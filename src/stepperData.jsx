let CheckoutSteps = [
    {
        name: "Customer Info",
        Component: () => (
            <div className="message">Provide Your contact Details</div>
        )
    },
    {
        name: "Shipping Info",
        Component: () => (
            <div className="message">Enter Your Shipping address</div>
        )
    },
    {
        name: "Payment",
        Component: () => (
            <div className="message">Complete Payment for your order</div>
        )
    },
    {
        name: "Delivered",
        Component: () => (
            <div className="message">Your Order has been delivered</div>
        )
    }
];

export default CheckoutSteps;
