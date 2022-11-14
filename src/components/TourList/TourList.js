import React, { Component } from 'react';
import Tour from '../Tour/Tour'
import "./TourList.scss"
import items from "../../tourData";
import Client from "../../contentful"


export default class TourList extends Component {
  state = {
    tours: []
  }
  
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "cityTour",
        order:"sys.createdAt",
      });
      console.log(response.items);
      // let tours = await this.formData(response.items);
      console.log(this.formData(response.items));
    } catch (error) {
      console.log(error);
    }
  }; 

  componentDidMount() { 
    this.getData();
  };

  formatData(venom){
    console.log(venom);
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

    if (tours.length < 1) {
      return (
        <section className="section section-center">
          <h2>no tours available</h2>
          <button className="btn" onClick={() => {
            this.getData()
          }}>
            refresh
          </button>
        </section>
      )
    }

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
