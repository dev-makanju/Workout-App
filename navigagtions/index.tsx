import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from '../screen/HomeScreen';
import PlannerScreen from '../screen/PlannerScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
             <Stack.Screen
               name="Home"
               component={HomeScreen}
             />
             <Stack.Screen
               name="Planner"
               component={PlannerScreen}
             />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default Navigation