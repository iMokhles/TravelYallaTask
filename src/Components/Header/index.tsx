import {Center, Flex, Pressable} from "native-base";
import React, {memo, FC} from "react";
import {ICON_TYPE, IMIcon} from "../IMIcon";
import {HeaderProps} from "./constants";

const Header: FC<HeaderProps> = (props) => {
    const {
        showBackIcon,
        showShareIcon,
        backOnPress,
        shareOnPress
    } = props

    return (
        <Flex flexDirection="row" bg={"white"} h={'44px'}>
            <Center
                px={'20px'}
                height={'100%'}
                width={"50%"}
                bg={"white"}
                alignItems="flex-start"
                justifyContent="center"
            >
                {showBackIcon ? <Pressable onPress={backOnPress}>
                    <IMIcon
                        origin={ICON_TYPE.IONICONS}
                        name="ios-chevron-back"
                        size={35}
                        color={'#323841'}
                    />
                </Pressable> : null}
            </Center>
            <Center
                px={'20px'}
                height={'100%'}
                width={"50%"}
                bg={"white"}
                alignItems="flex-end"
                justifyContent="center"
            >
                {showShareIcon ? <Pressable onPress={shareOnPress}>
                    <IMIcon
                        origin={ICON_TYPE.IONICONS}
                        name="arrow-redo"
                        size={28}
                        color={'#323841'}
                    />
                </Pressable> : null}
            </Center>
        </Flex>
    )
}

Header.defaultProps = {
    showBackIcon: true,
    showShareIcon: true,
    backOnPress: undefined,
    shareOnPress: undefined,
};
export default memo(Header);
