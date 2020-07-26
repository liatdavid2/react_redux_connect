import React from 'react'
import { connect } from 'react-redux';
import {buyCake} from '../redux/cake/cakeActions'
import {buyIceCream} from '../redux/iceCream/iceCreamActions'
function ItemContainer(props){
    return(
        <div>
            <h2>Number of cakes - {props.itemState}</h2>
            <button onClick={props.buyItem}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state,ownProps) =>{
    const itemState = ownProps.cake?
    state.cake.numOfCakes:
    state.iceCream.numOfIceCream
    return{
        itemState:itemState
    }
}
const mapDispatchToProps = (dispatch,ownProps)  =>{
    const dispatchFunction = ownProps.cake?
    ()=> dispatch(buyCake()):
    ()=> dispatch(buyIceCream())
    return{
        buyItem: dispatchFunction
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (ItemContainer)