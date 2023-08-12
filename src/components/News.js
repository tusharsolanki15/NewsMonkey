import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super()
    this.state = {
      articles: [],
      loading: false
    }
  } 

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b10e8052d23547e993d4719277480687"
    let data = await fetch(url);    
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles})
  }

  render() {
    return (
      <div>
        <div className="container my-3">
            <h1>NewsMokey - Top Headlines</h1>
            <div className="row">
            {this.state.articles.map((element)=>{
                return <div className='col-md-4' key={element.url}>
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsurl={element.url}/>
                </div>
            })}
            </div>
        </div>
      </div>
      
    )
  }
}

export default News

