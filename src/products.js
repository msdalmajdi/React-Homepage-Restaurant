import App from "./App";

const products = [
  { name: "Burger", price: "$3.5", image: "./burger.jpg" },
  { name: "Pasta", price: "$4.5", image: "./pasta.jpg" },
  { name: "Pizza", price: "$9.5", image: "./pizza.jpg" },
];
//{ name: "Pizza", price: "$9.5", image: "./pizza.jpg" }
const productsList = products.map((product) => {
  return (
    <>
      <img class="product-img" src={product.image} alt="logo"></img>
      <h5>{product.name}</h5>
      <h5>{product.price}</h5>
    </>
  );
});
export default productsList;
