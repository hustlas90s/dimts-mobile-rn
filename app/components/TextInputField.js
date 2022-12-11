import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import { fieldHelper } from "../utils/fieldHelper";
import { View, Text, TextInput } from "react-native";

const TextInputField = ({
    control,
    fieldName,
    placeHolder,
    type,
    required = false,
    defaultValue = "",
    setValue = null,
}) => {
    let ruleSet = {};
    if (required) {
        ruleSet.required = fieldHelper.required;
    }
    if (type === "email" && required) {
        ruleSet.pattern = fieldHelper.email;
    }
    useEffect(() => {
        if (setValue !== null && defaultValue) {
            console.log("hello");
            setValue(fieldName, defaultValue);
        }
    }, [defaultValue]);

    return (
        <Controller
            name={fieldName}
            control={control}
            defaultValue={defaultValue}
            rules={ruleSet}
            render={({ field, fieldState }) => {
                return (
                    <View>
                        <TextInput
                            // defaultValue={defaultValue}
                            secureTextEntry={type === "password" ? true : false}
                            keyboardType={
                                type === "number" ? "numeric" : "default"
                            }
                            style={{ fontFamily: "Montserrat_500Medium" }}
                            // onBlur={field.onBlur}
                            onChangeText={(e) => field.onChange(e)}
                            className={`bg-gray-200 ${
                                fieldState.error
                                    ? "border border-red-500"
                                    : "border-0"
                            } h-12 text-md rounded-md px-3 mb-1`}
                            placeholder={placeHolder}
                            value={field.value}
                        />
                        {fieldState.error ? (
                            <Text
                                style={{ fontFamily: "Montserrat_400Regular" }}
                                className="text-red-500 text-xs pl-3">
                                {fieldState.error.message}
                            </Text>
                        ) : null}
                    </View>
                );
            }}
        />
    );
};

export default TextInputField;
