import React, { useState, useEffect } from "react";
import {
    Text,
    Button,
    Image,
    View,
    Platform,
    TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImageUploader = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    return (
        <View>
            {image ? (
                <View className="bg-gray-200 text-md rounded-md px-3 py-3 mb-1">
                    <Image
                        resizeMode="contain"
                        source={{ uri: image }}
                        style={{
                            marginBottom: 15,
                            width: "100%",
                            height: undefined,
                            aspectRatio: 1,
                        }}
                    />
                    <TouchableOpacity
                        activeOpacity={0.9}
                        className="bg-red-500 rounded-md py-2"
                        onPress={() => {
                            setImage(null);
                        }}>
                        <Text
                            style={{ fontFamily: "Montserrat_600SemiBold" }}
                            className="text-white text-center text-sm">
                            Delete Image
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity
                    activeOpacity={1.0}
                    className="bg-gray-200 flex justify-center items-center min-h-[100px] text-md rounded-md px-3 py-3 mb-1"
                    onPress={() => {
                        pickImage();
                    }}>
                    <Text
                        style={{ fontFamily: "Montserrat_600SemiBold" }}
                        className="text-gray-500 text-md">
                        Tap to select image
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default ImageUploader;
