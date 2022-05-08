//import logo from './logo.svg';
import "./App.css";
import productsList from "./products.js";

function App() {
  return (
    <div class="container">
      <div class="title">
        <h1>Nice Restaurant Somewhere</h1>
      </div>

      <div class="description">
        <p>
          This is a restaurant that is supposed to be located somehwere in
          london it offers a variety of dishes that you should try.
        </p>
      </div>

      <div class="image">
        <img
          class="imagehero"
          src="./london-stock.jpg"
          alt="restaurant pic"
        ></img>
      </div>

      <div class="list">
        {productsList.map((item) => {
          return <div class="item">{item}</div>;
        })}
      </div>
    </div>
  );
}

export default App;

/*

        <div class="item1">{productsList[0]}</div>
        <div class="item2">{productsList[1]}</div>
<img src="./logo192.png" alt="logo"></img>
          <h5>{products[0].name}</h5>
          <h5>{products[0].price}</h5>

          
          <img src="./logo192.png" alt="logo"></img>
          <h5>{products[1].name}</h5>
          <h5>{products[1].price}</h5>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  
    */
