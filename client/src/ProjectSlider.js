import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { projects } from './jsonData';

class Gallery extends React.Component {
  responsive = {
    0: { items: 1 },
    700: { items: 2 },
    1100: { items: 3 },
  };
  
  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  };
 
  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  };
  
  galleryItems() {
    return (
      projects.sort((a,b)=>a.position - b.position).map(p => (
        <div key={p.position} className="project-card">
          <h2>{p.name}</h2>
          <img src={require(`./img/${p.icon}`)} />
          <p>{p.skills.map((s,i)=> i + 1 === p.skills.length ? s + "." : s + " , ")}</p>
          <a className="btn">View Project</a>
        </div>
      ))
    )
  };
  
  render() {
    const items = this.galleryItems();
 
    return (
      <AliceCarousel
        items={items}
        duration={400}
        mouseDragEnabled={true}
        responsive={this.responsive}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      />
    );
  }
}

export default Gallery;