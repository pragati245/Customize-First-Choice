import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login.js';
import Footer from './components/Footer.js';
import Search from './components/Search.js';
import RawProducts from './components/RawProducts.js';
import StitchedProducts from './components/StitchedProducts.js';
import Vendorlogin from './components/Vendorlogin.js';
import VendorHome from './components/VendorHome.js';
import Adminlogin from './components/AdminLogin.js';
import VendorHeader from './components/VendorHeader.js';
import AdminHeader from './components/AdminHeader.js';
import VendorRegister from './components/VendorRegister.js';
import AddProduct from './components/AddProduct.js';
import Register from './components/Register.js';
import ViewProducts from './components/ViewProducts.js';
import ViewCustomer from './components/ViewCustomer.js';
import ViewCategory from './components/ViewCategory.js';
import ViewVendor from './components/ViewVendor.js';
import ViewOrders from './components/ViewOrders.js';
import ViewOrderbyuid from './components/ViewOrderbyuid.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Payment from './components/Payment.js';
import ViewOutofStock from './components/ViewOutofStock.js';
import AddCategory from './components/AddCategory.js';
import ForgetPassword from './components/ForgetPassword.js';
import ResetPassword from './components/ResetPassword.js';
import MyOrderplaced from './components/MyOrderplaced.js';
import AddMoney from './components/AddMoney.js';
import Wallet from './components/Wallet.js';
import Awallet from './components/Awallet.js';
import Vwallet from './components/Vwallet.js';
import AboutUs from './components/AboutUs.js';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /><Footer /></>} />
          <Route path="/login" element={<><Login /></>} />
          <Route path="/register" element={<> <Register /></>} />
          <Route path="/vendorregister" element={<> <VendorRegister /></>} />
          <Route path="/payment" element={<> <Payment /> <Footer /></>} />
          <Route path="/vendorlogin" element={<><Vendorlogin /></>} />
          <Route path="/adminlogin" element={<><Adminlogin /></>} />
          <Route path="/search" element={<><Header /><Search /></>} />
          <Route path="/vendor" element={<><VendorHeader /> <VendorHome /></>} />
          <Route path="/addcategory" element={<><AdminHeader />
            <AddCategory /></>} />
          <Route path="/viewproducts" element={<><AdminHeader />
            <ViewProducts /></>} />
          <Route path="/viewcustomer" element={<><AdminHeader />
            <ViewCustomer /></>} />
          <Route path="/viewvendors" element={<><AdminHeader />
            <ViewVendor /></>} />
          <Route path="/vieworders" element={<><AdminHeader />
            <ViewOrders /></>} />
          <Route path="/viewcategory" element={<><AdminHeader />
            <ViewCategory /></>} />
          <Route path="/addproduct" element={<><VendorHeader />
            <AddProduct /></>} />
          <Route path="/viewproductoutofstock" element={<><VendorHeader />
            <ViewOutofStock /></>} />
          <Route path="/forgetpass" element={<><ForgetPassword /></>} />
          <Route path="/reset" element={<><ResetPassword /></>} />
          <Route path="/order" element={<><Header />
            <ViewOrderbyuid />
            <Footer /></>} />
          <Route path="/placed" element={<><MyOrderplaced /></>} />
          <Route path="/addmoney" element={<><Header /><AddMoney /></>} />
          <Route path="/wallet" element={<><Header /><Wallet /></>} />
          <Route path="/awallet" element={<><AdminHeader /><Awallet /></>} />
          <Route path="/vwallet" element={<><VendorHeader /><Vwallet /></>} />
          <Route path="/raw" element={<><Header />
            <RawProducts /></>} />
          <Route path="/stitched" element={<><Header />
            <StitchedProducts /></>} />
          <Route path="/about-us" element={<><Header />
            <AboutUs /></>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
