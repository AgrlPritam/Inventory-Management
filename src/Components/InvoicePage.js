import React, {Component} from 'react'
import InvoiceUpload from './InvoiceUpload'
import invoices from '../assets/invoices.json'

class InvoicePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            invoiceNumber: '',
            invoiceDt: '',
            deliveryDt: '',
            totalCost: '',
            error: '',
            filledDetails: false,
            invoiceUploaded: false
        }
    }
    onInvoiceNumberChange = (e) => {
        const invoiceNumber = e.target.value
        this.setState({ invoiceNumber })
    }
    onInvoiceDtChange = (e) => {
        const invoiceDt = e.target.value
        this.setState({ invoiceDt })
    }
    onDeliveryDtChange = (e) => {
        const deliveryDt = e.target.value
        this.setState({deliveryDt})
    }
    onTotalCostChange = (e) => {
        const totalCost = e.target.value
        if (!totalCost || totalCost.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({totalCost}))
        }
    }
    submitInvoice = () => {
        if( !this.state.invoiceNumber || invoices.some(invoice => invoice.InvoiceNumber == this.state.invoiceNumber)){
            this.setState(() => ({error:'Please provide unique invoice number'}))
        }else {
            if(!this.state.deliveryDt || !this.state.invoiceDt || !this.state.totalCost){
                this.setState(() => ({error:'Please provide complete invoice details'}))
            } else{
                this.setState(() => ({error: '', filledDetails: true}),() => {
                    if(this.props.onChange){
                        this.props.onChange(this.state.filledDetails)
                    }
                })
                invoices.push({
                    InvoiceNumber:this.state.invoiceNumber,
                    InvoiceDate: this.state.invoiceDt, 
                    DeliveryDate: this.state.deliveryDt,
                    TotalCost: this.state.totalCost
                })
            }
        }
        console.log(invoices);
    }

    fileUploaded = (props) => {
        this.setState({invoiceUploaded: props})
    }
    render() {
        return (
            <div className="invoices__table">
                <div className="error_message">{this.state.error && <p>{this.state.error}</p>}</div>
                <table 
                    className="table table-bordered" 
                    cellSpacing={0} 
                    cellPadding={0}
                    >
                        <thead className="thead-dark">
                            <tr>
                                <th>Invoice Number</th>
                                <th>Invoice Date</th>
                                <th>Delivery Date</th>
                                <th>Total Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Invoice Number"
                                        autoFocus
                                        value={this.state.invoiceNumber}
                                        onChange={this.onInvoiceNumberChange}
                                        readOnly={this.state.filledDetails}
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Invoice Date(DD-MMM-YY)"
                                        value={this.state.invoiceDt}
                                        onChange={this.onInvoiceDtChange}
                                        readOnly={this.state.filledDetails}
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Delivery Date(DD-MMM-YY)"
                                        value={this.state.deliveryDt}
                                        onChange={this.onDeliveryDtChange}
                                        readOnly={this.state.filledDetails}
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        placeholder="Total Cost"
                                        value={this.state.totalCost}
                                        onChange={this.onTotalCostChange}
                                        readOnly={this.state.filledDetails}
                                    />
                                </td>
                            </tr>
                        </tbody>
                </table>
                <InvoiceUpload onChange={this.fileUploaded}/>
                {(!this.state.filledDetails && this.state.invoiceUploaded) && <div className="invoice_button_wrapper">
                    <button 
                    className="btn btn-success btn-lg invoice_button" 
                    onClick={this.submitInvoice} 
                    disabled={!this.state.invoiceNumber}
                    >
                        NEXT
                    </button>
                </div>}
            </div>
        )
    }
}

export default InvoicePage