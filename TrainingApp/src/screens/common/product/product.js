import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles, { ExtendedStyles } from './styles';

class Product extends Component {
    constructor(props) {
        super(props);

        this.styles = this.props.isExtended ? ExtendedStyles : styles;
        this.currentImage = this.props.item.images[0];
    }

    getPriceString(item) {
        return `$${item.price}`;
    }

    getOldPriceString(item) {
        return `$${item.oldPrice}`;
    }

    getDiscountString(item) {
        return `${item.discount}% Off`;
    }

    isActiveImage(image) {
        return image.id === this.currentImage.id;
    }

    showImage(image) {
        return (this.currentImage = image);
    }

    renderControlsJSX() {
        return this.props.isExtended ? (
            <View style={this.styles.controlsWrapper}>
                {this.props.item.images.map(image => (
                    <View key={image.id}>{this.renderControlJSX(image)}</View>
                ))}
            </View>
        ) : null;
    }

    renderStockButtonJSX() {
        return this.props.isExtended ? (
            <TouchableOpacity
                onPress={() => {
                    this.stock();
                }}>
                <View style={this.styles.stockWrapper}>
                    <Text style={this.styles.stock}>In Stock</Text>
                </View>
            </TouchableOpacity>
        ) : null;
    }

    renderControlJSX(image) {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.showImage(image);
                }}>
                {image.id === this.currentImage.id ? (
                    <View style={this.styles.controlActive} />
                ) : (
                    <View style={this.styles.control} />
                )}
            </TouchableOpacity>
        );
    }

    stock() {}

    render() {
        return (
            <TouchableOpacity
                style={this.styles.wrapper}
                onPress={() => this.props.gotoProductDetails(this.props.item)}>
                <View style={this.styles.imageWrapper}>
                    <Image source={this.currentImage.source} style={this.styles.image} />
                </View>
                {this.renderStockButtonJSX()}
                {this.renderControlsJSX()}
                <Text style={this.styles.name}>{this.props.item.name}</Text>
                <View style={this.styles.priceWrapper}>
                    <Text style={this.styles.price}>{this.getPriceString(this.props.item)}</Text>
                    <Text style={this.styles.oldPrice}>{this.getOldPriceString(this.props.item)}</Text>
                    <Text style={this.styles.discount}>{this.getDiscountString(this.props.item)}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Product;
