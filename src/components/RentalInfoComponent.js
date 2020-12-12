import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import Jumbo from "./JumbotronComponent";
import BookingForm from './BookingComponent'


function RenderRental({ rental }) {
    return (
      <div className="col m-1">
        
        
        <Card>
          <CardImg top src={rental.image} alt={rental.name} className="embed-responsive embed-responsive-16by9" />
          <CardBody>
            <CardText className={rental.cname}>{rental.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  function RentalInfo(props) {
    if (props.rental) {
      return (
        <React.Fragment>
          <Jumbo />
          <div className="container mb-5">
            <div className="row">
              <div className="col">
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to="/rentals">rentals</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>{props.rental.name} {props.rental.type}</BreadcrumbItem>
                </Breadcrumb>
                <h2 className={props.rental.cname}>{props.rental.name}</h2>
                <hr />
              </div>
            </div>
            <div className="row">
              
              <RenderRental rental={props.rental} />
              <BookingForm book={props.rental} />
              <div className="col-6">
              {/* <BookingForm tour={props.tour}/> */}
              </div>
              {/* <RenderComments comments={props.comments} /> */}
            </div>
          </div>
        </React.Fragment>
      );
    }
    return <div />;
  }
  
  
  
  export default RentalInfo;