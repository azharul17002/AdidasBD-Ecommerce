import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCartLoader =async ()=>{

const productsData=await fetch('http://localhost:5000/products');
const {products}= await productsData.json();

const savedCart=getStoredCart();
const initialCart=[];
for(const id in savedCart)
{
   const addedProduct=products.find(pd => pd._id===id)
   if(addedProduct)
   {
    const quantity=savedCart[id];
    addedProduct.quantity=quantity;
    initialCart.push(addedProduct);
   }
}
return {products:products,initialCart:initialCart};
}