import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import judge from "../../../assets/images/judge.png";
import TextInputField from "../../components/TextInputField";
import { useForm } from "react-hook-form";

function Login({ navigation }) {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        navigation.navigate("Home");
    };
    return (
        <View className="flex-1 bg-white px-7 py-4">
            <Text
                style={{ fontFamily: "Montserrat_800ExtraBold" }}
                className="text-purple-600 text-2xl mb-3">
                Dimts
            </Text>
            <View className="items-center mb-5">
                <Image
                    source={judge}
                    style={{
                        resizeMode: "center",
                        height: 240,
                        width: "100%",
                    }}
                />
            </View>
            <View className="px-3 mb-4">
                <Text
                    style={{ fontFamily: "Montserrat_800ExtraBold" }}
                    className="text-gray-700 text-2xl">
                    Login
                </Text>
            </View>
            <View className="px-3 gap-y-6">
                <View>
                    <TextInputField
                        control={control}
                        fieldName="username"
                        placeHolder="Username"
                        type="text"
                        required={true}
                    />
                </View>
                <View>
                    <TextInputField
                        control={control}
                        fieldName="password"
                        placeHolder="Password"
                        type="password"
                        required={true}
                    />
                </View>

                <View className="pt-2">
                    <TouchableOpacity
                        activeOpacity={0.9}
                        className="bg-purple-600 rounded-md py-3"
                        onPress={handleSubmit(onSubmit)}>
                        <Text
                            style={{ fontFamily: "Montserrat_700Bold" }}
                            className="text-white text-center text-lg">
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text
                        style={{ fontFamily: "Montserrat_400Regular" }}
                        className="text-purple-600 text-md text-center"
                        onPress={() => navigation.navigate("Signup")}>
                        Create Account
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default Login;
