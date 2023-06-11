import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClass from "../../../hooks/useSelectedClass";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);


const Payment = () => {

    const [classCart] = useSelectedClass();
    const total = classCart.reduce( (sum, item) => sum + item.price, 0);
    const price = parseFloat(parseFloat(total).toFixed(2));


    return (
        <div >
            <div className="mt-20">
                <h2 className="text-3xl text-center text-violet-600">Please Proceed payment </h2>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm classCart={classCart} price={price}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;