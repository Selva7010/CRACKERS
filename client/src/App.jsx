import { Routes, Route, Navigate } from "react-router-dom";

/* AUTH */
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLogin from "./pages/auth/AdminLogin";

/* USER */
import Products from "./pages/user/Products";
import Cart from "./pages/user/Cart";


/* ADMIN */
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AddCrackers from "./pages/admin/AddCrackers";
import EditCrackers from "./pages/admin/EditCrackers";
import AddGiftBox from "./pages/admin/AddGiftBox";
import EditGiftBox from "./pages/admin/EditGiftBox";
import Home from "./pages/user/Home";
import PlaceOrder from "./pages/user/PlaceOrder";
import OrderView from "./pages/user/OrderView";
import OrderSuccess from "./pages/user/OrderSuccess";
import OrderList from "./pages/user/OrderList";
// import OrderList from "./pages/user/OrderList";


export default function App() {
  return (
    <Routes>
      {/* DEFAULT */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* USER AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* USER */}
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/placeorder" element={<PlaceOrder />} />
      <Route path="/ordersuccess/:id" element={<OrderSuccess />} />
      <Route path="/order/:id" element={<OrderView />} />
      <Route path="/orders" element={<OrderList />} />
      {/* <Route path="/orders" element={<OrderList />} /> */}
      

      {/* ADMIN AUTH */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* ADMIN */}
      <Route path="/admin/admindashboard" element={<AdminDashboard />} />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/add-cracker" element={<AddCrackers />} />
      <Route path="/admin/edit-cracker/:id" element={<EditCrackers />} />
      <Route path="/admin/add-giftbox" element={<AddGiftBox />} />
      <Route path="/admin/edit-giftbox/:id" element={<EditGiftBox />} />

      {/* FALLBACK */}
      <Route path="*" element={<h1 className="p-10">404 Page Not Found</h1>} />
    </Routes>
  );
}
