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
// import { Control, LocalForm, Errors } from "react-redux-form";

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);

function RenderTour({ tour }) {
  return (
    <div className="col m-1">
      <Card>
        <CardImg top src={tour.image} alt={tour.name} className="embed-responsive embed-responsive-16by9" />
        <CardBody>
          <CardText className={tour.cname}>{tour.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

class BookingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tourName: this.props.tour.name,
      name: "",
      phoneNum: "",
      email: "",
      contactType: "By Phone",
      guests: "",
      touched: {
        name: false,
        phoneNum: false,
        email: false,
        guests: false,
      }
    };

    this.baseState = this.state ///>>>>>>>>> note this one.

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//   validate(name, phoneNum, email, guests) {

//     const errors = {
//         name: '',
//         phoneNum: '',
//         email: '',
//         guests: ''
//     };

//     if (this.state.touched.name) {
//         if (name.length < 2) {
//             errors.name = 'name must be at least 2 characters.';
//         } else if (name.length > 25) {
//             errors.name = 'name must be 15 or less characters.';
//         }
//     }

//     const reg = /^\d+$/;
//     if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
//         errors.phoneNum = 'The phone number should contain only numbers.';
//     }

//     if (this.state.touched.email && !email.includes('@')) {
//         errors.email = 'Email should contain a @';
//     }
//     if (this.state.touched.lastName) {
//       if (lastName.length < 2) {
//           errors.lastName = 'Last name must be at least 2 characters.';
//       } else if (lastName.length > 15) {
//           errors.lastName = 'Last name must be 15 or less characters.';
//       }
//   }

//     return errors;
// }

// handleBlur = (field) => () => {
//     this.setState({
//         touched: {...this.state.touched, [field]: true}
//     });
// }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    // const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

 
  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Current state is: " + JSON.stringify(this.state));
    event.preventDefault();
    
  }

  resetForm = () => {
    this.setState(this.baseState)
  }
 
  render() {
    return (
      <React.Fragment>
        <div className="row row-content">
          <div className="col-md-10">
            <h2 className={this.props.tour.cname}>book tour</h2>
            <hr />
          </div>
          <div className="col-md-10">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="name" md={2}>
                  name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="phoneNum" md={2}>
                  phone
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="phoneNum"
                    name="phoneNum"
                    placeholder="phone number"
                    value={this.state.phoneNum}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  email
                </Label>
                <Col md={10}>
                  <Input type="email" id="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="contactType" md={2}>
                  contact preference
                </Label>
                <Col md={10}>
                  <Input type="select" name="contactType" id="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                    <option>by phone</option>
                    <option>by email</option>
                    <option>by text</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="guests" md={2}>
                  guests
                </Label>
                <Col md={10}>
                  <Input
                    type="number"
                    min="1"
                    max="12"
                    id="guests"
                    name="guests"
                    rows="12"
                    value={this.state.guests}
                    onChange={this.handleInputChange}></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="dark">
                    submit booking
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// function RenderComments({ comments }) {
//   if (comments) {
//     return (
//       <div className="col-md-5 m-1">
//         <h4>Comments</h4>
//         {comments.map((comment) => {
//           return (
//             <div key={comment.id}>
//               <div>{comment.text}</div>
//               <div>
//                 --{comment.author},{" "}
//                 {new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(new Date(Date.parse(comment.date)))}
//               </div>
//             </div>
//           );
//         })}
//         <CommentForm />
//         {/* <CommentForm /> */}
//       </div>
//     );
//   }
//   return <div />;
// }

function TourInfo(props) {
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
                <BreadcrumbItem active>{props.tour.name}</BreadcrumbItem>
              </Breadcrumb>
              <h2 className={props.tour.cname}>{props.tour.name}</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            
            <RenderTour tour={props.tour} />
            
            <div className="col-6">
            <BookingForm tour={props.tour}/>
            </div>
            {/* <RenderComments comments={props.comments} /> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
  return <div />;
}

// class CommentForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isModalOpen: false,
//       rating: "",
//       author: "",
//       text: "",
//       submitted: false,
//       touched: {
//         rating: false,
//         author: false,
//         text: false,
//       },
//     };

//     this.toggleModal = this.toggleModal.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(values) {
//     console.log("Current state is: " + JSON.stringify(values));
//     alert("Current state is: " + JSON.stringify(values));
//   }

//   toggleModal() {
//     this.setState({
//       isModalOpen: !this.state.isModalOpen,
//     });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Button outline onClick={this.toggleModal}>
//           <i className=" fa fa-pencil fa-lg" />
//           Submit Comment
//         </Button>
//         <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//           <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
//           <ModalBody>
//             <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
//               <div className="form-group">
//                 <Label htmlFor="rating">Rating</Label>
//                 <Control.select
//                   model=".rating"
//                   type="number"
//                   id="rating"
//                   name="rating"
//                   className="form-control"
//                   validators={{
//                     isNumber,
//                   }}>
//                   <option value="">Select</option>
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                   <option value="5">5</option>
//                 </Control.select>
//                 <Errors
//                   className="text-danger"
//                   model=".rating"
//                   show="touched"
//                   component="div"
//                   messages={{
//                     isNumber: "Please select a rating",
//                   }}
//                 />
//               </div>
//               <div className="form-group">
//                 <Label htmlFor="author">Your Name</Label>
//                 <Control.text
//                   model=".author"
//                   id="author"
//                   name="author"
//                   placeholder="Your Name"
//                   className="form-control"
//                   validators={{
//                     minLength: minLength(2),
//                     maxLength: maxLength(15),
//                   }}
//                 />
//                 <Errors
//                   className="text-danger"
//                   model=".author"
//                   show="touched"
//                   component="div"
//                   messages={{
//                     minLength: "Must be at least 2 characters",
//                     maxLength: "Must be 15 characters or less",
//                   }}
//                 />
//               </div>
//               <div className="form-group">
//                 <Label htmlFor="comment">Comment</Label>
//                 <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" />
//               </div>
//               <Button type="submit" color="primary">
//                 Submit
//               </Button>
//             </LocalForm>
//           </ModalBody>
//         </Modal>
//       </React.Fragment>
//     );
//   }
// }

export default TourInfo;
