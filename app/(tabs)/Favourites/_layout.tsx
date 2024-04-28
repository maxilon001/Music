import { View } from "@/components/Themed"
import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"

const FavouritesScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen 
					name="index"
					options={{
						headerTitle: 'Favourites',
						headerShown: false,
					}}
				/>
			</Stack>
		</View>
	)
}

export default FavouritesScreenLayout
