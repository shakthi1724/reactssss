import './product.css';
import { useState } from 'react';
import Food from './food';
import Form from '../form/form';
import dosa from '../images/dosa.jpg';
import coffee from '../images/coffee.jpg';
import ice from '../images/ice cream.jpg';
import idly from '../images/idly.jpg';
import ProductList from '../productlist/productlist';
import {useNavigate} from 'react-router-dom';

function Products(props) {
  const order = [
    {
      img: dosa,
      item: "Dosa",
      offer: 20,
      restaurant: "Siva Hotel",
      price: 210
    },
    {
      img: coffee,
      item: "Coffee",
      offer: 10,
      restaurant: "Cafe Bar",
      price: 110
    },
    {
      img: ice,
      item: "Ice-Cream",
      offer: 10,
      restaurant: "Arun Ice-Creams",
      price: 150
    },
    {
      img: idly,
      item: "Idly",
      offer: 25,
      restaurant: "Kasali",
      price: 250
    }
  ]
  // const [newcomp, setComp] = useState(order);

  // const newcomphandle = (comp) => {
  //   setComp((prevnewcomp) => { return [...[comp], ...prevnewcomp] });
  //   console.log(comp)
  // }
  // const logout = ()=>{
  //   props.logout(false)
  // }
  // return (
  //   <div>
  //     <div className='form-container'>
  //       <button onClick={logout} className='logout'>Logout</button>
  //       <Form newcomponents={newcomphandle}></Form>
  //     </div>
  //       <div className='fooditem-container'>
  //         {
  //           newcomp.map((comp)=>{
  //             return <Food key={Math.random()} item={comp.item} price={comp.price} offer={comp.offer} restaurant={comp.restaurant}></Food>
  //           })
  //         }
  //         </div>
          
        
    // </div>
//   );

// }
const [foods, setfoods] = useState([]);

    var navi=useNavigate();
    const addNewFoods = (food) => {
        setfoods((prevfoods) => { return [food, ...prevfoods] });
        // console.log(order);
    }

    const logout = () => {
      localStorage.setItem('login','false');
        props.logout('false');
        navi('/logout')
    }


    return (
        <div className="body">
            <button onClick={logout} className='logout'>Log out</button>
            <Form add={addNewFoods} />
            <div className="myorder">
                <div>
                    <h1>My Foods</h1>
                    <ProductList foods={foods}></ProductList>
                </div>
            </div>
        </div>
    )
}

export default Products;
