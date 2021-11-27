import React from "react";
import { Header, Card, Image } from "semantic-ui-react";

const NewsCard = (news_index) => {
  return (
    <Card>
      <Image src={news_index.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{news_index.title}</Card.Header>
        <Card.Meta>
          {`By: ${news_index.author} at ${news_index.source.name}`}{" "}
        </Card.Meta>
        <Card.Description>{news_index.description}</Card.Description>
        <Card.Extra>{`Published at ${news_index.publishedAt}`}</Card.Extra>
      </Card.Content>
    </Card>
  );
};

export default NewsCard;

// Previous hard coded NewsCard
// image='https://editorial.fxstreet.com/images/Markets/Currencies/Digital%20Currencies/Bitcoin/bitcoins-52602600_Large.jpg'
// header='DBS Bank to launch cryptocurrency exchange after condemning Bitcoin a Ponzi scheme in 2017'
// meta={`By: ${'Lorenzo Stroe'} at ${'FXStreet'}`}
// description='DBS Bank of Singapore has just announced the launch of a digital asset exchange featuring Bitcoin, Ethereum, Bitcoin Cash, and XRP and several fiat cu'
// extra={<Header as='h6'>`Published at ${"2020-12-10T20:29:20Z"}`</Header>}
