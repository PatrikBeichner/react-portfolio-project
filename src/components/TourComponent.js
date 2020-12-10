import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Label, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
// import { Control, LocalForm, Errors } from "react-redux-form";

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);

function RenderTour({ tour }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={tour.image} alt={tour.name} className="embed-responsive embed-responsive-16by9"/>
        <CardBody>
          <CardText>{tour.description}</CardText>
          <p>hi2</p>
        </CardBody>
      </Card>
    </div>
  );
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
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/tours">tours</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.tour.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.tour.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderTour tour={props.tour} />
          {/* <RenderComments comments={props.comments} /> */}
        </div>
      </div>
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
