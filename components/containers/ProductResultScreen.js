import React from 'react';
import {FlatList,StyleSheet,View,Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { getProducts } from '../../redux/actions/product'; 
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

class ProductResultScreen extends React.Component{ 

    componentDidMount(){
        this.props.getProducts(this.props.categoria);
    }
    
    
    componentDidUpdate(prevProps){
    
    if(prevProps.categoria!==this.props.categoria)
       this.props.getProducts(this.props.categoria);
    }
  
    render(){
      
        //console.log(this.props.products);
       // this.props.getProducts(this.props.categoria);

        return (
            <View style={styles.container}>
              <FlatList   
                data={(this.props.products || [])}
                
                renderItem={
                    ({ item, index }) =>
                      <ProductItem index={index} item={item} />
                  }
                  keyExtractor={(item, index) => index.toString()}
                  ListEmptyComponent={() =>
                    <Text>
                      There are no Products  yet!
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
         borderWidth: 1,
         borderColor:'green',
         borderBottomColor:'red',
         width:'100%',
         height:'80%'
       
        },
        item: {
            borderColor: 'red',
            borderWidth: 1,
            fontSize: 3
         
        },
      })
const mapStateToProps = (state) => ({
    categoria : state.categories.category,
    products: state.products.products,
   
})

export default connect(mapStateToProps,{ getProducts })(ProductResultScreen); 