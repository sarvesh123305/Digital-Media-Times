import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageURL, newsURL, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card " >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ right: '11%', zIndex: '1' }}>
            {/*
                <a href={`www.google.com/${source.toString()}`} >source</a>
    */}{source}
          </span>

          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <a href={newsURL} /*target='_blank'*/ className="btn btn-sm btn-primary">Read more</a>
          </div>
          <p className="card-text"><small className="text-body-secondary">By {author ? author : "unknown"} {new Date(date).toGMTString()} </small></p>
        </div>

      </div>
    )
  }
}

export default NewsItem