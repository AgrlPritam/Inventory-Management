import React, {Component} from 'react'
import Header from './TableHeader'
import Item from './Item'

class ItemsPage extends Component{
    constructor(props){
        super(props)
    }
    render() {
        var rows = []
        var n = 3
        for(var i = 0; i< n; i++){
            rows.push(
                <tr key={i}>
                    <Item />
                </tr>
            )
        }
        return (
            <table 
                className="table table-bordered" 
                cellSpacing={0} 
                cellPadding={0}>
                    <Header />
                    <tbody>
                        {rows}
                    </tbody>
            </table>
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