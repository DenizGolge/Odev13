import { ImageSourcePropType } from "react-native";

export type Car = {
    id: string;
    title: string;
    image: ImageSourcePropType;
    price: string;
    star: string;
}