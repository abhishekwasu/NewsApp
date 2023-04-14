import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageurl, newsurl, author, date,source} = this.props;
    return (
      <div className='my-3' >
        <div className="card" >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
                {source}
              </span>
          <img className="card-img-top" src={!imageurl ? "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://img.haymarketsac.in/autocarpro/78918646-5dcb-4818-b86f-74ede08b487b_hcv-engine-line.jpg" : imageurl} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{title}
              </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} at {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sn btn-dark">read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem