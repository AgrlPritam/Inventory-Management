import React, {Component} from 'react'
import ItemsPage from './Items/ItemsPage'
import InvoicePage from './InvoicePage'


export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            isInvoiceFilled: false
        }
    }
    handleInvoiceSubmit = (props) => {
        this.setState({
            isInvoiceFilled: props
        })
    }

    render(){
        return(
            <div>
                <InvoicePage onChange={this.handleInvoiceSubmit}/>
                <br/>
                {(this.state.isInvoiceFilled && <ItemsPage />)}
            </div>
        )
    }
}