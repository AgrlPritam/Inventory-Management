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
            <div className="d-flex justify-content-left">
                <div>
                    <h3><strong>Supplier Details:</strong></h3>
                    <DropdownButton title={this.state.selectedOption}>
                        {Suppliers.map((supplier) => (
                            <Dropdown.Item key={supplier.id} eventKey={supplier.Name} onSelect={this.handleSelect}>{supplier.Name}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                    <h5>
                        <strong>Name: </strong><em>{SupplierFiltered.Name}</em> <br />
                        <strong>Address: </strong><em>{SupplierFiltered.Address}</em><br />
                        <strong>Phone: </strong><em>{SupplierFiltered.Phone}</em><br />
                        <strong>Email: </strong><em>{SupplierFiltered.Email}</em><br/>
                        <strong>Website: </strong><em>{SupplierFiltered.Website}</em>
                    </h5>
                </div>
                
            </div>
        )
    }
}

export default SupplierPage;