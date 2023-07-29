import {Button, Text, View} from "react-native";

export const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text className='bg-red-100 text-red-300 text-6xl' >Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}