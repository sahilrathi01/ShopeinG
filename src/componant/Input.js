import React from "react";
import { TextInput, View } from "react-native";

const Input = (
    {
        placeholder,
        placeholderTextColor,
        style,
        inputstyle
    }
) => {

    return (
        <View style={[
            {
                borderRadius: 10,
                borderWidth: 1,
                width: '90%',
                alignSelf: "center",
                paddingHorizontal: 10

            },
            {
                ...style
            }
        ]}>

            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={[
                    {
                        fontSize: 20,
                        color:'blue',
                    },
                    {
                        ...inputstyle
                    }
                ]}
            />

        </View>
    )
}
export default Input;