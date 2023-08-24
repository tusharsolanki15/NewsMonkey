import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spineer from './Spineer';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) =>{
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews =  async() =>{
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}
&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parseData = await data.json();
    props.setProgress(70)
    setarticles(parseData.articles)
    settotalResults(parseData.totalResults)
    setloading(false)
    props.setProgress(100)
  }

  useEffect(() => {
  document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  }, [])


  const fetchMoreData = async () => {
    // setpage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}
&page=${page+1}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setpage(page+1)
    setarticles(articles.concat(parseData.articles))
    settotalResults(parseData.totalResults)
    setloading(false)
  };
  

 
    return (
      <>
          <h1 className='text-center' style={{ margin: '85px 0px 30px 0px' }}>NewsMokey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
          {loading && <Spineer/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData} 
            hasMore={articles.length !== totalResults}
            loader={<Spineer/>}
          >
            <div className="container">
            <div className="row">
              {articles.map((element) => {
                return <div className='col-md-4' key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} bagColor={props.bagColor} />
                </div>
              })}
            </div>
          </div>
          </InfiniteScroll>
      </>
    )
  }


News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: 'general',
}

News.PropsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News

