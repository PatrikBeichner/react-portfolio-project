import React, { useEffect } from 'react';
import { Card, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Jumbo from './JumbotronComponent';
import BookingForm from './BookingComponent';

function RenderTour({ tour }) {
  return (
    <div className="col m-1">
      <Card>
        <div class="embed-responsive embed-responsive-16by9">
          <img alt={tour.name} class="card-img-top embed-responsive-item" src={tour.image} />
        </div>
        {/* <CardImg top src={tour.image} alt={tour.name} className="embed-responsive embed-responsive-16by9" /> */}
        <CardBody>
          <CardText className={tour.cname}>{tour.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function TourInfo(props) {
  useEffect(() => {
    window.scrollTo(0, 250);
  }, []);

  if (props.tour) {
    return (
      <React.Fragment>
        <Jumbo />
        <div className="container mb-5">
          <div className="row">
            <div className="col">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/tours">tours</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                  {props.tour.name} {props.tour.type}
                </BreadcrumbItem>
              </Breadcrumb>
              <h2 className={props.tour.cname}>{props.tour.name}</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <RenderTour tour={props.tour} />

            <div className="col-6">
              <BookingForm book={props.tour} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  return <div />;
}

export default TourInfo;
