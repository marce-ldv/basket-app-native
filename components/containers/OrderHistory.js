import React from 'react';
import { Text,FlatList,View,StyleSheet} from 'react-native';
import { connect } from 'react-redux';

import ProductItem from './ProductItem';
import { getAllOrders } from '../../redux/actions/order';

 class OrderHistory extends React.Component{ 

    componentDidMount(){
        this.props.getAllOrders();
    }
    componentDidUpdate(){
      this.props.getAllOrders();
    }
    render(){
        
        return (
            <View style={styles.container}>
              
              <FlatList   
                data={(this.props.order || [])}
                
                renderItem={
                    ({ item, index }) =>
                      <ProductItem index={index} item={item} name={'archive'} />
                  }
                  keyExtractor={(item, index) => index.toString()}
                  ListEmptyComponent={() =>
                    <Text style={{fontSize:20,justifyContent:'center',  marginVertical:'5%',alignItems: "center"}}>
                      There are no Products Bought  yet!
                    </Text>
                  }
                  />
            </View>
          );
    }
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     width:'100%',
     height:'80%'
   
    },
    item: {
        borderColor: 'red',
        borderWidth: 1,
        fontSize: 3
     
    }
  })
const mapStateToProps = (state) => {

    return({
    order:state.orders.order
})}

export default connect(mapStateToProps,{getAllOrders})(OrderHistory); 