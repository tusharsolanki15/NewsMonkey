import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsurl, author, date, source, bagColor} = this.props
        return (
            <div className='my-3'>
                <div className="card">
                    <span className= {`position-absolute top-0 translate-middle badge rounded-pill bg-${bagColor}`} style={{left:  '85%', zIndex: '1'}}>{source}</span>
                    <img src={!imgUrl ? "https://img.global.news.samsung.com/uk/wp-content/uploads/2023/08/ZFlip5_ZFold5-Global-Launch_PR_dl1-1-002.jpg" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-danger">By {!author ? "Unknown" : author} On {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

