import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker , View,Text} from 'react-native';
import { connect } from 'react-redux';
import { getCategories,selectCategoria } from '../../redux/actions/category'; 
import ProductResultScreen from '../containers/ProductResultScreen';


class Category extends React.Component{ 

    constructor(props){
        super(props);
        this.state ={
            selected:''
        }
        props.getCategories();
    }
    
    componentDidMount(){
       // this.props.getCategories();
        //console.log(this.props);
    }
    pickerChange = (itemValue,itemIndex) =>{
        this.setState({selected:itemValue});
        this.props.categories.map((v,i)=> {
            if( i===itemIndex){
                this.props.selectCategoria(v.id);
            }
        })
        
        
    }
    render(){
        
        
        
        return (<View style={{flex:1,flexDirection:'column'}}>
                    <Picker style={{marginTop:'1%'}} mode="dropdown"
                         onValueChange={(itemValue, itemIndex) =>{ this.pickerChange(itemValue,itemIndex) }} 
                        selectedValue={this.state.selected || 'Electrónica, Audio y Video'}>
                            {(this.props.categories || []).map(item => (
                                 <Picker.Item key={item.id} label={item.name} value={item.name}/>
                            ))}
                     </Picker>
                     
                </View>
                )
     }
}
const mapStateToProps = (state) => ({
   categories: state.categories.categories
})
export default connect(mapStateToProps,{ getCategories,selectCategoria })(Category);