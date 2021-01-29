import React, {Component} from 'react'
import Header from './TableHeader'
import Item from './Item'
import SupplierPage from '../SupplierPage'

class ItemsPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectedItemCategories: [],
            selectedItemTypes: [],
            selectedItemQuantities: [],
            selectedItemTotalCost: 0,
            rows: 3,
            isItemsAdded: false
        }
    }
    handleItem = (props) => {
        this.setState(prevState => (
            {
                selectedItemCategories: [...prevState.selectedItemCategories, props[0]],
                selectedItemTypes: [...prevState.selectedItemTypes, props[1]],
                selectedItemQuantities: [...prevState.selectedItemQuantities, props[2]],
                selectedItemTotalCost: prevState.selectedItemTotalCost+ parseFloat(props[3]),
                isItemsAdded: true
            }
        ))
    }

    handleAddItemInventory = () => {
        console.log(this.state.selectedItemCategories);
        console.log(this.state.selectedItemTypes);
        console.log(this.state.selectedItemQuantities);
        console.log(this.state.selectedItemTotalCost);
    }

    addRow = () => {
        this.setState(prevState => (
            {
                rows: prevState.rows+1
            }
        ))
    }
    render() {
        var rows = []
        for(var i = 0; i< this.state.rows; i++){
            rows.push(
                <tr key={i}>
                    <Item onChange={this.handleItem}/>
                </tr>
            )
        }
        return (
            <div className="container">
                <table 
                    className="table table-bordered" 
                    cellSpacing={0} 
                    cellPadding={0}>
                        <Header />
                        <tbody>
                            {rows}
                        </tbody>
                </table>
                <button className="btn btn-sm btn-primary" onClick={this.addRow}>Add Row</button>
                <SupplierPage />
                <div className="clearfix">
                    <button 
                        className="btn btn-lg btn-success float-right" 
                        onClick={this.handleAddItemInventory}
                        disabled={!this.state.isItemsAdded}
                    >
                        Submit
                    </button>
                </div>
            </div>

            
        )
    }
}

export default ItemsPage;


//var obj = items[0].itemCategory[0]
//Object.keys(obj)[0] --> screws

// var val = ""
// var obj = items[0].itemCategory[0]
// val = Object.keys(obj)
// console.log(val); --> [screws,paints,pipes]
//console.log(val[0]) --> screws