import {TouchableOpacityProps} from "react-native";


export interface HeaderProps {
    backOnPress?: TouchableOpacityProps['onPress'];
    shareOnPress?: TouchableOpacityProps['onPress'];
    showBackIcon?: boolean;
    showShareIcon?: boolean;
}
