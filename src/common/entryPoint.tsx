// vendors
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// components
import BinaryLogicOperations from '../binaryLogicOperations/binaryLogicOperations.container';
import NumberConversion from '../numberConversion/numberConversion.container';
import BinaryAritmeticOperations from '../binaryAritmeticOperations/binaryAritmeticOperations.container';
// icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const EntryPoint = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;
            let icon: React.ReactElement<any, any>;

            if (route.name === 'Number Conv') {
              iconName = focused ? 'arrow-redo-sharp' : 'arrow-redo-outline';
              icon = <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Arithmetic Ops') {
              iconName = focused ? 'calculator' : 'calculator-outline';
              icon = <Ionicons name={iconName} size={size} color={color} />;
            } else {
              iconName = focused ? 'math-integral-box' : 'math-integral';
              icon = (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
            return icon;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Number Conv" component={NumberConversion} />
        <Tab.Screen name="Logic Ops" component={BinaryLogicOperations} />
        <Tab.Screen
          name="Arithmetic Ops"
          component={BinaryAritmeticOperations}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default EntryPoint;
