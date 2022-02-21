import React, {FC, memo, useState} from "react";
import {SearchBarProps} from "./constants";
import {Box, Center, Input, Pressable} from "native-base";
import {ICON_TYPE, IMIcon} from "../IMIcon";
import {Keyboard} from "react-native";
import {IBrand} from "../../Interfaces/brands";


const SearchBar:FC<SearchBarProps> = (props) => {
    const {
        placeholder,
        onChangeText
    } = props

    const [queryText, setQueryText] = useState<string>("")

    return (
        <Center bg={'white'} h={'64px'} w={'100%'}>
            <Box flexDirection="row"
                 px={'15px'} bg={'#eeeff0'}
                 h={'55px'} w={'90%'}
                 rounded={'full'} alignItems="center"
                 justifyContent="flex-start">
                <Pressable onPress={() => {
                    if (queryText?.length > 0) {
                        setQueryText("")
                        onChangeText("")
                    }
                }}>
                    <IMIcon
                        origin={ICON_TYPE.EVIL_ICONS}
                        name={queryText?.length > 0 ? "close":"search"}
                        size={queryText?.length > 0 ? 30 : 40}
                        color={'#5d5d5f'}
                    />
                </Pressable>
                <Input
                    autoCapitalize={'none'}
                    variant={'unstyled'}
                    size="xl"
                    placeholder={placeholder}
                    placeholderTextColor={'#5d5d5f'}
                    fontWeight={300}
                    value={queryText}
                    onChangeText={(text) => {
                        // TODO: implement ( x ) button
                        setQueryText(text)
                        onChangeText(text)
                    }}
                />
            </Box>
        </Center>
    )
}

SearchBar.defaultProps = {
    placeholder: "What would you like to buy?",
};
export default memo(SearchBar);
