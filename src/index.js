import React from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native-web';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main';
import Instagram from './Instagram';
import * as serviceWorker from './serviceWorker';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/BrightenMini',
  cache: new InMemoryCache(),
});

const AppWithApollo = () => (
  <Router>
    <ApolloProvider client={client}>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Instagram} />
      <Route path="/:id" component={App} />
    </ApolloProvider>
  </Router>
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
