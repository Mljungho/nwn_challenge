/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "./NewsCard";
import { Grid } from "semantic-ui-react";
import axios from "axios";

const NewsIndex = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.newsFeed);
  useEffect(() => {
    getTopHeadlines();
  }, []);

  const getTopHeadlines = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    dispatch({ type: "SET_NEWS_FEED", payload: response.data.articles });
  };
  const listOfTopHeadlines = articles.map((article) => {
    return <NewsCard article={article} />;
  });
  return (
    <>
      <Grid data-cy="articles">{listOfTopHeadlines}</Grid>
    </>
  );

  // const { newsFeed } = useSelector((state) => state);
  // return (
  //   <Grid columns={3} data-cy="news-display">
  //     {newsFeed &&
  //       newsFeed.map((newsItem) => {
  //         return <NewsCard newsItem={newsItem} />;
  //       })}
  //   </Grid>
  // );
};

export default NewsIndex;
