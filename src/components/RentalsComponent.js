import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media, CarouselIndicators } from "reactstrap";
import { Link } from "react-router-dom";
import Jumbo from "./JumbotronComponent";
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from '@styled-icons/entypo'



function Rentals({ rentals }) {
  const [current, setCurrent] = useState(0);
  const length = rentals.length;
  const [animating, setAnimating] = useState(false);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setCurrent(newIndex);
  }

  if (!Array.isArray(rentals) || rentals.length <= 0) {
    return null;
  }
  
  
  // const directory = props.rentals.map((rental) => {
  //   return (
  //     <div key={rental.id} className="col-md-6 ">
  //       <RenderDirectoryItem rentals={rentals} />
  //       {/* <p>hi from Directory</p> */}
  //     </div>
  //   );
  // });



    const directory = rentals.map((rental, index) => {
      return (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <Link to={`/rentals/${rental.id}`}>
              <img src={rental.image} alt='travel image' className='d-block mx-auto w-100' />
            </Link>
          )}
        </div>
      );
    });
  

  return (
    <React.Fragment>
      <Jumbo />
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>about us</BreadcrumbItem>
            </Breadcrumb>
            <h2>rentals</h2>
            <hr />
          </div>
        </div>
        <div className="row carous">
        {/* <section className='slider'> */}
        
          <ChevronLeft size="20" className='left-arrow' onClick={prevSlide} />
          <ChevronRight size="20" className='right-arrow' onClick={nextSlide} />
          {/* {rentals.map((rental, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={rental.image} alt='travel image' className='d-block mx-auto w-100' />
                )}
              </div>
            );
            
          })} */}
          {directory}
        {/* </section> */}
        <CarouselIndicators items={rentals} activeIndex={current} onClickHandler={goToIndex} className="indicator" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Rentals;
