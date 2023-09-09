import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Books from "../../Screens/Books";
import Cart from "../../Screens/Cart";
import ShoppingCartIcon from "../components/ShoppingCartIcon";

const Stack = createStackNavigator();

function MyStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Books"
        component={Books}
        options={{
         headerRight: props => <ShoppingCartIcon {...props} />
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
      />
    </Stack.Navigator>
  );
}

export default function NavigatorApp() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}