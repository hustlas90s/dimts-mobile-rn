import React from "react";
import {
    Image,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    ScrollView,
} from "react-native";
import judge from "../../../assets/images/judge.png";
import TextInputField from "../../components/TextInputField";
import { useForm } from "react-hook-form";

function Signup({ navigation }) {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <ScrollView className="flex-1 bg-white px-7 py-4">
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
                        height: 150,
                        width: "100%",
                    }}
                />
            </View>
            <View className="px-3 mb-4">
                <Text
                    style={{ fontFamily: "Montserrat_800ExtraBold" }}
                    className="text-gray-700 text-2xl">
                    Create an Account
                </Text>
            </View>
            <View className="px-3 gap-y-4">
                <View>
                    <TextInputField
                        control={control}
                        fieldName="firstname"
                        placeHolder="Firstname"
                        type="text"
                        required={true}
                    />
                </View>
                <View>
                    <TextInputField
                        control={control}
                        fieldName="lastname"
                        placeHolder="Lastname"
                        type="text"
                        required={true}
                    />
                </View>
                <View>
                    <TextInputField
                        control={control}
                        fieldName="mobile"
                        placeHolder="Mobile Number"
                        type="number"
                        required={true}
                    />
                </View>
                <View>
                    <TextInputField
                        control={control}
                        fieldName="email"
                        placeHolder="Email Address"
                        type="email"
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
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text
                        style={{ fontFamily: "Montserrat_400Regular" }}
                        className="text-gray-500 text-md text-center">
                        Already have an account?{" "}
                        <Text
                            style={{ fontFamily: "Montserrat_400Regular" }}
                            className="text-purple-600 text-md text-center"
                            onPress={() => navigation.navigate("login")}>
                            Login.
                        </Text>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default Signup;
