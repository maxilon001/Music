import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { BlurView } from 'expo-blur';
import { colors, fontSize } from '@/constants/tokens'
import { MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        //tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
            fontSize: fontSize.xs,
            fontWeight: '500',
        },
        headerShown: useClientOnlyValue(false, true),
	    tabBarStyle: {
	        position: 'absolute',
	        borderTopLeftRadius: 20,
	        borderTopRightRadius: 20,
	        borderTopWidth: 0,
	        paddingTop: 8,
		//filter: blur(),
	    },    
	    tabBarBackground: () => {
	       return ( <BlurView
	            intensity={95}
	            style={{
	                ...StyleSheet.absoluteFillObject,
	                overflow: 'hidden',
	                borderTopLeftRadius: 20,
	                borderTopRightRadius: 20,
	            }}
	        /> )
	    }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Favourites"
	options={{
	  title: 'Favourites',
	  tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color}/>

	}}
      />
      <Tabs.Screen
        name="(Songs)"
        options={{
          title: 'Songs',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="music-note" color={color}/>

        }}
      />
      <Tabs.Screen
        name="Playlist"
        options={{
          title: 'Playlist',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="playlist-music" color={color}/>

        }}
      />
      <Tabs.Screen
        name="Artists"
        options={{
          title: 'Artists',
          tabBarIcon: ({ color }) => <FontAwesome6 name="users-line" color={color}/>

        }}
      />
    </Tabs>
  );
}
