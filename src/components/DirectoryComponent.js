import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import Jumbo from "./JumbotronComponent";

function RenderDirectoryItem({ tour }) {
  return (
        <div class="card mb-4 tourCard">
              <div class="embed-responsive embed-responsive-16by9">
                 <img alt="Card image cap" class="card-img-top embed-responsive-item" src={tour.image} />
              </div>
              <div class="card-block">
                <h4 class="card-title">{tour.name}</h4>
                <p class="card-text">{tour.description}</p>
                <Link to={`/tours/${tour.id}`}>
                  <a href="#" class="btn btn-dark outline" id="bookForest">book</a>
                </Link>
              </div>
        </div>

  );
}

function Directory(props) {
  const directory = props.tours.map((tour) => {
    return (
      <div key={tour.id} className="col-md-6 ">
        <RenderDirectoryItem tour={tour} />
        {/* <p>hi from Directory</p> */}
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
