import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Catagory = () => {
  const { id } = useParams()
  const catagoriesNews = useLoaderData()
  return (
    <div>
      {
        catagoriesNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
      }
    </div>
  );
};

export default Catagory;