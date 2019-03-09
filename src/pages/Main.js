import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native-web';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearSearchUsers } from '../actions';

class Main extends Component {
  componentWillUnmount() {
    this.props.clearSearchUsers();
  }
  render() {
    const { searchUsers } = this.props;
    if (searchUsers && searchUsers.length) {
      return (
        <View style={styles.listContainer}>
          {searchUsers.map(user => (
            <View style={styles.link} key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </View>
          ))}
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Query query={allUsersQuery}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return (
              <View style={styles.listContainer}>
                {data.allUsers.map(user => (
                  <View style={styles.link} key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
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
const mapStateToProps = state => {
  return {
    searchUsers: state.users.searchUsers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearSearchUsers: () => {
      dispatch(clearSearchUsers());
    },
    //   search: text => {
    //     dispatch(search(text));
    //   },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
