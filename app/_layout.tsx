import * as React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native'; // Убираем NavigationIndependentTree
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainActivity from '@/components/MainActivity';
import WaterInputActivity from '@/components/WaterInputActivity';
import StatisticsActivity from '@/components/StatisticsActivity'; // Добавляем экран статистики

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainActivity">
        <Stack.Screen name="MainActivity" component={MainActivity} />
        <Stack.Screen name="WaterInputActivity" component={WaterInputActivity} />
        <Stack.Screen name="StatisticsActivity" component={StatisticsActivity} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default App;
