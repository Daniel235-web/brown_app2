import React from 'react'
import { REGISTER_USER } from '../graphql/mutations/Resgister'
import {useMutation} from "@apollo/client"
import { useUserStore } from '../stores/userStore'
import { GraphQLErrorExtensions } from 'graphql'
import { useGeneralStore } from '../stores/generalStores'
import { ResgisterUserMutation } from '../gql/graphql'

const Register = () => {
  return (
    <div>
      Register
    </div>
  )
}

export default Register
