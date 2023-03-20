import React, { useEffect } from "react";
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ToastAndroid,
} from "react-native";
import register from "../../../assets/images/register.png";
import TextInputField from "../../components/TextInputField";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../helpers/asyncStorage";
import { signup } from "../../redux/features/appSlice";

function Signup({ navigation }) {
    const { control, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const { authLoading } = useSelector((state) => state.appState);

    const onSubmit = async (data) => {
        dispatch(signup(data)).then((res) => {
            if (res.payload.hasOwnProperty("id")) {
                return navigation.replace("Login");
            } else {
                if (res.payload.hasOwnProperty("username")) {
                    return ToastAndroid.show(
                        res.payload.username[0],
                        ToastAndroid.SHORT
                    );
                }
                if (res.payload.hasOwnProperty("email")) {
                    return ToastAndroid.show(
                        res.payload.email[0],
                        ToastAndroid.SHORT
                    );
                }
            }
        });
    };

    const checkLoggedIn = async () => {
        const token = await getData("access_token");
        if (token) {
            navigation.replace("Schedule");
        }
    };

    useEffect(() => {
        checkLoggedIn();
    }, []);

    return (
        <ScrollView className="flex-1 bg-white px-7 py-4">
            <Text
                style={{ fontFamily: "Montserrat_800ExtraBold" }}
                className="text-purple-600 text-2xl mb-3">
                Dimts
            </Text>
            <View className="items-center mb-5">
                <Image
                    source={register}
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
            <View className="px-3 gap-y-4 mb-14">
                <View>
                    <TextInputField
                        control={control}
                        fieldName="first_name"
                        placeHolder="Firstname"
                        type="text"
                        required={true}
                    />
                </View>
                <View>
                    <TextInputField
                        control={control}
                        fieldName="last_name"
                        placeHolder="Lastname"
                        type="text"
                        required={true}
                    />
                </View>
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
                        fieldName="email"
                        placeHolder="Email"
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
                <View>
                    <TextInputField
                        control={control}
                        fieldName="contact_number"
                        placeHolder="Contact Number"
                        type="number"
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
                            {authLoading ? "Loading..." : "Register"}
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
                            onPress={() => navigation.replace("Login")}>
                            Login.
                        </Text>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default Signup;
