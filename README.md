## NWN - News Wire Network Challenge

### Use Stories

As a user  
In order to keep up with latest news
I want to see Top Headlines

As a user  
In order to find newa that I am interested in
I want to search for news

### How we used Thunder Client

![Top Headlines in Thunder Client](Images/thunder_client_1.png)

1. From `newsapi.org` we got the first part of Thunder Client request (https://newsapi.org/v2/top-headlines)
2. In Query Paramaters added parameters (country and key)
3. Pressed on button `send`
4. Copied Response to update data in cypress->fixtures->new_index.json
