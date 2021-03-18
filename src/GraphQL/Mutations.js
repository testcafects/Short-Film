import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    
    $name: String!
    $email: String!
    $password: String!
    $token: String
    $avatar: String
    # $age: Int
  ) {
    createUser(data:{
      name: $name
      email: $email
      password: $password
      avatar: $avatar
      token: $token
    #   age: $age
    }) {
      id
      name
      email
      password
    #   age
    }
  }
`;