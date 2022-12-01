import React from "react";
import { StatusBar, Platform, SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Main from "./app/main";

function App() {
    return (
        <PaperProvider>
            <SafeAreaView
                style={{
                    paddingTop:
                        Platform.OS === "android" ? StatusBar.currentHeight : 0,
                }}
                className="flex-1">
                <Main />
            </SafeAreaView>
        </PaperProvider>
    );
}

export default App;
