import React from 'react';
import {StyleSheet} from 'react-native';
import { ListItem,Icon } from 'react-native-elements';
import { connect } from 'react-redux'; 
import { addCart,deleteCart } from '../../redux/actions/cart'


class ProductItem extends React.Component {

    handlePress = () =>{
    
    if(this.props.name==='add-circle')
        this.props.addCart(this.props.item);
    else
        if(this.props.name ==='remove')
            this.props.deleteCart(this.props.item);
    }
    render(){
     
            return <ListItem 
                        title={this.props.item.title}
                        index={this.props.index} 
                        key={this.props.index} 
                        subtitle={this.props.item.price+'$'+ (this.props.item.count !== undefined ? ' Cantidad: '+this.props.item.count:'')}
                        leftAvatar={{ source: { uri: this.props.item.thumbnail } }}  
                        rightIcon={{ name: this.props.name }} 
                        onPress = {
                        this.handlePress    
                        }
                    />
            }
}
const styles = StyleSheet.create({
   
        item: {
            padding: 10,
            fontSize: 12,
            height: 44,
          },
    
  })

export default connect(null,{ addCart,deleteCart })(ProductItem); 