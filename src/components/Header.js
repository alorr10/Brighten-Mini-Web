import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native-web';
import { connect } from 'react-redux';
import { logout } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  login = () => {
    this.props.history.push('/login');
  };

  goHome = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Home" onPress={this.goHome} style={styles.homeButton} />
        {this.props.id ? (
          <Button onPress={this.props.logout} title="Logout" style={styles.button} />
        ) : (
          <Button onPress={this.login} title="Login" style={styles.button} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100vw',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  button: { marginBottom: 20 },
});

const mapStateToProps = state => {
  return {
    id: state.users.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

const HeaderWithRouter = withRouter(Header);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderWithRouter);
