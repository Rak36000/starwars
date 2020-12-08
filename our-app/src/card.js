import 'bootstrap/dist/css/bootstrap.css';
import React ,{ Component }from 'react'
import './card.css'

const Card = (props)=> {
    const {
        contact,
        index
    }= props

return(
           
                <div className="container">
                    <div className="row justify-content-center mt-3">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-header display-4 bg-dark text-light">
                                    { contact.name}
                                    <input type="checkbox" className="form-control float-xl-right" checked={contact.favourite}
                                    onChange={props.handleToggle} itemID={index}></input>
                                
                                </div>
                                <div className="card-body">
                                    <ul>
                                        <li>{contact.email}</li>
                                        <li>{contact.phno}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
           
        )
    };

export default Card;
