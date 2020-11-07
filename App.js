import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContent } from './screens/DrawerContent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from './components/context';

import Dashboard from './screens/Dashboard'
import Schedule from './screens/Schedules'
import Settings from './screens/Settings'
import Courses from './screens/Courses'
import Tasks from './screens/Tasks'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const DasboardStack = createStackNavigator();
  const DasboardStackScreen = ({navigation}) => (
    <DasboardStack.Navigator>
      <DasboardStack.Screen 
      name="Dashboard"
      options={{
        headerTitle: "Dashboard",
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#14b98b',
        },
        headerTitleStyle: {
          color: 'white',
          textAlign: 'center',
      },
        headerLeft: () => (
          <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.toggleDrawer()}
              
            >
              <Icon
                name= "menu"
                size= {32}
                color= "white"
              ></Icon>
            </TouchableOpacity>
        )
      }}
      component={Dashboard} />
    </DasboardStack.Navigator>
  );

  const CourseStack = createStackNavigator();
  const CourseStackScreen = ({navigation}) => (
    <CourseStack.Navigator>
      <CourseStack.Screen 
      name="Courses"
      options={{
        headerTitle: "Courses",
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#14b98b',  
        },
        headerTitleStyle: {
          color: 'white',
          textAlign: 'center',
      },
        headerLeft: () => (
          <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.toggleDrawer()}
              
            >
              <Icon
                name= "menu"
                size= {32}
                color= "white"
              ></Icon>
            </TouchableOpacity>
        )
      }}
      component={Courses} />
    
    </CourseStack.Navigator>
  );

  const TaskStack = createStackNavigator();
  const TaskStackScreen = ({navigation}) => (
    <TaskStack.Navigator >
      <TaskStack.Screen 
      name="Tasks"
      options={{
        headerTitle: "Tasks",
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#14b98b',
          
          
          
        },
        headerTitleStyle: {
          color: 'white',
          textAlign: 'center',
      },
        headerLeft: () => (
          <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.toggleDrawer()}
            >
              <Icon
                name= "menu"
                size= {32}
                color= "white"
              ></Icon>
            </TouchableOpacity>
        )
      }}
      component={Tasks} />
    </TaskStack.Navigator>  
  );

  const ScheduleStack = createStackNavigator();
  const ScheduleStackScreen = ({navigation}) => (
    <ScheduleStack.Navigator >
      <ScheduleStack.Screen 
      name="Schedule"
      options={{
        headerTitle: "Schedule",
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#14b98b',
        },
        headerTitleStyle: {
          color: 'white',
          textAlign: 'center',
      },
        headerLeft: () => (
          <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.toggleDrawer()}
              
            >
              <Icon
                name= "menu"
                size= {32}
                color= "white"
              ></Icon>
            </TouchableOpacity>
        )
      }}
      component={Schedule} />
    </ScheduleStack.Navigator>
  );

  const SettingsStack = createStackNavigator();
  const SettingsStackScreen = ({navigation}) => (
    <SettingsStack.Navigator >
      <SettingsStack.Screen 
      name="Settings"
      options={{
        headerTitle: "Settings",
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#14b98b',
          alignItems: "center",
          
          
        },
        headerTitleStyle: {
          color: 'white',
          textAlign: 'center',
      },
        headerLeft: () => (
          <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.toggleDrawer()}
              
            >
              <Icon
                name= "menu"
                size= {32}
                color= "white"
              ></Icon>
            </TouchableOpacity>
        )
      }}
      component={Settings} />
    </SettingsStack.Navigator>
  );
  const Drawer = createDrawerNavigator();
  const DrawerScreen = () => (
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen  name="Dashboard" component={DasboardStackScreen}/>
      <Drawer.Screen  name="Courses" component={CourseStackScreen}/>
      <Drawer.Screen  name="Tasks" component={TaskStackScreen}/>
      <Drawer.Screen  name="Schedule" component={ScheduleStackScreen}/>
      <Drawer.Screen  name="Settings" component={SettingsStackScreen}/>
  </Drawer.Navigator>
);
  return (
    
    <NavigationContainer >
     <DrawerScreen /> 
  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  back: {
    left: 22,
  },
});
