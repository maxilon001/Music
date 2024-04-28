import { View } from "@/components/Themed"
import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"

const PlaylistsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen 
					name="index"
					options={{
						headerTitle: 'Playlists',
						headerShown: false,
					}}
				/>
			</Stack>
		</View>
	)
}

export default PlaylistsScreenLayout
