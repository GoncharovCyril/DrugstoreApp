import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
 
import CityPicker from './CityPicker';
import MenuButtons from './MenuButtons';
import RoundButtons from './RoundButtons';

import { addProduct } from '../redux/ProductsActions';

const menuStyles = StyleSheet.create({

});


class MenuScreen extends React.Component {

    render() {
        return (
            <View style={{
                justifyContent: 'flex-start',
                width: '100%',
                flex:1,
            }}>
                <View style={{flex:1390, backgroundColor: 'rgb(240,240,240)'}}>
                    <CityPicker navigation={this.props.navigation} />
                    <View style={{flex: 60}} />
                    <MenuButtons navigation={this.props.navigation} />
                    <View style={{flex: 39}} />
                    <RoundButtons navigation={this.props.navigation} />
                    <View style={{flex:370}} />


                    <Text>{this.props.products.current.length}</Text>
                    {
                        this.props.products.possible.map((product, index) => (
                            <Button key={product} title={`Add ${product}`} onPress={this.props.addProduct(index)}
                            />
                        ))
                    }

                    
                </ View>
            </View>
        )
    }

    
};

const mapStateToProps = (state) => {
    const {products} = state;
    return {products};
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addProduct,
    }, dispatch)
  );
export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
