import './food.css';
import {useState} from 'react';


function Food(props) {
   
    const [price, setPrice] = useState(props.price)

    const button = () => {
        let newprice = props.price - (props.offer/100)*props.price
        setPrice(newprice);
    }
    return (
        <div>
           <div className='food-container'>
                <div className='item'>
                    <div className='img'>
                    <img src={props.img} width={150} height={150}></img>
                    </div>
                    <div className='details'>
                        <h1>{props.item}</h1>
                        <p>{"Rs."}<b>{price}</b></p>
                        <p>{props.offer}{"% Offer"}</p>
                        <h3>{props.restaurant}</h3>
                        <button onClick={button}>Apply Offer</button>
                    </div>
                </div>
           </div>
        </div>

    );
                
}

export default Food;