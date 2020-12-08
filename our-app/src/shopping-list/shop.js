
import './shop.css'
const { Component } = require("react");


class Shop extends Component{
    constructor(props){
        super(props);
        this.state = {
            newitem:'',
            items : [
                {name:"Banana",checked:false},
                {name:"Apple",checked:true},
            ]
        }
    }

    handleAddItem(){

        const newItem = {
            name:this.state.newitem,
            checked : false
        }

        this.setState((state)=>{
            return {
                items : [...state.items,newItem]
            }
        })
        
        console.log(this.state);
    }

    handleToggle(e){
        const indexValue = e.target.attributes.itemID.value;
        const index = parseInt(indexValue,10);
        
        const newState = [...this.state.items];
        newState[index].checked = !newState[index].checked;
        this.setState({items:newState});
    }

    handleDelete(e){
        const indexValue = e.target.attributes.itemID.value;
        const index = parseInt(indexValue,10);
        
        const newState = [...this.state.items];
        newState.splice(index,1);
        this.setState({items:newState});
    }

    handleChange(e){
        this.setState({newitem : e.target.value});
    }

    componentDidUpdate(prevProps,prevState){
        const prevStateString = JSON.stringify(prevState);
        const currStateString = JSON.stringify(this.state);

        if(prevStateString !== currStateString){
            console.log("State loaded:-");
            localStorage.setItem('state',currStateString)
        }

    }

    componentDidMount(){

        const newState = JSON.parse(localStorage.getItem('state'));

        this.setState(newState);
    }

    render(){
        return(
            <div className="container mt-3">

                <div className="row p-3">

                    <div className="col m-3 justify-content-center p-3">
                        <div className = "row p-3 jumbotron">
                            <h3 className="display-4">Add items</h3>
                        </div>
                        <div className="row mt-3">
                            <form>
                                <div className="row">
                                    <div className = "col text-center">
                                        <label>
                                            Enter a item to add:-
                                        </label>
                                    </div>
                                    <div className = "col">
                                        <input type="text" className="form-control"  onChange = {this.handleChange.bind(this)}></input>
                                    </div>
                                </div>
                                <div className="row mt-3 justify-content-center">
                                    <button type="button" className="btn btn-outline-primary" onClick={this.handleAddItem.bind(this)}>Add</button>
                                </div>  
                            </form>
                        </div>   
                    </div>

                    <div className="col border">

                    <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header display-4 bg-dark text-light">
                                    Shopping List
                                </div>
                                <div className="card-body">
                                    <ul>
                                        {this.state.items.map((row,index) => {
                                            return(
                                                    <div className="container justify-content-center"  key={index}>
                                                        <button className = "btn btn-outline-success border mt-3">
                                                        <div className="row m-3" >
                                                            <div className = "col">
                                                                <input type="checkbox"  checked={row.checked} itemID = {index} onChange = {this.handleToggle.bind(this)}></input>
                                                            </div>

                                                            <div className="col">
                                                                <p>{row.name}</p>
                                                            </div>

                                                            <div className="col ">
                                                                <button className=" btn btn-outline-danger" itemID = {index} onClick = {this.handleDelete.bind(this)} >X</button>     
                                                            </div>
                                                        </div> 
                                                        </button>
                                                    </div>
                                                    
                                                )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    </div>

                </div>

            </div>
        )   
    }
}

export default Shop