import React, { Component, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=4bb608c041934a56813515e368f15676&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    if (parsedData) {
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    }
  }

  handleNextState = async () => {
    this.setState({ loading: true });
    console.log("Next state");
    console.log("Totra" + this.state.totalResults + "\n");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apikey=4bb608c041934a56813515e368f15676&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData ? parsedData : "")
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    })

  }

  handlePrevState = async () => {
    this.setState({ loading: true });
    console.log("Previous state");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=4bb608c041934a56813515e368f15676&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData ? parsedData : "")
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,

    })
  }
  render() {

    return (
      <div className='container'>

        <h2 className='text-center'>Digital Media Times - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className='row'>
          {!this.props.loading && this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0.45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageURL={element.urlToImage ? element.urlToImage : "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png"} newsURL={element.url ? element.url : ""} />
            </div>
          })}

        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevState}>&larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults) / this.props.pageSize} className="btn btn-dark " onClick={this.handleNextState}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News