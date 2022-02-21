import React, {FC, memo, useState} from "react";
import {TagItemProps} from "./constants";
import PropTypes from "prop-types";
import {Box, Center, Divider, Image, Input, Pressable, Text} from "native-base";
import {ICON_TYPE, IMIcon} from "../IMIcon";
import {black, primaryYellow, white} from "../../Constants/colors";
import FastImage from 'react-native-fast-image'

const TagItem:FC<TagItemProps> = (props) => {
    const {
        name,
        image,
        selected,
        onPress
    } = props

    const [isImageFailed, setImageFailed] = useState<boolean>(false);


    return (
        <Pressable justifyContent={'center'} alignItems={'center'} onPress={onPress}>
            <Center>
                <Center ml={'10px'} h={'70px'} w={'150px'} rounded={'10'}>
                    {!isImageFailed ? <FastImage
                        style={{
                            borderRadius: 10,
                            height: '100%',
                            width: '100%',
                        }}
                        source={{
                            uri: image,
                        }}
                        resizeMode={FastImage.resizeMode.stretch}
                        onError={() => {
                            setImageFailed (true)
                        }}
                    /> : <Image alt={"Logo image"} resizeMode={"stretch"} style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: 10,
                    }} source={require('../../Assets/images/placeholder.png')} />}
                </Center>
                <Box justifyContent={'center'} alignItems={'center'} ml={'10px'} mt={'1px'} h={'25px'} w={'150px'}>
                    <Text color={black} fontSize={17}>
                        {name}
                    </Text>
                </Box>
                <Box ml={'10px'} mt={'3px'} h={'10px'} w={'150px'}>
                    {selected ?<Divider bg={primaryYellow} thickness="4" width={'150px'}/> : null}
                </Box>
            </Center>
        </Pressable>
    )
}

TagItem.propTypes = {

};

TagItem.defaultProps = {

};
export default memo(TagItem);
