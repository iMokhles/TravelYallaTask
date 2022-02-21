import {Box, Button, Center, Flex, Pressable, View} from "native-base";
import React, {memo, FC} from "react";
import {ICON_TYPE, IMIcon} from "../IMIcon";
import {AddRestaurantButtonProps} from "./constants";
import {primaryGreen, primaryYellow} from "../../Constants/colors";

const AddRestaurantButton: FC<AddRestaurantButtonProps> = (props) => {
    const {
        onPress,
        title,
        showIcon,
        absolute
    } = props

    return (
        <Box w={'100%'} position={absolute ? 'absolute' : 'relative'} bottom={absolute ? 30 : 0} justifyContent={'center'} alignItems={'center'}>
            <Button onPress={onPress} _pressed={{
                bg: 'yellow.200:alpha.70'
            }} shadow={'4'} bg={primaryYellow} rounded={'full'} w={'200px'} h={'40px'} leftIcon={
                showIcon ? <Center w={'30px'} h={'30px'} rounded={'full'} bg={primaryGreen}>
                    <View rounded={'full'} top={'0px'} right={'0.5px'} bg={'red.500'} position={'absolute'} w={'8px'} h={'8px'} />
                    <IMIcon
                        origin={ICON_TYPE.MATERIAL_ICONS}
                        name={'shopping-bag'}
                        color={'white'}
                        size={20}
                    />
                </Center> : undefined
            } _text={{
                color: primaryGreen,
                fontSize: absolute ? 12 : 16,
            }}>
                {title}
            </Button>
        </Box>
    )
}

AddRestaurantButton.defaultProps = {
    title: "ADD NEW RESTAURANT",
    showIcon: true,
    absolute: true
};
export default memo(AddRestaurantButton);
