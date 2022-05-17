import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalCheckoutButton = ({product}) => {

    return (
        <PayPalButtons
            createOrder={(data, actions, err) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                });
            }}
            onApprove={async(data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
            }}
            onError={(err) => {
                console.log("PayPal Checkout Failed", err);
            }}
        />
    )
}

export default PayPalCheckoutButton;