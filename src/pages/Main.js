import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native-web';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Query query={allUsersQuery}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return (
              <View style={styles.listContainer}>
                {data.allUsers.map(user => (
                  <View style={styles.link} key={user.id}>
                    <Link to={`/${user.id}`}>{user.name}</Link>
                  </View>
                ))}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  listContainer: {
    flexDirection: 'row',
    width: '100vw',
    flexWrap: 'wrap',
  },
  link: {
    padding: 15,
  },
});

const allUsersQuery = gql`
  {
    allUsers(orderBy: createdAt_ASC) {
      id
      name
    }
  }
`;

export default Main;
