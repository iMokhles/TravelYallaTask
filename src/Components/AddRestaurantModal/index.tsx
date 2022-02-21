import {Box, Button, Center, Flex, Input, Pressable, Text, View} from "native-base";
import React, {memo, FC, useState} from "react";
import {ICON_TYPE, IMIcon} from "../IMIcon";
import {AddRestaurantModalProps} from "./constants";
import {primaryGreen, primaryYellow} from "../../Constants/colors";
import {Portal} from "react-native-portalize";
import {SwipeablePanel} from "rn-swipeable-panel";
import AddRestaurantButton from "../AddRestaurantButton";
import {useDispatch} from "react-redux";
import {brandsActionCreators as BrandsActions} from "../../Redux/Reducers/brands/actions";
import _ from "lodash";
import {showMessage} from "react-native-flash-message";

const AddRestaurantModal: FC<AddRestaurantModalProps> = (props) => {
    const {
        onSavePress,
        onClosePress,
        title,
        isActive
    } = props

    const dispatch = useDispatch();

    const [name, setName] = useState<string>("")
    const [tagsNames, setTagsNames] = useState<string>("")

    return (
        <Portal>
            <SwipeablePanel
                fullWidth={true}
                onlySmall={true}
                showCloseButton={true}
                onClose={onClosePress}
                isActive={isActive}
                style={{
                    borderTopLeftRadius: 35,
                    borderTopRightRadius: 35,
                }}
            >
                <Box flex={1} justifyContent={'center'} alignItems={'center'}>
                    <Text bold fontSize={15} color={primaryGreen}>
                        {title}
                    </Text>
                    <Input
                        px={'20px'}
                        borderColor={primaryYellow}
                        mt={'10px'}
                        w={'80%'}
                        h={'50px'}
                        autoCapitalize={'none'}
                        variant={'rounded'}
                        size="lg"
                        placeholder={"Name"}
                        placeholderTextColor={'#5d5d5f'}
                        fontWeight={300}
                        value={name}
                        onChangeText={(text) => {
                            setName(text)
                        }}
                        _focus={{
                            borderColor: primaryYellow
                        }}
                    />
                    <Input
                        px={'20px'}
                        borderColor={primaryYellow}
                        mt={'10px'}
                        w={'80%'}
                        h={'50px'}
                        autoCapitalize={'none'}
                        variant={'rounded'}
                        size="lg"
                        placeholder={"Tags"}
                        placeholderTextColor={'#5d5d5f'}
                        fontWeight={300}
                        value={tagsNames}
                        onChangeText={(text) => {
                            setTagsNames(text)
                        }}
                        _focus={{
                            borderColor: primaryYellow
                        }}
                    />
                    <Text
                        w={'75%'}
                        textAlign={'left'}
                        color={'muted.400'}
                    >
                        {"Ex. tag1, tag2, etc... "}
                    </Text>

                </Box>
                <Box mt={'20px'}>
                    <AddRestaurantButton title={"Add"} absolute={false} showIcon={false} onPress={() => {
                        if (name.length > 0 && tagsNames.length > 0) {
                            let tagsNamesSplit = tagsNames.split(',')
                            let newTags = _.map (tagsNamesSplit, (tag) => {
                                return {
                                    name: tag.replace(' ', '')
                                }
                            })
                            dispatch(BrandsActions.addRestaurant({
                                name: name,
                                tags: newTags
                            }));
                            showMessage({
                                message: "Restaurant Added Successfully",
                                type: "success",
                            });
                            if (onSavePress) {
                                onSavePress()
                            }
                        }

                    }} />
                </Box>
            </SwipeablePanel>
        </Portal>

    )
}

AddRestaurantModal.defaultProps = {
    title: "ADD NEW RESTAURANT",
    isActive: false
};
export default memo(AddRestaurantModal);
