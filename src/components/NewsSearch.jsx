import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NewsService from '../modules/NewsService'
import { Input, Search, Button } from 'semantic-ui-react'


const NewsSearch = ({}) => {

  return (
    <>
    <Input data-cy='input_search' action='Search' placeholder='Search...' />
    </>
  )
}

export default NewsSearch