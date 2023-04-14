import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: "general"
  }
  static PropsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
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
    // 
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  // "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=23e9599549024e49bb57e20ec4aac303"
  // handleprevclick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }
  // handleNextclick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=23e9599549024e49bb57e20ec4aac303&page=${this.state.page}&pageSize=${this.props.pageSize}`
  
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
    })
  };
  render() {
    return (
      <div>
        <h2 className="text-center my-4 " style={{ paddingTop: "10px" }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row" style={{ paddingLeft: "60px", paddingRight: "60px" }}>
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevclick}> &laquo; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &raquo;</button>
        </div> */}
      </div>
    )
  }
}

export default News