import React from "react";
import { Card, Image } from "semantic-ui-react";

const NewsCard = (news_index) => {
  return (
    <Card>
      <Image src={news_index.urlToImage} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{news_index.title}</Card.Header>
        <Card.Meta>{`By: ${news_index.author} at ${news_index.name}`} </Card.Meta>
        <Card.Description>{news_index.description}</Card.Description>
        <Card.Extra>{`Published at ${news_index.publishedAt}`}</Card.Extra>
      </Card.Content>
    </Card>
  );
};

export default NewsCard;
