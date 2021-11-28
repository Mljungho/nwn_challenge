/* eslint-disable no-empty-pattern */
import React, { useState } from "react";
//import { useDispatch } from "react-redux";
//import NewsService from "../modules/NewsService";
import { Input } from "semantic-ui-react";
import axios from "axios";

const NewsSearch = () => {
  const [searchValue, setSearchValue] = useState();
  const [searchResponse, setSearchResponse] = useState([]);

  const getSearchResponse = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    setSearchResponse(response.data.articles);
  };

  return (
    <>
      <Input
        data-cy="input_search"
        action="Search"
        placeholder="Search..."
        onChange={(event) => setSearchValue(event.target.value)}
        onClick={getSearchResponse}
      />
    </>
  );
};

export default NewsSearch;
