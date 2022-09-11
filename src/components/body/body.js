import { Outlet } from 'react-router-dom';
import './body.css';
import Hotel from './hotel';


function Body(Props) {

    let list = Props.input;

    return (
        <div className='container'>
           
            <div className='wrapper'>
                {
                    list.map((details) => {
                        return (
                            <Hotel key={Math.random()} image={details.image} item={details.item} price={details.price} rest={details.restaurant} rating={details.rating}></Hotel>
                        )
                    })
                }
            </div>
            <Outlet></Outlet>
        </div>

    )
}

export default Body;