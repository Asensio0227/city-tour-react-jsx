import React, { Component } from 'react';
import Tour from '../Tour/Tour'
import "./TourList.scss"
import items from "../../tourData";


export default class TourList extends Component {
  state = {
    tours: []
  }

  componentDidMount() { 
    let tours = this.formatData(items);
    this.setState({tours});
  };

  formatData(venom){
    let tempItems = venom.map((item) => {
      let id = item.sys.id;
      let image = item.images.map((image)=>image.fields.file.url)
      let tour = { ...item.fields, image,id };
      return tour;
    })
    return tempItems;
  }
  
  removeTour = id => { 
    const { tours } = this.state;
    const newTours = tours.filter(tour => tour.id !== id);
    this.setState({ tours: newTours });
  }
  
  render() {
    const { tours } = this.state;

    return (
      <section>
        <div className="section-title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <div className="tour-list">
        {
          tours.map((tour) => {
            return <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          })
        }
        </div>
      </section>
    )
  }
}
