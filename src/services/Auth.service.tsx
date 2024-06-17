import React from "react";
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_LOCATIONS = gql`
  query  {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export async function LogIn(
{
    username,
    password
}:{username:string, password: string}) 
{
    const { loading, error, data } = useQuery(GET_LOCATIONS);

}


