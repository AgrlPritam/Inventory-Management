import React, {Component, Fragment} from 'react'
import {Dropdown, DropdownButton} from 'react-bootstrap'
import Items from '../../assets/items.json'

class ItemList extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectedItemCategory : Object.keys(Items[0].itemCategory[0])[0],
            selectedItemType: '',
            selectedQuantity: '',
            unitCost: 0,
            totalItemCost : NaN,
            error: ''
        }
    }
    handleItemCategory = (e) => {
        this.setState({
            selectedItemCategory: e,
            selectedItemType: (Items[0].itemCategory[0][e][0].Type)
        })
    }
    handleItemType=(e) => {
        this.setState({
            selectedItemType: e,
            unitCost: Items[0].itemCategory[0][this.state.selectedItemCategory].filter((Item) => Item.Type === e)[0].Cost
        })
    }
    handleQuantity = (e) => {
        const quantity = e.target.value
        if (!quantity || quantity.match(/^([\d]{1,})$/)){
            this.setState(() => ({selectedQuantity: quantity}))
        }
        this.setState({
            totalItemCost: parseInt(quantity,10) * Items[0].itemCategory[0][this.state.selectedItemCategory].filter((Item) => Item.Type === this.state.selectedItemType)[0].Cost
        })
    }

    render(){
        var ItemCategories = ""
        const obj = Items[0].itemCategory[0]
        ItemCategories = Object.keys(obj)
        return (
            <Fragment>
                <td>
                    <DropdownButton title={this.state.selectedItemCategory}>
                        {ItemCategories.map((ItemCategory) => (
                            <Dropdown.Item key={ItemCategory} 
                                eventKey={ItemCategory} 
                                onSelect={this.handleItemCategory}
                            >
                                {ItemCategory}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </td>
                <td>
                    <DropdownButton title={this.state.selectedItemType}>
                        {Items[0].itemCategory[0][this.state.selectedItemCategory].map((ItemType) => (
                            <Dropdown.Item key={ItemType.Type} 
                                eventKey={ItemType.Type} 
                                onSelect={this.handleItemType.bind(this)}
                            >
                                {ItemType.Type}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </td>
                <td>{this.state.selectedItemType !== '' && <input type='number' 
                        placeholder={Items[0].itemCategory[0][this.state.selectedItemCategory][0].Unit}
                        min="1"
                        value={this.state.selectedQuantity}
                        onChange={this.handleQuantity.bind(this)}
                        required
                    />}
                </td>
                <td>
                {!isNaN(this.state.totalItemCost) && <p>{this.state.totalItemCost}</p>}
                </td>
            </Fragment>
        )
    }
}

export default ItemList