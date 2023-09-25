import Navbar from "./components/Navbar";
import CartContainers from "./components/CartContainers";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { store } from "./store";
import { useEffect } from "react";

function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  
  return <main>
    <Navbar />
    <CartContainers />
  </main>
}
export default App;
