import React from 'react';
import {FlatList,StyleSheet,View,Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { getProducts } from '../../redux/actions/product'; 
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { SearchBar } from 'react-native-elements';


class ProductResultScreen extends React.Component{ 
    constructor(props){
      super(props);
      this.state = {
        search:''
      }
    }
    componentDidMount(){
        this.props.getProducts(this.props.categoria);
    }
    
    
    componentDidUpdate(prevProps){
    
    if(prevProps.categoria!==this.props.categoria)
       this.props.getProducts(this.props.categoria);
    }

    
    updateSearch = search => {
      this.setState({ search });
    };
     
    render(){
      let results = [];
      const filterByValue = (array, string) => {
        return array.filter(o => o.title.toLowerCase().includes(string.toLocaleLowerCase()));
            
    }
      if(this.state.search !== ''){
        results = filterByValue(this.props.products,this.state.search);
    
     
      }else{
        results = this.props.products;
      }
     
        //console.log(this.props.products);
       // this.props.getProducts(this.props.categoria);

        return (
            <View style={styles.container}>
              <SearchBar
                  containerStyle={styles.search}
                
                  placeholder="Type Here..."
                  onChangeText={this.updateSearch}
                  value={this.state.search}
                  lightTheme={true}
      />
              <FlatList   
                data={(results || [])}
                
                renderItem={
                    ({ item, index }) =>
                      <ProductItem index={index} item={item} name={'add-circle'} />
                  }
                  keyExtractor={(item, index) => index.toString()}
                  ListEmptyComponent={() =>
                    <Text style={{fontSize:20,justifyContent:'center',  marginVertical:'5%',alignItems: "center"}}>
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
         width:'100%',
         height:'80%'
       
        },
        item: {
            borderColor: 'red',
            borderWidth: 1,
            fontSize: 3
         
        },
        search:{
          backgroundColor:'white',
         borderColor:'white'
        }
      })
const mapStateToProps = (state) => ({
    categoria : state.categories.category,
    products: state.products.products,
   
})

export default connect(mapStateToProps,{ getProducts })(ProductResultScreen); 