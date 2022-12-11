import React, { useEffect } from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import TextInputField from "../components/TextInputField";
import profile from "../../assets/images/profile.png";
import AppBar from "../components/appBar";
import { useForm } from "react-hook-form";
import ImagePicker from "../components/imagePicker";

const Profile = ({ navigation }) => {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <AppBar navigation={navigation} title="Profile" />
            <ScrollView className="flex-1 bg-white py-3">
                <View className="mb-3">
                    <View className="items-center">
                        <Image
                            source={profile}
                            style={{
                                resizeMode: "center",
                                height: 130,
                                width: "100%",
                            }}
                        />
                    </View>
                    <Text
                        style={{ fontFamily: "Montserrat_700Bold" }}
                        className="text-center text-purple-600 text-xl pt-2">
                        Jason Response
                    </Text>
                </View>
                <View className="px-8 gap-y-2 mb-3">
                    <Text
                        style={{ fontFamily: "Montserrat_600SemiBold" }}
                        className="text-purple-600 text-md">
                        Personal Info
                    </Text>
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
                            fieldName="email"
                            placeHolder="Email"
                            type="email"
                            required={true}
                        />
                    </View>
                    <View>
                        <TextInputField
                            control={control}
                            fieldName="address"
                            placeHolder="Address"
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
                </View>
                <View className="px-8 gap-y-2 mb-3">
                    <Text
                        style={{ fontFamily: "Montserrat_600SemiBold" }}
                        className="text-purple-600 text-md">
                        Valid ID
                    </Text>
                    {/* <View>
                        <TextInputField
                            control={control}
                            fieldName="valid_id_name"
                            placeHolder="Valid ID Name"
                            type="text"
                            required={true}
                        />
                    </View> */}
                    <View>
                        <ImagePicker />
                    </View>
                    <View className="pt-2">
                        <TouchableOpacity
                            activeOpacity={0.9}
                            className="bg-purple-600 rounded-md py-3"
                            onPress={handleSubmit(onSubmit)}>
                            <Text
                                style={{ fontFamily: "Montserrat_700Bold" }}
                                className="text-white text-center text-lg">
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default Profile;
