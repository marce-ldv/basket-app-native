import React from 'react';
import {Text,StyleSheet} from 'react-native'

export const ProductItem = (props) => {

return <Text index={props.index} key={props.index} >{props.item.title+' '+props.item.price+'$'}</Text>
}

export default ProductItem; 