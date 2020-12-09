import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from "reactstrap";
import { Link } from "react-router-dom";
import Jumbo from "./JumbotronComponent";

function About(props) {
  //   const partners = props.partners.map((partner) => {
  //     return (
  //       <Media tag="li" key={partner.id}>
  //         <RenderPartner partner={partner} />
  //       </Media>
  //     );
  //   });

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
            <h2>about us</h2>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-sm-6">
            <h3>norway, by norwegians</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et pharetra lectus, a malesuada lacus. Vivamus suscipit neque at rhoncus
              eleifend. Vestibulum et dolor sed urna rhoncus convallis. Ut euismod massa lobortis commodo rhoncus. Praesent placerat, sapien eget
              mollis commodo, justo neque ultrices felis, ac sodales elit elit at ante. Quisque quis molestie mi. Ut laoreet ligula ut dictum sodales.
              Ut pellentesque, diam sit amet dapibus pulvinar, turpis ex ultrices massa, eu ornare augue sem in neque.
            </p>
            <p>
              Donec pharetra facilisis massa. Sed finibus orci elit, nec fringilla ex convallis ac. Aliquam et mi nulla. Nunc eu justo at libero
              ullamcorper volutpat a a orci. In accumsan, sem sed accumsan vulputate, neque elit tempus justo, eget porta sem nisi vel sapien.
              Praesent ut rhoncus arcu. Curabitur a arcu aliquam, aliquet massa at, blandit erat. Vestibulum facilisis, neque eu laoreet ultricies,
              metus ante luctus risus, non suscipit mauris lectus ut tortor. Etiam nec porttitor massa. Sed ut tristique velit. Sed imperdiet nisl
              vitae ligula rutrum egestas non vitae arcu. Aliquam convallis elit nec dictum iaculis. Donec pellentesque elit mi, vestibulum aliquam
              nunc sollicitudin id. Nam tempor velit ut eros bibendum, id aliquam est semper. Nam ut scelerisque quam. Maecenas et interdum ex.
            </p>
          </div>
          <div className="col-sm-6">
            <div>
              <img src="/assets/images/tallFlag.jpg" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function RenderPartner({ partner }) {
  if (partner) {
    return (
      <React.Fragment>
        <Media object src={partner.image} alt={partner.name} width="150" />
        <Media body className="ml-5 mb-4">
          <Media heading>{partner.name}</Media>
          {partner.description}
        </Media>
      </React.Fragment>
    );
  } else {
    return <div />;
  }
}

export default About;
