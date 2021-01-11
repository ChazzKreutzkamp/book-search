import gql from 'graphql-tag';
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
          authors
          description
          bookId
          image
          link
          title
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bookCount
      savedBooks {
          authors
          description
          bookId
          image
          link
          title
      } 
    }
  }
`;
