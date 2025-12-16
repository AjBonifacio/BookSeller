import { Tabs } from "expo-router";
import '../global.css';
import { DB } from "../context/BDContext";
import { SQLiteProvider } from "expo-sqlite";
import Fontawesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {

    return(
        <>
        <SQLiteProvider databaseName="BookSeller" onInit={DB} >
             <Tabs 
                screenOptions={{tabBarActiveTintColor: "red"
                    
                }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "home",
                        tabBarIcon: ({color}) =>(
                            <Fontawesome name="home" size={24} color={color} />
                        )
                            
                    }}
                />
                <Tabs.Screen
                    name="setting"
                    options={{
                        title: "setting",
                        tabBarIcon: ({color}) =>(
                            <Fontawesome name="gear" size={24} color={color} />
                        )
                    }}
                />
            </Tabs>
        </SQLiteProvider>
           
        </>
    )
}