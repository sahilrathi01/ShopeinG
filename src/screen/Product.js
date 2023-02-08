import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar, Dimensions, Modal, Pressable, RefreshControl } from 'react-native'
import React, { useEffect, useState, } from 'react'
import { colorpath, imagepath } from '../assest/Index'
import { Items } from '../backend/Item'
import Swiper from 'react-native-swiper'
import Buttonn from '../componant/Buttonn'
import Input from '../componant/Input'


const Product = ({ navigation }) => {

  const width = Dimensions.get('window').width
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(true);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setTimeout(() => {
        setRefreshing(false)
        getDataFromDB();

      }, 2000);
    });
    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      } else if (Items[index].category == 'accessory') {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

  const renderItem1 = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { data: { item } })}
        style={{ width: 200, height: 200, margin: 10 }}>

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


        <View>
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

  const renderItem2 = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { data: { item } })}
        style={{ width: 200, height: 200, margin: 10, }}>

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

        <View>

        </View>
        <View>
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
    <View style={styles.body}>
      <StatusBar backgroundColor={colorpath.white} barStyle="dark-content" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>


        <View style={styles.logoview}>

          <View style={styles.shopinglogoview}>
            <Image
              style={styles.shopinglogo}
              source={imagepath.shoppingBag} />
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }} >
            <View style={styles.modelview}>

              <View style={styles.modelview2}>
                <Text style={styles.extext}>Exampel of Model</Text>
                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>

              </View>
            </View>
          </Modal>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: colorpath.black, }}>SHOPPING</Text>
          </TouchableOpacity>

          <View style={styles.shopinglogoview}>
            <Image
              style={styles.shopinglogo}
              source={imagepath.shoppingBag2} />
          </View>

        </View>


        <View style={{ marginBottom: 10, padding: 16, marginTop: 20 }}>

          <Text style={styles.hifi}>
            Hi-Fi shop & service
          </Text>
          <Text style={styles.textt}>
            Audio shop on Rustaveli Ave 57.
            {'\n'}This shop offers both products and services
          </Text>
        </View>
        <View>
          <Text style={{ textAlign: "center", fontSize: 25, marginBottom: 20, color: colorpath.green, fontWeight: "600" }}>
            Best Selling
          </Text>
        </View>
        <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>

          <View style={styles.slide1}>
            <Image style={styles.Swiperimage} source={imagepath.swiper1} resizeMode="contain" />
          </View>

          <View style={styles.slide1}>
            <Image style={styles.Swiperimage} source={imagepath.swiper2} resizeMode="contain" />
          </View>

          <View style={styles.slide1}>
            <Image style={styles.Swiperimage} source={imagepath.swiper3} resizeMode="contain" />
          </View>
        </Swiper>


        <View style={styles.ProductView}>

          <View style={{ flexDirection: "row", justifyContent: "center", }}>

            <Text style={styles.Producttext}>
              Products
            </Text>
            <Text style={styles.towone}>
              21
            </Text>

          </View>

          <TouchableOpacity onPress={() => navigation.navigate('SeeAll')}>
            <Text style={styles.seeall}>
              See All
            </Text>
          </TouchableOpacity>

        </View>

        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={products}
            renderItem={renderItem1}
          />
        </View>

        <Text style={[styles.Producttext, { margin: 10 }]}>
          Accessories
        </Text>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={accessory}
            renderItem={renderItem2}
          />
        </View>

      </ScrollView >
    </View >
  )
}

export default Product

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
    lineHeight: 40,
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
    height: 130,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  listimag: {
    height: 100,
    width: 100,

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
  Swiperview: {
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: colorpath.backgroundLight
  },
  Swiperimage: {
    height: 250,
    width: 250,
    alignSelf: "center",
    justifyContent: 'center'
  },
  wrapper: {
    height: 250
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorpath.backgroundLight,
    borderRadius: 20,
    width: "95%",
    alignSelf: "center",

  },
  modelview: {
    width: '100%',
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  modelview2: {
    height: 250,
    width: "90%",
    backgroundColor: colorpath.backgroundMedium,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,

  },
  textStyle: {
    color: colorpath.black,
    fontSize: 25,
    fontWeight: '700',
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: colorpath.white,
    borderRadius: 10
  },
  extext: {
    marginBottom: 20,
    fontSize: 35,
    fontWeight: '500',
    color: "red"
  }


})