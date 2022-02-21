import {TouchableOpacityProps} from "react-native";


export interface AddRestaurantButtonProps {
    onPress?: TouchableOpacityProps['onPress'];
    title?: string;
    showIcon?: boolean;
    absolute?: boolean;
}
