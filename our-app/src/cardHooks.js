import 'bootstrap/dist/css/bootstrap.css';
import React ,{useState }from 'react'
import './card.css'

const CardHook = ()=> {
 const [name , setName] = useState('John Willia,s');
 const [phno , setPhno] = useState('+102-3238244');
 const [email , setEmail] = useState('john.williams@gmail.com');
 const [favourite , setFavourite] = useState(false);

return(
                
                <div className="container">
                    <div className="jumbotron">
                        <h1>Card Created using Hooks</h1>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-header display-4 bg-dark text-light">
                                    { name}
                                    <input type="checkbox" className="form-control float-xl-right" checked={favourite}
                                    ></input>
                                
                                </div>
                                <div className="card-body">
                                    <ul>
                                        <li>{email}</li>
                                        <li>{phno}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
           
        )
    };

export default CardHook;
