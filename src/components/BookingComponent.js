import React, { Component } from "react";
import {
  Button,
  Label,
  Form,
  FormGroup,
  Input,
  Col,
  Row
} from "reactstrap";


// function DateType({book}) {
//     return (
//     <FormGroup row>
//         <Label htmlFor="date" md={2}>
//         date
//         </Label>
//         <Col md={10}>
//         <Input
//             type="date"
//             id="date"
//             name="date"
//             rows="12"
//             value={this.state.date}
//             onChange={this.handleInputChange}></Input>
//         </Col>
//     </FormGroup>
//     );
// }
class BookingForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        bookName: this.props.book.name,
        name: "",
        phoneNum: "",
        email: "",
        contactType: "By Phone",
        guests: "",
        date: "",
        dateIn: "",
        dateOut: "",
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
        const bookType = this.props.book.type;
        const renderDate = (bookType) => {
            if (bookType === 'tour') {
                console.log("its a tour")
        } else {
            console.log("it's a rental")
            // //   button = <LoginButton onClick={this.handleLoginClick} />;
            };
        }
        // const bookType = this.props.book.type;
        // let date;
        // if (bookType === 'tour') {
        //     console.log("its a tour")
        // //   button = <LogoutButton onClick={this.handleLogoutClick} />;
        // } else {
        //     console.log("it's a rental")
        // //   button = <LoginButton onClick={this.handleLoginClick} />;
        // }

        var curr = new Date();
        curr.setDate(curr.getDate());
        var date = curr.toISOString().substr(0,10);

        var cur = new Date();
        cur.setDate(cur.getDate() + 1);
        var dateMax = cur.toISOString().substr(0,10);

      return (
        <React.Fragment>
          <div className="row row-content">
            <div className="col-md-12">
              <h2 className={this.props.book.cname}>book {this.props.book.type}</h2>
              <hr />
            </div>
            <div className="col-md-12">
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
                    {this.props.book.type === "tour" &&
                        <Row className="form-group" >
                            <Label htmlFor="date" className="col-md-2">
                                date
                            </Label>
                            <Col >
                                <Input
                                    type="date"
                                    id="date"
                                    name="date"
                                    min={date}
                                    rows="12"
                                    value={this.state.date}
                                    onChange={this.handleInputChange}
                                    className="col-md-12"
                                >
                                </Input>
                            </Col>
                        </Row>
                    }
                    {this.props.book.type === "rental" &&
                        <React.Fragment>
                            <Row className="form-group" >
                                <Label htmlFor="dateIn" className="col-md-2">
                                    check-in
                                </Label>
                                <Col>
                                    <Input
                                        type="date"
                                        id="dateIn"
                                        name="dateIn"
                                        min={date}

                                        value={this.state.dateIn}
                                        onChange={this.handleInputChange}
                                        className="col-md-12"
                                    >
                                    </Input>
                                </Col>
                                </Row>
                            <Row className="form-group" >
                                <Label htmlFor="dateOut" className="col-md-2">
                                    check-out
                                </Label>
                                <Col>
                                    <Input
                                        type="date"
                                        id="dateOut"
                                        name="dateOut"
                                        rows="12"
                                        min={dateMax}

                                        value={this.state.dateOut}
                                        onChange={this.handleInputChange}
                                        className="col-md-12"
                                    >
                                    </Input>
                                </Col>
                            </Row>
                        </React.Fragment>
                    }
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

export default BookingForm;