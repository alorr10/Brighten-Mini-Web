import React from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native-web';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Main from './pages/Main';
import Instagram from './pages/Instagram';
import * as serviceWorker from './serviceWorker';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import ThemeSwitcher from './pages/ThemeSwitcher';
import Header from './components/Header';
export const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/BrightenMini',
  cache: new InMemoryCache(),
});

const AppWithApollo = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <ApolloProvider client={client}>
          <Header />
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Instagram} />
          <Route path="/users/:id" component={App} />
          <Route path="/bootstrap" component={ThemeSwitcher} />
        </ApolloProvider>
      </Router>
    </PersistGate>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    height: '100vh',
  },
});

AppRegistry.registerComponent('App', () => AppWithApollo);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
