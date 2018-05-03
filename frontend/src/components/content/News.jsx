import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../../actions/fetchNews";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ConnectedNews extends Component {
  componentDidMount() {
    this.props.dispatch(fetchNews());
    this.interval = setInterval(() => {
      console.log("refetching news");
      this.props.dispatch(fetchNews());
    }, 1800000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderCarousel() {
    return (
      <Carousel
        width="100%"
        interval={10000}
        stopOnHover={true}
        swipeable={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
      >
        {this.props.news.articles.map((article, key) => {
          return <div key={key}>{article.title}</div>;
        })}
      </Carousel>
    );
  }

  render() {
    if (this.props.news == null) {
      return <div>Loading news..</div>;
    } else {
      return <div className="carousel-container">{this.renderCarousel()}</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    news: state.news,
    loading: state.loading
  };
};

const News = connect(mapStateToProps)(ConnectedNews);

export default News;
