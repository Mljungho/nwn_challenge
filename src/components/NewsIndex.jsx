import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import NewsCard from "./NewsCard";
import { Grid } from "semantic-ui-react";
// import axios from "axios";

const NewsIndex = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.newsFeed);

  useEffect(() => {
    NewsSerevice.index(dispatch);
  }, []);

  let listOfTopHeadlines = articles.map(() => {
    return <NewsCard article={article} />;
  });
  return (
    <>
      <Grid data-cy="articles">{listOfTopHeadlines}</Grid>
    </>
  );
};

export default NewsIndex;
