import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { colorpath, imagepath } from '../assest/Index';
import Product from '../screen/Product';
import SeeAlll from '../screen/SeeAlll';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colorpath.black,
                tabBarInactiveTintColor: colorpath.backgroundDark,
                tabBarActiveBackgroundColor: colorpath.backgroundMedium,
                tabBarInactiveBackgroundColor: colorpath.backgroundLight,
                tabBarLabelStyle: { fontSize: 15, fontWeight: "600" },
            }}


        >

            <Tab.Screen name="Home" component={Product}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (<Image source={imagepath.ghar} style={{ height: 45, width: 40 }} resizeMode={"cover"} />)
                }}
            />
            <Tab.Screen name="cart" component={SeeAlll}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (<Image source={imagepath.ghar} style={{ height: 45, width: 40 }} resizeMode={"cover"} />)
                }}
            />





        </Tab.Navigator>
    );
}
export default TabNavigation;