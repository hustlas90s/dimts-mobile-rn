import React from "react";
import { withExpoSnack } from "nativewind";
import {
    StyledImageBackground,
    StyledSafeAreaView,
    StyledText,
} from "../../utils/styled.components";
import loginBg from "../../../assets/images/login_img.jpg";

function Login() {
    return (
        <StyledSafeAreaView className="flex-1 items-center justify-center">
            <StyledImageBackground
                source={loginBg}
                resizeMode="cover"
                className="flex-1 justify-center w-full">
                <StyledText className="text-white text-center">
                    Open up App.js to start working on your app!
                </StyledText>
            </StyledImageBackground>
        </StyledSafeAreaView>
    );
}

export default withExpoSnack(Login);
