import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NewsService from '../modules/NewsService'
import { Input, Search } from 'semantic-ui-react'


const NewsSearch = ({}) => {
//   const [search, setSearch] = useState();

//   const handleSearch = (search) => {
//     return search;

//   }

// };

// useEffect(() = {

// })


  return (
    <Input data-cy='input_search' action='Search' placeholder='Search...' />
  )
}

export default NewsSearch
