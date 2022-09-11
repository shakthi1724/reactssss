import { useState, useEffect } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';

import { Component } from 'react';

// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email:"",
//             password:"",
//             isValid:""
//         }
//     }

//     login(e) {
//         e.preventDefault();
//         localStorage.setItem('login', 'true')
//         this.props.isLoggedin('true');
//     }

 

//     componentDidUpdate(previousprops,previousState) {
//         console.log('mounted');
//         if(previousState.isValid !== true) {
//             if((this.state.email.includes('@') && this.state.password.length>6)) {
//                 this.setState((previousState)=>{
//                     return {...previousState,isValid:true}
//                 })
//             }
//         }
//     }

//     componentWillUnmount() {
//         console.log('component unmounted');
//     }

//      emailHandler(e) {
//         this.setState((previousState)=>{
//             return {...previousState,email:e.target.value}
//         })
//     }
            
//         passwordHandler(e) {
//             this.setState((previousState) => {
//                 return { ...previousState, password: e.target.value }
//             })
//         }
    
//         render() {
//             return (
    
//                 <form onSubmit={this.login.bind(this)}>
//                     <input type="email" placeholder="Enter email" onChange={this.emailHandler.bind(this)} value={this.state.email} />
//                     <input type="password" placeholder="Enter password" onChange={this.passwordHandler.bind(this)} value={this.state.password} /><br></br>
//                     {this.state.isValid ? <button type="submit" >Submit</button> : <button type="submit" disabled>Submit</button>}
    
//                 </form>
    
//             );
//         }
// }


function Login(props) {
    var navi=useNavigate();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [isValid, setValid] = useState(false);
    
        const login = (e) => {
            e.preventDefault();
            localStorage.setItem('login', true)
            props.isLoggedin(true);
            navi('/header/logout');
        }

        useEffect(() => {
            console.log('updated')
    
            if ((email.includes('@') && password.length > 4)) {
                setValid(true);
            }
    
        }, [email, password]);
    
        useEffect(() => {
            return () => console.log('unmounted');
        }, []);
    
    
        const emailHandler = (e) => {
            setEmail(e.target.value)
        }
        const passwordHandler = (e) => {
            setPassword(e.target.value)
        }
    
    
        return (
    
            <form onSubmit={login} className="fo">
                <input type="email" placeholder="Enter email" onChange={emailHandler} value={email} /><br></br>
                <input type="password" placeholder="Enter password" onChange={passwordHandler} value={password} /><br></br>
                {isValid ? <button type="submit" className='submit' >Submit</button> : <button type="submit" className='submit' disabled>Submit</button>}
    
            </form>
    
        );
    }

export default Login;