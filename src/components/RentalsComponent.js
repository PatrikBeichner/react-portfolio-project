import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { Link } from 'react-router-dom';
import Jumbo from './JumbotronComponent';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from '@styled-icons/entypo';

function Rentals({ rentals }) {
  const [showRural, setShowRural] = React.useState(false);
  const [showUrban, setShowUrban] = React.useState(false);
  const toggleRural = () => {
    setShowRural(!showRural);
    setShowUrban(false);
  };
  const toggleUrban = () => {
    setShowUrban(!showUrban);
    setShowRural(false);
  };

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
              <BreadcrumbItem active>rentals</BreadcrumbItem>
            </Breadcrumb>
            <h2>
              rentals |{' '}
              <a href="javascript:void(0)" onClick={toggleRural}>
                rural
              </a>{' '}
              /{' '}
              <a href="javascript:void(0)" onClick={toggleUrban}>
                urban
              </a>
            </h2>
            <hr />
          </div>
        </div>
        <div style={{ height: '450px' }}>
          {showRural ? <Carousel rentals={rentals.filter((rentals) => rentals.location === 'rural')} /> : null}
          {showUrban ? <Carousel rentals={rentals.filter((rentals) => rentals.location === 'urban')} /> : null}
        </div>
      </div>
    </React.Fragment>
  );
}

function Carousel({ rentals }) {
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
  };

  if (!Array.isArray(rentals) || rentals.length <= 0) {
    return null;
  }

  const directory = rentals.map((rental, index) => {
    return (
      <div className={index === current ? 'slide active' : 'slide'} key={index}>
        {index === current && (
          <Link to={`/rentals/${rental.id}`}>
            <img src={rental.image} alt="available rental" className="d-block mx-auto w-100" />
            <CarouselCaption captionText={rental.description} captionHeader={rental.name} />
          </Link>
        )}
      </div>
    );
  });

  return (
    <div className="row carous">
      <ChevronLeft size="20" className="left-arrow" onClick={prevSlide} />
      <ChevronRight size="20" className="right-arrow" onClick={nextSlide} />
      {directory}
      <CarouselIndicators items={rentals} activeIndex={current} onClickHandler={goToIndex} className="indicator" />
    </div>
  );
}

export default Rentals;
