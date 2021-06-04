import "react-native-gesture-handler";
import React from 'react';

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const { Navigator, Screen } = createStackNavigator();

import Disciplinas from './pages/Disciplinas';
import Professores from './pages/Professores';
import Cursos from './pages/Cursos';

const config = { headerTransparent: true, headerTitle: null, headerLeft: null };


const DisciplinasStack = () => (
    <Navigator>
        <Screen 
            name="dash"
            component={Disciplinas}
            options={config}
        />
        <Screen 
            name="edit"
            component={Cursos}
            options={config}
        />
        <Screen 
            name="add"
            component={Cursos}
            options={config}
        />
    </Navigator>
)

const ProfessoresStack = () => (
    <Navigator>
        <Screen 
            name="dash"
            component={Professores}
            options={config}
        />
        <Screen 
            name="edit"
            component={Cursos}
            options={config}
        />
        <Screen 
            name="add"
            component={Cursos}
            options={config}
        />
    </Navigator>
)

const Routes = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="disciplinas">
                <Drawer.Screen
                    name="cursos"
                    component={Cursos}
                />
                <Drawer.Screen
                    name="disciplinas"
                    component={DisciplinasStack}
                />
                <Drawer.Screen
                    name="professores"
                    component={ProfessoresStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Routes;