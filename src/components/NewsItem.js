import React from 'react'

const NewsItem = (props) =>{
    
        let { title, description, imgUrl, newsurl, author, date, source, bagColor} = props
        return (
            <div className='my-3'>
                <div className="card">
                    <div className="d-flex justify-content-end position-absolute" style={{right: '0'}}>
                    <span className= {`badge rounded-pill bg-${bagColor}`}>{source}</span>
                    </div>
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

export default NewsItem

