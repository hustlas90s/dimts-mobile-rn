import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    ToastAndroid,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import TextInputField from "../components/TextInputField";
import profile from "../../assets/images/profile.png";
import AppBar from "../components/appBar";
import { useForm } from "react-hook-form";
import ImagePicker from "../components/imagePicker";
import { getData, storeData } from "../helpers/asyncStorage";

const Profile = ({ navigation }) => {
    const { control, handleSubmit, setValue } = useForm();
    const [userData, setUserData] = useState({});
    const [image, setImage] = useState(null);
    const [imageError, setImageError] = useState(false);

    const getUserData = async () => {
        const user = await getData("user");
        setUserData(user);
    };

    const saveToStorage = async (data) => {
        await storeData("user", data).then(() => {
            ToastAndroid.show("Profile saved", ToastAndroid.SHORT);
        });
        await getUserData();
    };

    const onSubmit = async (data) => {
        console.log(data);
        let formData = data;
        if (!image) {
            setImageError(true);
            return;
        }
        setImageError(false);
        formData.username = userData.username;
        formData.password = userData.password;
        formData.validId = image;

        await saveToStorage(formData);
    };

    useEffect(() => {
        getUserData();
    }, []);

    useEffect(() => {
        setImage(userData.validId);
    }, [userData]);

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
                        {`${userData.firstname} ${userData.lastname}`}
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
                            defaultValue={userData.firstname}
                            setValue={setValue}
                        />
                    </View>
                    <View>
                        <TextInputField
                            control={control}
                            fieldName="lastname"
                            placeHolder="Lastname"
                            type="text"
                            required={true}
                            defaultValue={userData.lastname}
                            setValue={setValue}
                        />
                    </View>
                    <View>
                        <TextInputField
                            control={control}
                            fieldName="email"
                            placeHolder="Email"
                            type="email"
                            required={true}
                            defaultValue={userData.email}
                            setValue={setValue}
                        />
                    </View>
                    <View>
                        <TextInputField
                            control={control}
                            fieldName="address"
                            placeHolder="Address"
                            type="text"
                            required={true}
                            defaultValue={userData.address}
                            setValue={setValue}
                        />
                    </View>
                    <View>
                        <TextInputField
                            control={control}
                            fieldName="mobile"
                            placeHolder="Mobile Number"
                            type="number"
                            required={true}
                            defaultValue={userData.mobile}
                            setValue={setValue}
                        />
                    </View>
                </View>
                <View className="px-8 gap-y-2 mb-3">
                    <Text
                        style={{ fontFamily: "Montserrat_600SemiBold" }}
                        className="text-purple-600 text-md">
                        Valid ID
                    </Text>
                    <View>
                        <ImagePicker
                            image={image}
                            setImage={setImage}
                            error={imageError}
                            setError={setImageError}
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
