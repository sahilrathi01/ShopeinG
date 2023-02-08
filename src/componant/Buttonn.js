import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colorpath } from "../assest/Index";

const Buttonn = ({
    title = "Click ME!",
    style,
    textstyle,
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={[
                {
                    height: 100,
                    width: "100%",
                    backgroundColor: colorpath.black,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: 'center'
                },
                {
                    ...style
                }
            ]}>

            <Text
                style={[
                    {
                        color: colorpath.white,
                        fontSize: 20
                    },
                    {
                        ...textstyle
                    }
                ]}>
                {title}
            </Text>


        </TouchableOpacity>
    )
}
export default Buttonn;
const styles = StyleSheet.create({})