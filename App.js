import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator(){
  return (
    <Drawer.Navigator screenOptions={{
          headerStyle: {
                  backgroundColor: '#351401'
                },
          headerTintColor: 'white',
          sceneContainerStyle:{
                backgroundColor: '#3f2f25'
                },
          drawerContentStyle: {backgroundColor: "#351401"},
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#351401",
          drawerActiveBackgroundColor: "#E4BAA1"
          }}
    
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title:"All Categoires"
      }} />
      <Drawer.Screen name="Favourites" component={FavouritesScreen}options={{
        title:"Favourites"
      }}  />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
                    backgroundColor: '#351401'
                  },
                  headerTintColor: 'white',
                  contentStyle:{
                    backgroundColor: '#3f2f25'
                  }
            }}
          >
            <Stack.Screen 
              name="Drawer" 
              component={DrawerNavigator} 
              options ={{
                headerShown: false
              }}
              
              />
            <Stack.Screen 
              name="MealsOverview" 
              component={MealsOverviewScreen} 
              // options={ ({route,navigation})=> {
              //     const catId = route.params.categoryId;
              //     return {
              //       title: catId
              //     };
              //   }
              // }

              />
              <Stack.Screen 
                name='MealsDetails' 
                component={MealsDetailsScreen} 
                options={{
                  title:"Details"
                }}
                />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
});
