import { Linking } from "react-native";

export const redirigir = (url) => {
    Linking.openURL(url);
    }