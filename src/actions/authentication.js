import { client } from '../index';
import gql from 'graphql-tag';
import _ from 'lodash';

export const createUser = ({ full_name, id, profile_picture, username }) => async dispatch => {
  try {
    const {
      data: { createUser: user },
    } = await client.mutate({
      mutation: createUserMutation,
      variables: {
        name: full_name,
        instagram: username,
      },
    });
    dispatch(userDetailsFulfilled(user));
  } catch (error) {
    console.log(error);
    if (_.includes(JSON.stringify(error), 'instagram')) {
      dispatch(loginWithInstagram(username));
    }
  }
};

const createUserMutation = gql`
  mutation($name: String!, $instagram: String) {
    createUser(name: $name, instagram: $instagram) {
      id
      name
      instagram
    }
  }
`;

export const loginWithInstagram = username => async dispatch => {
  try {
    const {
      data: { User: user },
    } = await client.query({
      query: getUserByInstaQuery,
      variables: {
        instagram: username,
      },
    });
    dispatch(userDetailsFulfilled(user));
  } catch (error) {
    console.log(error);
  }
};

const getUserByInstaQuery = gql`
  query($instagram: String) {
    User(instagram: $instagram) {
      id
      name
      instagram
    }
  }
`;

export const userDetailsFulfilled = user => {
  return {
    type: 'USER_DETAILS_FULFILLED',
    payload: user,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
