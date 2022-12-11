import React from "react";
import { StatusBar, Platform, SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NativeBaseProvider } from "native-base";
import Main from "./app/main";

function App() {
    return (
        <NativeBaseProvider>
            <PaperProvider>
                <SafeAreaView
                    // style={{
                    //     paddingTop:
                    //         Platform.OS === "android"
                    //             ? StatusBar.currentHeight
                    //             : 0,
                    // }}
                    className="flex-1">
                    <Main />
                </SafeAreaView>
            </PaperProvider>
        </NativeBaseProvider>
    );
}

export default App;
