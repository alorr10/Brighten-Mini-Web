import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InstagramLogin from 'react-instagram-login';
import fetchJsonp from 'fetch-jsonp';
class Instagram extends Component {
  state = {
    name: '',
  };
  responseInstagram = async response => {
    console.log(response);
    const r = await fetchJsonp(`https://api.instagram.com/v1/users/self/?access_token=${response}`);
    const json = await r.json();
    console.log(json);
    this.setState({ name: json.data.full_name });
  };

  onFailure = r => {
    console.log('FAIL:', r);
  };
  render() {
    return (
      <View style={styles.container}>
        {!this.state.name && (
          <InstagramLogin
            clientId="db56e3d402ef4c83b8c701dd16e5a4c5"
            buttonText="Login"
            onSuccess={this.responseInstagram}
            onFailure={this.onFailure}
            implicitAuth
          />
        )}
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
});

export default Instagram;

// curl \
//   -X POST \
//   -F 'access_token=<19976313.db56e3d.a3b3ae911b8a4c66a053cb8709711d4f>' \
//   -F 'sig=<your_signature>' \
//   https://api.instagram.com/v1/media/657988443280050001_25025320/likes
