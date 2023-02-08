import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colorpath, COLOURS, imagepath } from '../assest/Index'
import { Categories } from '../backend/Data'
import { Items } from '../backend/Item'

const Food = () => {
    const [currentSelected, setCurrentSelected] = useState([0]);

    const ctegryitem = Categories[currentSelected].items



    const renderCategories = ({ item, index }) => {
        return (

            <TouchableOpacity onPress={() => setCurrentSelected(index)} activeOpacity={0.8}
                style={[styles.rendercnt,
                { backgroundColor: currentSelected == index ? COLOURS.accent : COLOURS.white, borderColor: currentSelected == index ? COLOURS.accent : COLOURS.black, }]}>

                <Image source={item.image} style={{ height: 60, width: 60 }} />

                <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>
                    {item.name}
                </Text>

                <View
                    style={{
                        width: 20, height: 20,
                        backgroundColor: currentSelected == index ? "white" : COLOURS.accentRed,
                        justifyContent: "center",
                        alignItems: "center", borderRadius: 100

                    }}>

                    <Image source={imagepath.right} />

                </View>

            </TouchableOpacity>



        )
    }

    const renderItem = (item, index) => {

        return (

            <TouchableOpacity activeOpacity={0.5}
                key={index}
                style={styles.rendrview}>

                <View style={{ height: "99%", width: '95%', alignSelf: 'center', alignItems: 'center', justifyContent: "center", }}>

                    <View style={{  height: '98%', width: '98%', borderRadius: 20, flexDirection: "row" , backgroundColor: "white"}}>

                        <View style={styles.textview}>

                            {
                                item.isTopOfTheWeek == true
                                    ?
                                    <View>

                                        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, alignItems: "center", }}>

                                            <Image source={imagepath.king} style={{ tintColor: COLOURS.accent, height: 20, width: 20 }} />

                                            <Text style={{ color: 'black', fontWeight: "500", marginLeft: 10, fontSize: 15, letterSpacing: 2 }}>
                                                Top Of The Week
                                            </Text>

                                        </View>

                                        <View>

                                            <Text style={{ color: 'black', fontSize: 20, fontWeight: '600', letterSpacing: 2 }}>
                                                {item.name}
                                            </Text>

                                        </View>
                                    </View>
                                    :
                                    <View>

                                        <Text style={{ color: 'black', fontSize: 20, fontWeight: '600', letterSpacing: 2, marginTop: 20 }}>
                                            {item.name}
                                        </Text>

                                    </View>
                            }

                            <Text style={{ margin: 20, color: 'black', fontWeight: '600' }}>
                                Weight : {item.weight}
                            </Text>

                            <View style={styles.view11}>


                                <TouchableOpacity style={styles.view12}>

                                    <Text style={{ fontSize: 30, color: 'white' }} >+</Text>

                                </TouchableOpacity>


                                <View style={styles.view13}>

                                    <Image source={imagepath.star} />

                                    <Text style={{ marginLeft: 10 ,color:'black'}}>
                                        {item.rating}
                                    </Text>


                                </View>


                            </View>




                        </View>

                        <View style={styles.imgview}>

                            <Image style={{ height: 250, width: 250 }} resizeMode="contain"
                                source={item.image} />

                        </View>

                    </View>

                </View>

            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.maincnt}>
            <ScrollView>

                <StatusBar barStyle={'dark-content'} backgroundColor={COLOURS.white} />

                <View style={styles.profilecnt}>

                    <Image style={{ height: 50, width: 50, borderRadius: 100 }}
                        source={require('../assest/image/profile.jpg')} />

                    <TouchableOpacity>
                        <Image style={{ tintColor: "black", height: 40, width: 40 }}
                            resizeMode="contain" source={require('../assest/image/menufood.png')} />
                    </TouchableOpacity>

                </View>


                <Text style={styles.Food}>
                    Food
                </Text>

                <Text style={styles.Delivery}>
                    Delivery
                </Text>


                <View style={styles.inputview}>

                    <TouchableOpacity style={{ width: '20%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={imagepath.sarch} style={{ tintColor: 'black', }} />
                    </TouchableOpacity>

                    <TextInput style={styles.inputt} placeholder='Search..' placeholderTextColor={COLOURS.lightGray} />

                </View>

                <Text style={styles.Categories}>
                    Categories
                </Text>

                <FlatList
                    data={Categories}
                    renderItem={renderCategories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                {ctegryitem.map(renderItem)}

            </ScrollView>


        </View>
    )
}

export default Food

const styles = StyleSheet.create({
    maincnt: {
        width: "100%",
        height: "100%"
    },
    profilecnt: {
        flexDirection: "row",
        marginTop: 60,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: 'center'
    },
    Food: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '400',
        color: COLOURS.lightGray
    },
    Delivery: {
        marginHorizontal: 20,
        fontSize: 50,
        color: COLOURS.black,
        fontWeight: '700'
    },
    inputview: {
        flexDirection: 'row',
        width: "100%",
        height: 50,
        justifyContent: "space-around",
        alignItems: 'center',
        paddingRight: 20,
        marginTop: 10,
    },
    inputt: {
        borderBottomWidth: 1,
        width: "80%",
        borderBottomColor: COLOURS.lightGray,
        fontSize: 20,
        color: COLOURS.black,

    },
    Categories: {
        color: 'black',
        fontSize: 30,
        margin: 20,
        fontWeight: "600"
    },
    rendercnt: {
        alignItems: "center",
        justifyContent: 'space-evenly',
        width: 120,
        height: 170,
        borderRadius: 10,
        margin: 10,
        borderWidth: 1,

    },
    rendrview: {
        width: "100%",
        height: 200,
        justifyContent: 'center',
        marginBottom:10

    },
    textview: {
        height: '100%',
        width: "60%",
        borderRadius: 20,
        justifyContent: 'space-between'
    },
    imgview: {
        height: '100%',
        width: "40%",
        justifyContent: "center",
        alignItems: 'center'
    },
    view11: {
        height: 50,
        width: '100%',
        flexDirection: "row"

    },
    view12: {
        borderBottomLeftRadius: 20,
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOURS.accent,
        borderTopRightRadius: 20

    },
    view13: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    }
})