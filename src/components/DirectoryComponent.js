import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import Jumbo from "./JumbotronComponent";

function RenderDirectoryItem({ tour }) {
  return (
    
      <Link to={`/tours/${tour.id}`}>
          <Card>
        <CardImg width="100%" src={tour.image} alt={tour.name} className="embed-responsive embed-responsive-16by9" />
        <CardBody>
          <CardTitle>{tour.name}</CardTitle>
          <CardText>{tour.description}</CardText>
        </CardBody>
        </Card>
      </Link>

  );
}

function Directory(props) {
  const directory = props.tours.map((tour) => {
    return (
      <div key={tour.id} className="col-md-5 m-1">
        <RenderDirectoryItem tour={tour} />
        <p>hi from Directory</p>
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
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>tours</BreadcrumbItem>
            </Breadcrumb>
            <h2>tours</h2>
            <hr />
          </div>
        </div>
        <div className="row">{directory}</div>
      </div>
    </React.Fragment>
  );
}

export default Directory;
