import React from "react";
import { StatusBar, Platform, SafeAreaView } from "react-native";
import Main from "./app/main";

function App() {
    return (
        <SafeAreaView
            style={{
                paddingTop:
                    Platform.OS === "android" ? StatusBar.currentHeight : 0,
            }}
            className="flex-1">
            <Main />
        </SafeAreaView>
    );
}

export default App;
