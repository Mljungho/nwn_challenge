import React, { useState, useEffect } from "react";
//import { useSelector } from 'react-redux'
import NewsCard from "./NewsCard";
import { Grid } from "semantic-ui-react";
import axios from "axios";

const NewsIndex = () => {
  const [topHeadlines, setTopHeadlines] = useState([]);

  useEffect(() => {
    getTopHeadlines();
  }, []);

  const getTopHeadlines = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    setTopHeadlines(response.data.articles);
  };

  const listOfTopHeadlines = topHeadlines.map((article) => {
    return <NewsCard article={article} />;
  });
  return (
    <>
      <Grid data-cy="articles">{listOfTopHeadlines}</Grid>
    </>
  );
};

export default NewsIndex;
