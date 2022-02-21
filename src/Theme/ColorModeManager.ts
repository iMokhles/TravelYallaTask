import {ColorMode, StorageManager} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const colorModeManager: StorageManager = {
    get: async () => {
        try {
            let val = await AsyncStorage.getItem('@color-mode');
            return val === 'dark' ? 'dark' : 'light';
        } catch (e) {
            return 'light';
        }
    },
    set: async (value: ColorMode) => {
        try {
            // @ts-ignore
            await AsyncStorage.setItem('@color-mode', value);
        } catch (e) {
            // @ts-ignore
            console.tron.log(e)
        }
    },
};
