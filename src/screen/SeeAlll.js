import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar, refreshControl } from 'react-native'
import React, { useEffect,useCallback } from 'react'
import { colorpath, imagepath } from '../assest/Index'
import { Items } from '../backend/Item'
import { SafeAreaView } from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView'

const SeeAlll = ({ navigation }) => {

    const [refreshing, setrefreshing] = useState(false)

    // useEffect(() => {

    //     setTimeout(() => {
    //         setrefreshing(true)
    //     }, 5000);
    // }, [])

    const onRefresh = useCallback(() => {
        setrefreshing(true);
        setTimeout(() => {
            setrefreshing(false);
        }, 5000);
    }, []);
    const renderItem1 = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { data: { item } })}
                style={{ width: "80%", height: 280, margin: 10, alignSelf: "center" }}>

                <View style={styles.listimagview}>

                    <Image
                        style={styles.listimag}
                        source={item.productImage} />

                </View>

                <View style={{ position: "absolute" }}>
                    {item.isOff ? (
                        <View style={styles.popup}>
                            <Text style={styles.offPercentage}>{item.offPercentage}%</Text>
                        </View>) : null}

                </View>

                <TouchableOpacity style={styles.favview}>
                    <Image style={styles.fav}
                        source={item.fav} />
                </TouchableOpacity>


                <View style={styles.texttview}>
                    <Text style={styles.name}>
                        {item.productName}
                    </Text>
                    <Text style={styles.price}>
                        ₹{item.productPrice}
                    </Text>
                </View>

            </TouchableOpacity>
        )
    }
    return (

        <View style={{ flex: 1, backgroundColor: colorpath.white }}>


            <StatusBar backgroundColor={colorpath.white} barStyle="dark-content" />

            <ScrollView
                refreshControl={
                    <refreshControl refreshing={refreshing} onRefresh={onRefresh}
                    />
                }>

                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={styles.logoview}>

                    <View style={styles.shopinglogoview}>
                        <Image
                            style={styles.shopinglogo}
                            source={imagepath.back} />
                    </View>
                </TouchableOpacity>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem1}
                    data={Items} />
            </ScrollView>


        </View>

    )
}

export default SeeAlll

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: colorpath.white,
    },
    shopinglogo: {
        width: 30,
        height: 30,
    },
    logoview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 10,
        marginTop: 10

    },
    shopinglogoview: {
        padding: 8,
        backgroundColor: colorpath.backgroundLight,
        borderRadius: 15,
    },
    hifi: {
        fontSize: 26,
        color: colorpath.black,
        fontWeight: '500',
        letterSpacing: 2,
        marginBottom: 10,
    },
    textt: {
        fontSize: 14,
        color: colorpath.black,
        fontWeight: '400',
        letterSpacing: 1,
        lineHeight: 30,
    },
    ProductView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginVertical: 20
    },
    Producttext: {
        color: colorpath.black,
        fontSize: 20,
        fontWeight: '500'

    },
    towone: {
        fontSize: 16,
        color: colorpath.red,
        fontWeight: '500'
    },
    seeall: {
        color: colorpath.blue,
        fontSize: 17,
        fontWeight: '400'
    },
    listimagview: {
        backgroundColor: colorpath.backgroundLight,
        height: 230,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    listimag: {
        height: 200,
        width: 200,

    },
    price: {
        fontSize: 15,
        fontWeight: '400',
        color: colorpath.red
    },
    name: {
        color: colorpath.black,
        fontSize: 15,
        fontWeight: "500"
    },
    popup: {
        backgroundColor: colorpath.green,
        height: 30,
        width: 40,
        marginLeft: 3,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    offPercentage: {
        color: colorpath.white,
        fontWeight: '600'
    },
    favview: {
        position: "absolute",
        alignSelf: 'flex-end',
        height: 30,
        width: 40,
        backgroundColor: colorpath.green,
        justifyContent: "center",
        alignContent: "center",
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    fav: {
        height: 20,
        width: 20,
        alignSelf: "center",
        tintColor: colorpath.white
    },
    texttview: {
    },
    goBack: {
        marginTop: 20,
        height: 25,
        backgroundColor: colorpath.backgroundLight,
        width: "10%",
        paddingHorizontal: 20,
        justifyContent: "center", marginLeft: 20,
        alignItems: "center",
        borderRadius: 5
    }
})