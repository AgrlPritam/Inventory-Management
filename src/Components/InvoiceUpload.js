import axios from 'axios';
import React,{Component} from 'react'; 

export default class InvoiceUpload extends Component { 

    state = { 
      selectedFile: null,
      error: '',
      isFileUploaded: false
    }

    onFileChange = event => { 
      this.setState({selectedFile: event.target.files[0]})
    }

    onFileUpload = () => {
        if(this.state.selectedFile !== null){
            const formData = new FormData() 
            formData.append( 
              "myFile", 
              this.state.selectedFile, 
              this.state.selectedFile.name 
            )
            this.setState({isFileUploaded: true},() => {
                if(this.props.onChange){
                    this.props.onChange(this.state.isFileUploaded)
                }
            })
            console.log(this.state.selectedFile)
        } else if(this.state.selectedFile === null){
            this.setState({error: 'Please upload invoice'})
        }
    }
     
    render() { 
      return ( 
        <div className="container"> 
            <div className="clearfix"> 
                <input type="file" onChange={this.onFileChange} /> 
                <button className="btn btn-md btn-primary float-right" onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
          <div className="invoice_message">
            {this.state.error && <h4>{this.state.error}</h4>}
          </div>
        </div> 
      )
    } 
  } 