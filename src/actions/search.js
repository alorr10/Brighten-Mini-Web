import { client } from '../index';
import gql from 'graphql-tag';
import _ from 'lodash';

export const search = text => async dispatch => {
  try {
    const {
      data: { allUsers },
    } = await client.query({
      query: searchQuery,
      variables: {
        text,
      },
    });
    console.log(allUsers);
    dispatch(searchUsersFulfilled(allUsers));
  } catch (error) {
    console.log(error);
  }
};

const searchQuery = gql`
  query($text: String!) {
    allUsers(filter: { OR: [{ name_contains: $text }, { instagram_contains: $text }] }) {
      id
      name
      instagram
    }
  }
`;

function searchUsersFulfilled(users) {
  return {
    type: 'SEARCH_FULFILLED',
    payload: users,
  };
}

export const clearSearchUsers = () => {
  return {
    type: 'CLEAR_SEARCH_USERS',
  };
};
