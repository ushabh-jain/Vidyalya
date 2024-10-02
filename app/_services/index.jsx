import { gql } from '@apollo/client/core'; 
import { request } from 'graphql-request';




const MASTER_URL = "https://ap-south-1.cdn.hygraph.com/content/"+process.env.NEXT_PUBLIC_HYGRAH_KEY+"/master"

export const getCourseList=async()=>{
    const query=gql`
    query MyQuery {
  courseLists {
    name
    banner {
      url
    }
    description
    totalChapters
    free
    id
   
  }
}`

   const result = await request(MASTER_URL,query);
   return result;
}

