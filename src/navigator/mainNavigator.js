import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen5483Navigator from '../features/BlankScreen5483/navigator';
import BlankScreen5481Navigator from '../features/BlankScreen5481/navigator';
import BlankScreen5479Navigator from '../features/BlankScreen5479/navigator';
import BlankScreen5477Navigator from '../features/BlankScreen5477/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen5483: { screen: BlankScreen5483Navigator },
BlankScreen5481: { screen: BlankScreen5481Navigator },
BlankScreen5479: { screen: BlankScreen5479Navigator },
BlankScreen5477: { screen: BlankScreen5477Navigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
