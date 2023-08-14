import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spineer from './Spineer';


export class News extends Component {
  constructor(){
    super()
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  } 

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b10e8052d23547e993d4719277480687&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);    
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles, 
      totalResults: parseData.totalResults,
      loading: false
    });
  }

  handleNextClick = async() =>{
    if((this.state.page + 1 <= Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b10e8052d23547e993d4719277480687&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);    
    let parseData = await data.json();
    console.log(parseData);
   
    this.setState({
        page: this.state.page+1,
        articles: parseData.articles,
        loading: false
      })
    }
    }


  handlePrevClick = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b10e8052d23547e993d4719277480687&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);    
    let parseData = await data.json();
    console.log(parseData);
   
    this.setState({
        page: this.state.page-1,
        articles: parseData.articles,
        loading: false
      })

  }

 
  render() {
    return (
      <div>
        <div className="container my-3">
            <h1 className='text-center'>NewsMokey - Top Headlines</h1>
            {this.state.loading && <Spineer/>}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className='col-md-4' key={element.url}>
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsurl={element.url}/>
                </div>
            })}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
      </div>
      
    )
  }
}

export default News

