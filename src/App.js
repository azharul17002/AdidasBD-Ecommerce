
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import { ProductsAndCartLoader } from './Loaders/ProductsAndCartLoader';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoutes from './Components/Routes/PrivateRoutes';
import Profile from './Components/Profile/Profile';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Addproduct from './Components/Addproduct/Addproduct';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import Dashboard from './Components/Dashboard/Dashboard';
import Seller from './Components/Seller/Seller';
import SellerList from './Components/SellerList/SellerList';
import OrderPlaceSuccess from './Components/OrderPlaceSuccess/OrderPlaceSuccess';
import OrderList from './Components/OrderList/OrderList';
import ProfileEdit from './Components/ProfileEdit/ProfileEdit';
import UserList from './Components/UserList/UserList';
import SingleOrder from './Components/SingleOrder/SingleOrder';
import Admin from './Components/Admin/Admin';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import PaymentList from './Components/PaymentList/PaymentList';
import FemaleCollection from './Components/FemaleCollection/FemaleCollection';
import MaleProduct from './Components/MaleProduct/MaleProduct';
import Category from './Components/Category/Category';
import MensShoes from './Components/MensShoes/MensShoes';
import MensPants from './Components/MensPants/MensPants';
import MensBoots from './Components/MensBoots/MensBoots';
import Bag from './Components/Bag/Bag';
import Cap from './Components/Cap/Cap';
import Bottle from './Components/Bottle/Bottle';













function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
     
      
      children:[
        {
          path:'/',
          element:<Shop></Shop>,
         
        },

        {
          path:'/orderReview',
          loader:ProductsAndCartLoader,
          element:<Orders></Orders>
        },
        {
          path:'/manageinventory',
          element:<PrivateRoutes><Inventory></Inventory></PrivateRoutes>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'/sellerlist',
          element:<SellerList></SellerList>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/shipping',
          element:<PrivateRoutes><Shipping></Shipping></PrivateRoutes>
        },
        {
          path:'/profile',
          element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
        },
        {
          path:'/product/:id',
          element:<ProductDetails></ProductDetails>
        },
        {
          path:'/addproduct',
          element:<Addproduct></Addproduct>
        },
        {
          path:'/manageproduct',
          element:<ManageProducts></ManageProducts>
        },
        {
          path:'/dashboard',
          element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
        },
        {
          path:'/seller',
          element:<Seller></Seller>
        },
      
        {
          path:'/orderPlacesuccess',
          element:<OrderPlaceSuccess></OrderPlaceSuccess>
        },
        {
          path:'/orderlist',
          element:<OrderList></OrderList>
        },
        {
          path:'/profiledetails',
          element:<ProfileEdit></ProfileEdit>
        },
        {
          path:'/userlist',
          element:<UserList></UserList>
        },
        {
          path:'/singleorderlist',
          element:<SingleOrder></SingleOrder>
        },
        {
          path:'/admin',
          element:<Admin></Admin>
        },
        {
          path:'/adminpanel',
          element:<AdminPanel></AdminPanel>
        },
        {
          path:'/paymentlist',
          element:<PaymentList></PaymentList>
        },
        {
          path:'/femalecollection',
          element:<FemaleCollection></FemaleCollection>
        },
        {
          path:'/maleproduct',
          element:<MaleProduct></MaleProduct>
        },
        {
          path:'/categories',
          element:<Category></Category>
        },
        {
          path:'/Menshoe',
          element:<MensShoes></MensShoes>
        },
        {
          path:'/menspants',
          element:<MensPants></MensPants>
        },
        {
          path:'/mensboots',
          element:<MensBoots></MensBoots>
        },
        {
          path:'/bag',
          element:<Bag></Bag>
        },
        {
          path:'/cap',
          element:<Cap></Cap>
        },
        {
          path:'/bottle',
          element:<Bottle></Bottle>
        }



        
        
        
     
      
      
      ]
    }
   
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
