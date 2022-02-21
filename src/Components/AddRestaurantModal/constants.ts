import {TouchableOpacityProps} from "react-native";


export interface AddRestaurantModalProps {
    onSavePress?: () => void;
    onClosePress: () => void;
    title?: string;
    isActive: boolean
}
