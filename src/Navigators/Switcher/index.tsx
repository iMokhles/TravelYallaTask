import React, {useEffect, useState} from "react";
import {NavigationContainer, NavigationState} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {Nullable} from "../../Interfaces/globalInterfaces";
import {getActiveRoute, getRoute, navigationRef} from "../../Helpers/NavigatorHelper";
import AppNavigator from "../AppNavigator";
import withLoadable from "../../Components/Loader";
import {State} from "../../Interfaces/reduxInterfaces";
import useTimeout from "@flaque/use-timeout";
import {authActionCreators} from "../../Redux/Reducers/auth/actions";
import FlashMessage from "react-native-flash-message";


const Switcher = () => {
    const [routeName, setRouteName] = useState<Nullable<string>>(null);
    const {initialLoading} = useSelector((state:State) => state.auth);

    useEffect(() => {
        // @ts-ignore
        console.tron.log("initialLoading: ", initialLoading)
    }, [initialLoading])
    const onStateChange = (state?: NavigationState) => {
        const previousRouteName = routeName;
        const currentRouteName = getRoute(state).name;
        if (previousRouteName !== currentRouteName) {
            setRouteName(currentRouteName);
        }
    };

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                setRouteName(getActiveRoute().name);
            }}
            onStateChange={onStateChange}>
            <AppNavigator />
            <FlashMessage
                duration={3000}
                position="top"
            />
        </NavigationContainer>
    );
};

export default withLoadable(() => useSelector((state: State) => state.auth.initialLoading))(Switcher);
