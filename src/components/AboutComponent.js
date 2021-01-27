import React, { Component } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Jumbo from './JumbotronComponent';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(event) {
    alert(`Name: ${this.name.value} Comment: ${this.comment.value}`);
    this.toggleModal();
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <Jumbo />
        <div className="container mb-5">
          <div className="row">
            <div className="col">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/home">home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>about us</BreadcrumbItem>
              </Breadcrumb>
              <h2>about us</h2>
              <hr />
            </div>
          </div>
          <div className="row row-content">
            <div className="col-sm-6">
              <h3>norway, by norwegians</h3>
              <p>
                Löksås ipsum nu tiden genom färdväg strand oss trevnadens, att fram blev kom tiden både när, för i det dunge
                genom vad blivit. Dimmhöljd sin gamla samma har faktor samtidigt, helt hwila sista verkligen denna
                ordningens, bland annat sig tid som. Vi vad vi det rännil vidsträckt, bäckasiner omfångsrik ta från verkligen
                tiden, gör nya dimmhöljd häst. Fram dimma regn ingalunda som sax oss enligt, när björnbär ser annat när
                stora, bland sorgliga trevnadens varit sitt stora.
              </p>
              <p>
                Och göras nya sjö både genom därmed när det, gamla som ordningens kom dag tre kanske, mjuka hans sig sällan
                ta hela sin. På varit nya verkligen nya vad för enligt vad del, är nya har för sax dock sjö blivit, hwila
                faktor där tre annan bland blev vemod. Denna trevnadens nu sjö verkligen blivit stora åker söka hela att
                icke, faktor därmed som det björnbär dock det hela dimmhöljd enligt, stig när dag ännu där sin bra gamla
                groda hela.
              </p>
              <p>
                Upprätthållande omfångsrik smultron hav hwila se vi sista åker, precis som hav miljoner fram och att, sällan
                kunde bland varit vid dock trevnadens. Upprätthållande gamla del groda ta om dunge göras dock, smultron regn
                ordningens ser gör sitt nya helt ingalunda, år tid brunsås hela år upprätthållande tid. Ta hans strand så
                både sällan stora i, varit därmed blivit bra sjö blivit mjuka, blev från både varit hans det.
              </p>
            </div>

            <div className="col-sm-6">
              <div>
                <img src="/assets/images/tallFlag.jpg" class="img-fluid" alt="norwegian flag and a sunset" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>have a question?</p>
              <span className="d-inline-block">
                <Button className="ml-15" outline onClick={this.toggleModal}>
                  contact us
                </Button>
              </span>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">name</Label>
                <Input type="text" id="name" name="name" innerRef={(input) => (this.name = input)} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="comment">? / .</Label>
                <Input type="textarea" id="comment" name="comment" innerRef={(input) => (this.comment = input)} />
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default About;
