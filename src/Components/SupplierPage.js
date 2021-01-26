import React, {Component} from 'react'
import Suppliers from '../assets/supplier.json'
import {DropdownButton, Dropdown} from 'react-bootstrap'

class SupplierPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectedOption: Suppliers[0].Name
        }
        
    }
    handleSelect = (e) => {
        this.setState({
            selectedOption: e
        })
    }
    render() {
        const SupplierFiltered = Suppliers.filter(Supplier => Supplier.Name === this.state.selectedOption)[0]
        return (
            <div>
                <DropdownButton title={this.state.selectedOption}>
                    {Suppliers.map((supplier) => (
                        <Dropdown.Item key={supplier.id} eventKey={supplier.Name} onSelect={this.handleSelect}>{supplier.Name}</Dropdown.Item>
                    ))}
                </DropdownButton>
                <div>
                    <p>Supplier Details:</p>
                    <p>
                        Name: {SupplierFiltered.Name} <br />
                        Address: {SupplierFiltered.Address}<br />
                        Phone: {SupplierFiltered.Phone}<br />
                        Email: {SupplierFiltered.Email}<br/>
                        Website: {SupplierFiltered.Website}
                    </p>
                </div>
                
            </div>
        )
    }
}

export default SupplierPage;