import {TouchableOpacityProps} from "react-native";

export interface TagItemProps {
    onPress?: TouchableOpacityProps['onPress'];
    name?: string;
    image?: string;
    selected?: boolean;
}
