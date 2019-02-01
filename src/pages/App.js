import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native-web';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: 'Send me a compliment',
      customText: '',
    };
    this.inp_key = React.createRef();
  }

  componentDidMount() {
    // if (!this.props.id) {
    //   this.props.history.push('/login');
    // }
  }

  handleChangeText = customText => {
    this.setState({ customText });
  };

  submit = sendBrighten => {
    sendBrighten({
      variables: {
        receiverId: this.props.match.params.id,
        text: this.state.customText,
        senderId: this.props.id,
      },
    });
    this.setState({ customText: '' });
  };

  render() {
    const { placeholder, customText } = this.state;
    const { id } = this.props;
    if (!id) {
      return (
        <View style={styles.container}>
          <Header />
          <Text> Please Sign In to Send a message </Text>
          <Link to={'./login'}>Sign In</Link>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Header />
        <Query query={userQuery} variables={{ id: this.props.match.params.id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :({console.log(error)}</p>;
            if (data.User === null) return <p>No user found :(</p>;
            return (
              <View style={styles.innerContainer}>
                <Text style={{ textAlign: 'center' }}>Hi {data.User.name}</Text>
                {data.User.profilePicture && (
                  <Image source={data.User.profilePicture.url} style={styles.image} />
                )}
                <Mutation mutation={sendBrighten}>
                  {(sendBrighten, { data }) => (
                    <View style={styles.inputContainer}>
                      <TextInput
                        ref={this.inp_key}
                        style={styles.textStyle}
                        placeholder={placeholder}
                        value={customText}
                        onChangeText={this.handleChangeText}
                      />
                      <Button onPress={() => this.submit(sendBrighten)} title="Submit" />
                    </View>
                  )}
                </Mutation>
              </View>
            );
          }}
        </Query>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },

  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  inputContainer: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    flex: 1,
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
});

const userQuery = gql`
  query($id: ID!) {
    User(id: $id) {
      name
      profilePicture {
        url
      }
    }
  }
`;

const sendBrighten = gql`
  mutation createBrightenWithCustomCompliment($receiverId: ID!, $text: String!, $senderId: ID!) {
    createBrighten(senderId: $senderId, receiverId: $receiverId, text: $text) {
      id
    }
  }
`;

const mapStateToProps = state => {
  return {
    id: state.users.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const AppWithRouter = withRouter(App);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppWithRouter);
