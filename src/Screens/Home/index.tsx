import React, {memo, useEffect, useState} from "react";
import {Box, Button, Center, Container, Divider, Fab, Flex, HStack, Input, View} from "native-base";
import {ICON_TYPE, IMIcon} from "../../Components/IMIcon";
import Header from "../../Components/Header";
import SearchBar from "../../Components/SearchBar";
import TagsList from "../../Components/TagsList";
import {useDispatch, useSelector} from "react-redux";
import {brandsActionCreators as BrandsActions} from "../../Redux/Reducers/brands/actions";
import {State} from "../../Interfaces/reduxInterfaces";
import {IBrand, ITag} from "../../Interfaces/brands";
import BrandsList from "../../Components/BrandsList";
import _ from "lodash";
import {primaryGreen, primaryYellow} from "../../Constants/colors";
import AddRestaurantButton from "../../Components/AddRestaurantButton";
import AddRestaurantModal from "../../Components/AddRestaurantModal";
const data = require('../../Data/data.json');

export const Home = () => {
    const dispatch = useDispatch();
    const tags = useSelector<State, ITag[]>(state => state.brands.tags) || null;
    const brands = useSelector<State, IBrand[]>(state => state.brands.brands) || null;
    // const filterResults = useSelector<State, IBrand[]>(state => state.brands.filterResults) || null;

    const [filteredBrands, setFilteredBrands] = useState<Array<IBrand>|null>(null)

    const [showAddRestaurantModal, setShowAddRestaurantModal] = useState<boolean>(false)

    const loadData = () => {
        if (!brands) {
            dispatch(BrandsActions.loadData(data.brands));
        }
    }

    useEffect(() => {

        loadData()
    }, [])
    return (
        <Box safeAreaTop bg={"white"} flex={1}>
            <Header showShareIcon={false} />
            <SearchBar onChangeText={(text) => {
                if (text.length > 0) {
                    let filtered = _.filter(brands, (brand) => {
                        return brand.name.toLowerCase().includes(text.toLowerCase())
                    })
                    // dispatch(BrandsActions.filterRestaurants(filtered));
                    setFilteredBrands(filtered)
                } else {
                    // dispatch(BrandsActions.filterRestaurants(null));
                    setFilteredBrands(null)
                }
            }} />
            <Divider thickness="1" my="2" />
            <TagsList tags={tags} onTagChange={(tag) => {
                if (tag) {
                    let filtered = _.filter(brands, { tags: [tag] })
                    setFilteredBrands(filtered)
                } else {
                    setFilteredBrands(null)
                }

            }} />
            <BrandsList brands={filteredBrands || brands} />
            <AddRestaurantButton onPress={() => {
                setShowAddRestaurantModal(true)
            }} />
            <AddRestaurantModal onSavePress={() => {
                setShowAddRestaurantModal(false)
            }} onClosePress={() => {
                setShowAddRestaurantModal(false)
            }} isActive={showAddRestaurantModal} />
        </Box>
    )
}

export default memo(Home);
