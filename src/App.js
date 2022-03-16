import logo from './logo.svg';
import './App.css';

function App() {
  const prodct=[
    {name:'Laptop', price:'30000'},
    {name:'Iphone', price:'400000'},
    {name:'Watch', price:'300'},
    {name:'Sunglass', price:'200'},
    {name:'glass', price:'200'},
    {name:'glass', price:'200'}
  ]
  return (
   
    <div className="App"> 
      {
        prodct.map(pro=> <Products nam={pro.name} price={pro.price}></Products>)
      }
    </div>
  );
};
function Products({nam, price}) {
  return (
    <div className='product'>
      <h2>Name: {nam}</h2>
      <p>Price: {price}</p>
    </div>
  )
}

export default App;


// const nayok = ['William Rock', 'Vladimir Putin', 'Obaidul Kadir', 'Salman', 'Jhanker Mahbub'];
 {/* <Ullash name={nayok[0]} para="I am full time ReactJs developer. Wish me luck!!"></Ullash>
      <Ullash name={nayok[1]} para="I am full time world attaker. Wish me luck!!"></Ullash>
      <Ullash name={nayok[2]} para="I am full time President. Wish me luck!!"></Ullash> */}
     {/* {
        nayok.map(nayok=><Ullash name={nayok} para="I am full time ReactJs developer. Wish me luck!!"></Ullash>)
      } */}