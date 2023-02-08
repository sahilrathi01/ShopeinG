import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { colorpath, imagepath } from '../assest/Index'


const ProductDetails = ({ route, navigation }) => {
    const productData = route?.params?.data?.item
    const width = Dimensions.get('window').width


    return (

        <View style={styles.body}>
            <StatusBar backgroundColor={colorpath.backgroundLight} barStyle="dark-content" />

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.ImageeeView}>


                    <View style={{ width: '100%', height: 400 }}>
                        <ScrollView showsHorizontalScrollIndicator={false}
                            horizontal>

                            <View style={{ width: width, alignSelf: "center", justifyContent: 'center' }}>
                                <Image
                                    style={styles.Imageee}
                                    source={productData.productImage} />
                            </View>

                            <View style={{ width: width, alignSelf: "center", justifyContent: 'center' }}>

                                <Image
                                    style={styles.Imageee}
                                    source={productData.productImageList[1]} />
                            </View>

                            <View style={{ width: width, alignSelf: "center", justifyContent: 'center' }}>

                                <Image
                                    style={styles.Imageee}
                                    source={productData.productImageList[2]} />
                            </View>

                        </ScrollView>

                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={styles.logoview}>

                            <View style={styles.shopinglogoview}>
                                <Image
                                    style={styles.shopinglogo}
                                    source={imagepath.back} />
                            </View>
                        </TouchableOpacity>

                    </View>


                </View>

                <View style={styles.cart}>
                    <Image style={{ height: 30, width: 30 }}
                        source={imagepath.shoppingcartpng}
                    />
                    <Text style={styles.shoppingcart}>
                        Shopping
                    </Text>
                </View>

                <View style={styles.nameview}>
                    <View style={styles.textview}>
                        <Text style={styles.name}>
                            {productData.productName}
                        </Text>
                    </View>
                    <Image
                        source={imagepath.link} />

                </View>

                <View>
                    <Text>
                        {productData.description}
                    </Text>
                </View>

                <View style={styles.cart}>
                    <Text style={styles.price}>₹{productData.productPrice}.00</Text>
                    <Text>
                        Tex Rate 2%~
                    </Text>
                </View>

                <TouchableOpacity style={styles.BTN}>
                    <Text style={styles.btntex}>
                        Add To Cart
                    </Text>
                </TouchableOpacity>
            </ScrollView>

        </View >
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: colorpath.white,
    },
    goBack: {
        position: "absolute",
        marginTop: 20,
        height: 25,
        width: 40,
    },
    Imageee: {
        borderWidth: 1,
        alignSelf: "center",
        height: 400,
        width: 400
    },
    ImageeeView: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: colorpath.backgroundLight,
        position: "relative",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    shopinglogo: {
        width: 30,
        height: 30,
    },
    logoview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        position: "absolute",

    },
    shopinglogoview: {
        padding: 8,
        backgroundColor: colorpath.white,
        borderRadius: 15,
    },
    cart: {
        margin: 10,
        flexDirection: 'row',
        alignItems: "center"
    },
    shoppingcart: {
        fontSize: 20,
        marginLeft: 10,
        color: "#339AF0",
        fontWeight: "600"
    },
    nameview: {
        flexDirection: "row",
        width: "100%",
        margin: 10,
        alignItems: "center"
    },
    textview: {
        width: '80%'
    },
    name: {
        color: colorpath.black,
        fontSize: 25,
        fontWeight: "600",
        letterSpacing: 1
    },
    price: {
        color: colorpath.black,
        fontWeight: "600",
        fontSize: 25,
        letterSpacing: 2,
        marginRight: 20
    },
    BTN: {
        backgroundColor: colorpath.blue,
        height: 60,
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 30
    },
    btntex: {
        color: colorpath.white,
        fontSize: 20,
        letterSpacing: 3,
        fontWeight: "600",
    }
})