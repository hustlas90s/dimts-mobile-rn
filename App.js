import "react-native-get-random-values";
import React from "react";
import { StatusBar, Platform, SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import store from "./app/redux/store";
import Main from "./app/main";

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
