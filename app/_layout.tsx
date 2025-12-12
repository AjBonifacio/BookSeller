import { Stack } from "expo-router";
import { Tabs } from "expo-router";
import '../global.css';

export default function TabLayout() {

    return(
        <>
            <Tabs 
                screenOptions={{tabBarActiveTintColor: "red"
                    
                }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "home"
                    }}
                />
                <Tabs.Screen
                    name="setting"
                    options={{
                        title: "setting"
                    }}
                />
            </Tabs>
        </>
    )
}