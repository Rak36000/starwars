const { Component } = require("react");
const { default: Card } = require("../card");

class AdressBook extends Component{
    constructor(props){
        super(props);


        this.state = {
            contacts:[
                {
                    name : "Rigved Shete",
                    phno : '237283769',
                    email : 'raker3234@gmail.com',
                    favourite:true
                },
                {
                    name : "Vinod Karnik",
                    phno : '7038948969',
                    email : 'Vinod3234@gmail.com',
                    favourite:false
                },
                {
                    name : "Ashish Nehawal",
                    phno : '34242469',
                    email : 'esfsesdfg@gmail.com',
                    favourite:false
                },
                {
                    name : "shivam Mavi",
                    phno : '7038948969',
                    email : 'irjkklghar@gmail.com',
                    favourite:false
                },
                
            ]
        }

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e){
         const newContacts = [...this.state.contacts];

         const indexVal = e.target.attributes.itemID.value;
         const index = parseInt(indexVal,10);

        newContacts[index] = {...newContacts[index],favourite: !newContacts[index].favourite};

        this.setState({contacts:newContacts});

        console.log(this.state.contacts)
    }

    render(){
        return(
            this.state.contacts.map((row,index)=>{
                return (<Card
                contact={row}
                handleToggle = {this.handleOnChange}
                index = {index}
                key = {index}/>)
            })
        
        )
            
    }
}

export default AdressBook