import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from "reactstrap";
import { Link } from "react-router-dom";
import Jumbo from "./JumbotronComponent";

function Rentals(props) {
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
      </div>
    </React.Fragment>
  );
}

export default Rentals;
