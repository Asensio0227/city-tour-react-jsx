import React, { Component } from 'react'
import "./Tour.scss";
import {
  FaWindowClose,
  FaCaretSquareDown
} from "react-icons/fa"

export default class Tour extends Component {
  state = {
    showInfo:false,
  }
  handleChange = () => {
      this.setState({
        showInfo: !this.state.showInfo
      })
    }
  render() {
    let { id, name, info, city, image } = this.props.tour;
    const { removeTour } = this.props;
    
    return (
      <section className="tour">
        <div className="img-container">
          <img src={image[0]}alt="" />
          <button
            className="close-btn"
            onClick={() => {
              removeTour(id)
            }}
          >
            <FaWindowClose/>
          </button>
        </div>
        <div className="tour-info">
          <h5>{city}</h5>
          <h6>{name}</h6>
          <p>
            info  <FaCaretSquareDown className="caret"
              onClick={this.handleChange}
            /> <br/>
          {
            this.state.showInfo && (
              <span>
                {info}
              </span>
            )
          }
          </p>
        </div>
      </section>
    )
  }
}
