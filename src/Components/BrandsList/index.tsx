import React, {FC, memo, useEffect, useState} from "react";
import {Box, Center, FlatList, Input, Text} from "native-base";
import TagItem from "../TagItem";
import {BrandsListProps} from "./constants";
import BrandItem from "../BrandItem";
import {IBrand} from "../../Interfaces/brands";


const BrandsList:FC<BrandsListProps> = (props) => {
    const {
        brands
    } = props

    const [filteredBrands, setFilteredBrands] = useState<Array<IBrand>|null>(brands)

    useEffect(() => {
        // @ts-ignore
        console.tron.log("222testOut: ", brands)
        setFilteredBrands(brands)
    }, [brands])
    return (
        <Box flex={1} safeAreaBottom>
            <FlatList
                h={'100%'}
                w={'100%'}
                ListHeaderComponent={() => {
                    return (
                        <Box ml={'20px'} mb={'10px'} mt={'20px'}>
                            <Text bold fontSize={25}>
                                {"Restaurant"}
                            </Text>
                        </Box>
                    )
                }}
                data={filteredBrands}
                extraData={filteredBrands}
                renderItem={({ item }: { item: IBrand }) => (
                    <BrandItem name={item.name} tags={item.tags} logo={item.logo} />
                )}
            />
        </Box>
    )
}
export default memo(BrandsList);
