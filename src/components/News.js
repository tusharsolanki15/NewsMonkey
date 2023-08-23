import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spineer from './Spineer';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: 'general',
  }

  static PropsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async updateNews() {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}
&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true });
    let data = await fetch(url);
    this.props.setProgress(30)
    let parseData = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews();
    console.log("run")
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1});
    this.updateNews();
  }


  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1});
    this.updateNews();

  }

  fetchMoreData = async () => {
    // this.setState({});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}
&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(parseData.articles), 
      totalResults: parseData.totalResults,
      loading: false
    });
    console.log(this.state.totalResults)
    console.log(this.state.articles)
    console.log(this.state.page)
  };
  

  render() {
    return (
      <>
          <h1 className='text-center' style={{ margin: '30px 0px' }}>NewsMokey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          {this.state.loading && <Spineer/>}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={this.state.loading && <Spineer/>}
          >
            <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className='col-md-4' key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} bagColor={this.props.bagColor} />
                </div>
              })}
            </div>
          </div>
          </InfiniteScroll>
      </>
    )
  }
}

export default News

