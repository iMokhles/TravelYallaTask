import React, {FC, memo, useEffect, useState} from "react";
import {BrandItemProps} from "./constants";
import {Box, Center, Divider, Flex, Image, Input, Pressable, Text} from "native-base";
import {ICON_TYPE, IMIcon} from "../IMIcon";
import {black, primaryYellow, white} from "../../Constants/colors";
import FastImage from 'react-native-fast-image'
import _ from "lodash";

const BrandItem:FC<BrandItemProps> = (props) => {
    const {
        name,
        logo,
        tags
    } = props

    const [nameString, setNameString] = useState<string>("")
    const [logoString, setLogoString] = useState<string>("")


    const [tagsNames, setTagsNames] = useState<string>("")
    const [isImageFailed, setImageFailed] = useState<boolean>(false);

    useEffect(() => {
        let tagsList = _.map(tags, (tag) => {
            return tag.name
        })
        setTagsNames(tagsList.join(', '))
        setNameString(name)
        setLogoString(logo!)
    }, [tags, logo, name])


    return (
        <Pressable h={'120px'} p={'5px'} justifyContent={'center'} alignItems={'center'} onPress={() => {

        }}>
            <Box shadow={'3'} rounded={10} p={'10px'} justifyContent={'center'} bg={'white'} w={'95%'} h={'90%'}>
                <Flex flexDirection={'row'}>
                    <Box w={'70px'} h={'70px'}>
                        {(logo && !isImageFailed) ? <FastImage
                            style={{
                                borderRadius: 10,
                                height: '100%',
                                width: '100%',
                            }}
                            source={{
                                uri: logo,
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                            onError={() => {
                                setImageFailed(false)
                            }}
                        /> : <Image alt={"Logo image"} resizeMode={"contain"} style={{
                            height: '100%',
                            width: '100%',
                            borderRadius: 10,
                        }} source={require('../../Assets/images/placeholder.png')} />}
                    </Box>
                    <Box flex={1} px={'10px'}>
                        <Text color={black} bold fontSize={18}>
                            {name}
                        </Text>
                        <Text color={'muted.600'} fontSize={14}>
                            {tagsNames}
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Pressable>
    )
}

export default memo(BrandItem);
