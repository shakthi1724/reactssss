import {useState} from 'react';
import Food from '../product/food';

function Form(props) {
    
    const [newdatas , setDatas] = useState({
        item:'',
        offer:'',
        restaurant:'',
        price:'',
    })


    const itemhandle = (event) =>{
        setDatas((previousState)=>{
            return{...previousState,item:event.target.value}
        })
    }
    const offerhandle = (event) =>{
        setDatas((previousState)=>{
            return{...previousState,offer:event.target.value}
        })
    }
    const resthandle = (event) =>{
        setDatas((previousState)=>{
            return{...previousState,restaurant:event.target.value}
        })
    }
    const pricehandle = (event) =>{
        setDatas((previousState)=>{
            return{...previousState,price:event.target.value}
        })
    }
    const submithandle = (event)=>{
        event.preventDefault();
        props.add(newdatas);
       
        setDatas({
            item:'',
            offer:'',
            restaurant:'',
            price:''
        })
    }
    return(
        <div>
           <div className="form-items">
                <form onSubmit={submithandle}>
                <label>Item name:</label>
                <input type="text" placeholder="Enter item" value={newdatas.item} onChange={itemhandle}></input>
                <label>Offer:</label>
                <input type="number" placeholder="Enter Offer" value={newdatas.offer} onChange={offerhandle}></input>
                <label>Restaurant name:</label>
                <input type="text" placeholder="Enter Restaurant" value={newdatas.restaurant} onChange={resthandle}></input>
                <label>Price:</label>
                <input type="number" placeholder="Enter price" value={newdatas.price} onChange={pricehandle}></input><br></br>
                <input type="submit"></input>
                </form>
            </div>
        </div>
    );
}

export default Form;