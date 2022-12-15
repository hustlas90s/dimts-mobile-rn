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
import profileImage from "../../assets/images/profile.png";
import AppBar from "../components/appBar";
import { useForm } from "react-hook-form";
import ImagePicker from "../components/imagePicker";
import { getData, storeData } from "../helpers/asyncStorage";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { getProfile, updateProfile } from "../redux/features/appSlice";

const Profile = ({ navigation }) => {
    const { control, handleSubmit, setValue } = useForm();
    const dispatch = useDispatch();
    const { profileLoading } = useSelector((state) => state.appState);

    const [profile, setProfile] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        contact_number: "",
        address: "",
        valid_id_name: `${nanoid()}.jpg`,
        valid_id_content: "",
    });
    const [image, setImage] = useState(null);
    const [imageError, setImageError] = useState(false);

    const getProfileData = () => {
        dispatch(getProfile()).then((res) => {
            const data = res.payload;
            if (data.hasOwnProperty("id")) {
                setProfile({
                    ...profile,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    username: data.username,
                    email: data.email,
                    contact_number: data.contact_number,
                    address: data.address,
                    valid_id_name: data.valid_id_name,
                    valid_id_content: data.valid_id_content,
                });
                setImage(data.valid_id_content);
            }
        });
    };

    const onSubmit = async (data) => {
        console.log(data);
        const toUpdate = data;
        toUpdate.valid_id_name = profile.valid_id_name;
        toUpdate.valid_id_content = profile.valid_id_content;

        if (!profile.valid_id_content) {
            setImageError(true);
            return;
        }
        setImageError(false);

        dispatch(updateProfile(toUpdate)).then((res) => {
            const data = res.payload;
            if (data.hasOwnProperty("id")) {
                getProfileData();
                return ToastAndroid.show("Profile updated", ToastAndroid.SHORT);
            }
            return ToastAndroid.show("Update unsuccessful", ToastAndroid.SHORT);
        });
    };

    useEffect(() => {
        getProfileData();
    }, []);

    useEffect(() => {
        setProfile({ ...profile, valid_id_content: image });
    }, [image]);

    return (
        <>
            <AppBar navigation={navigation} title="Profile" />
            <ScrollView className="flex-1 bg-white py-3">
                <View className="mb-3">
                    <View className="items-center">
                        <Image
                            source={profileImage}
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
                        {`${profile.first_name} ${profile.last_name}`}
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
                            fieldName="first_name"
                            placeHolder="Firstname"
                            type="text"
                            required={true}
                            defaultValue={profile.first_name}
                            setValue={setValue}
                            editable={false}
                        />
                    </View>
                    <View>
                        <TextInputField
                            control={control}
                            fieldName="last_name"
                            placeHolder="Lastname"
                            type="text"
                            required={true}
                            defaultValue={profile.last_name}
                            setValue={setValue}
                            editable={false}
                        />
                    </View>
                    <View>
                        <TextInputField
                            control={control}
                            fieldName="username"
                            placeHolder="Username"
                            type="text"
                            required={true}
                            defaultValue={profile.username}
                            setValue={setValue}
                            editable={false}
                        />
                    </View>
                    <View>
                        <TextInputField
                            control={control}
                            fieldName="email"
                            placeHolder="Email"
                            type="email"
                            required={true}
                            defaultValue={profile.email}
                            setValue={setValue}
                            editable={false}
                        />
                    </View>
                    <View>
                        <TextInputField
                            control={control}
                            fieldName="contact_number"
                            placeHolder="Mobile Number"
                            type="number"
                            required={true}
                            defaultValue={profile.contact_number}
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
                            defaultValue={profile.address}
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
                    <View className="pt-2 mb-8">
                        <TouchableOpacity
                            activeOpacity={0.9}
                            className="bg-purple-600 rounded-md py-3"
                            onPress={handleSubmit(onSubmit)}>
                            <Text
                                style={{ fontFamily: "Montserrat_700Bold" }}
                                className="text-white text-center text-lg">
                                {profileLoading ? "Loading..." : "Save"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default Profile;
