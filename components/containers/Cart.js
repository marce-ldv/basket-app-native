import React from 'react';
import { Text,FlatList,View} from 'react-native';
import { connect } from 'react-redux';

import ProductItem from './ProductItem';
import {requestOrder} from '../../redux/actions/order';
import  Button  from '../Button';


class Cart extends React.Component{

    handlePress = () => {
        this.props.requestOrder(this.props.cart);
    }
    render(){

         let amount =0;
             amount = (this.props.cart || []).map(item =>{
                         return item.price*item.count
                       })
    let suma = amount.reduce((a, b) => a + b, 0);
    let total = this.props.cart.length !== 0 ? 'Total: '+suma+'$' : '' ;
        const {
            cart
        } = this.props;
      
        return (
        <View style={{flex:1}}>
            <FlatList   
                data={(this.props.cart || [])}
                renderItem={
                    ({ item, index }) =>
                      <ProductItem index={index} item={item} name={'remove'} />
                  }
                  keyExtractor={(item, index) => index.toString()}
                  ListEmptyComponent={() =>
                    <Text style={{fontSize:20,justifyContent:'center',  marginVertical:'5%',alignItems: "center"}}>
                      There are no Products in Cart yet!
                    </Text>
                  }
                  />
                  {
                    cart && cart.length
                    ?<View><Text style={{fontSize:20,marginLeft:'4%'}}>{total}</Text>
                    <Button style={{justifyItems:'center',marginLeft:'10%',marginRight:'10%'}}label={'Make Order'} onPress={this.handlePress}/>
                    </View>
                    :
                    null
                  }       
        </View>
        )
    }
}

const mapStateToProps = (state) => ({
    cart:state.list.list
})

export default connect(mapStateToProps,{ requestOrder })(Cart); 