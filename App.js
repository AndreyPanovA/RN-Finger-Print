
import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import * as Font from 'expo-font';
import Navigation from "./src/components/navigation"
import store, { persistor } from "./src/redux";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';



// setGetTokenFunction(() => store.getState().auth);
// setGetDispatch((action) => store.dispatch(action));
// reducersFunction(() => ({ checkIsAuth, resetTokens }));


class App extends React.Component {
  state = {
    fontLoaded: true,
  };

  // componentDidMount() {
  //   this.loadAssetsAsync();
  // }

  // async loadAssetsAsync() {
  //   await Font.loadAsync({
  //           Montserrat: require('./assets/fonts/Montserrat-Bold.ttf'),
  //           semi:require('./assets/fonts/NormalidadText-SemiCondensed.otf'),
  //           regular:require('./assets/fonts/NormalidadText-TextRegular.otf'),
  //           bold:require('./assets/fonts/NormalidadText-TextBold.otf'),
  //           medium:require('./assets/fonts/NormalidadText-TextMedium.otf'),
  //           light:require('./assets/fonts/NormalidadText-TextLight.otf'),
  //           // 
  //           sfBold: require('./assets/fonts/SFProDisplay-Bold.otf'),
  //           sfSemi:require('./assets/fonts/SFProText-Semibold.otf'),
  //           sfRegular:require('./assets/fonts/SFProDisplay-Regular.otf'),
  //           // bold:require('./assets/fonts/NormalidadText-TextBold.otf'),
  //           sfMedium:require('./assets/fonts/SFProText-Medium.otf'),
  //           // light:require('./assets/fonts/NormalidadText-TextLight.otf'),
  //   // 
	// 	// <string>SFProDisplay-Bold.otf</string>
	// 	// <string>SFProDisplay-Regular.otf</string>
	// 	// <string>SFProText-Regular.otf</string>
	// 	// <string>SFProText-Semibold.otf</string>
	// 	// <string>SFProDisplay-Semibold.otf</string>
	// 	// <string>SFProText-Medium.otf</string>
  //   });
  //   this.setState({ fontLoaded: true });
  // }

  render() {
    // if (!this.state.fontLoaded) {
    //   return null; // render some progress indicator
    // }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
export default App




