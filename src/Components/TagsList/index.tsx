import React, {FC, memo, useEffect, useState} from "react";
import {TagsListProps} from "./constants";
import PropTypes from "prop-types";
import {Box, Center, FlatList, Input} from "native-base";
import {ICON_TYPE, IMIcon} from "../IMIcon";
import TagItem from "../TagItem";
import {ITag} from "../../Interfaces/brands";


const TagsList:FC<TagsListProps> = (props) => {
    const {
        tags,
        onTagChange
    } = props

    const [selectedTag, setSelectedTag] = useState<ITag|null>(null)

    useEffect(() => {
        // @ts-ignore
        console.tron.log("111testOut: ", tags)
    }, [])

    return (
        <Box h={'120px'} w={'100%'}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                h={'100%'}
                w={'100%'}
                horizontal={true}
                data={tags}
                extraData={tags}
                renderItem={({item}) => (
                    <TagItem
                        name={item.name}
                        image={item.image}
                        selected={(item.name===selectedTag?.name) ? true : false}
                        onPress={() => {
                            if (selectedTag && (item.name===selectedTag?.name)) {
                                setSelectedTag(null)
                                if (onTagChange) {
                                    onTagChange(null)
                                }
                            } else {
                                setSelectedTag(item)
                                if (onTagChange) {
                                    onTagChange(item)
                                }
                            }
                        }}
                    />
                )}
            />
        </Box>
    )
}

TagsList.propTypes = {

};

TagsList.defaultProps = {

};
export default memo(TagsList);
