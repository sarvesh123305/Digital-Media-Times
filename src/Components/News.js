import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles: [],
      loading:false,
    } 
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4bb608c041934a56813515e368f15676"
    let data = await fetch(url);
    let parsedData =  await data.json()
    console.log(parsedData?parsedData : "")
    if(parsedData){
    this.setState({articles : parsedData.articles}); 
   }
  }

  render() {
    return (
        <div className='container'>
          
          <h2>Digital Media Times - Top Headlines</h2>

        <div className='row'>
        {this.state.articles.map((element) => {
  return  <div className='col-md-4' key={element.url}>
    <NewsItem  title = {element.title?element.title.slice(0.45):""} description = {element.description?element.description.slice(0,88):""} imageURL={element.urlToImage?element.urlToImage:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png"} newsURL = {element.url?element.url : ""} />
    </div>
  })}
        
        </div>
      </div>
    )
  }
}

export default News