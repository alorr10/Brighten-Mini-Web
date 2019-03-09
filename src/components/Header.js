import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native-web';
import { connect } from 'react-redux';
import { logout } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { search } from '../actions';
class Header extends Component {
  state = {
    text: '',
  };
  login = () => {
    if (this.props.id) {
      this.props.logout();
      this.props.history.push('/');
    }
    this.props.history.push('/login');
  };

  goHome = () => {
    this.props.history.push('/');
  };

  search = () => {
    this.props.search(this.state.text);
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { id } = this.props;
    return (
      <Navbar bg="light">
        <Navbar.Brand href="/">Moodboost Mini</Navbar.Brand>
        <Form inline className="mr-auto">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={this.onChange}
          />
          <Button variant="outline-info" onClick={this.search}>
            Search
          </Button>
        </Form>
        <Button variant="primary" onClick={this.login}>
          {id ? 'Logout' : 'Login'}
        </Button>
      </Navbar>
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
    search: text => {
      dispatch(search(text));
    },
  };
};

const HeaderWithRouter = withRouter(Header);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderWithRouter);

/*     <View style={styles.container}>
        <Button title="Home" onPress={this.goHome} style={styles.homeButton} />
        {this.props.id ? (
          <Button onPress={this.props.logout} title="Logout" style={styles.button} />
        ) : (
          <Button onPress={this.login} title="Login" style={styles.button} />
        )}
      </View>*/
