import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import { Container, Col, Row } from "reactstrap";
import Header from "./HeaderComponent";

const par1 = "/assets/images/cliff-fjord2.jpg";
const par2 = "/assets/images/fjord-ice.jpg";
const par3 = "/assets/images/coast.jpg";

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="mb-5">
      <Header />
      <Parallax bgImage={par1} strength={200}>
        <Container style={{ height: "55rem" }}>
          <div>
            <Row className="h-600">
              <Col className="testTitle md-1">
                <h1 className="title ">
                  REISE <span className="font-weight-bold">NORGE</span>
                </h1>
                <h5 className="subtitle ">personalized journeys through norway</h5>
              </Col>
              <div className="scroll">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Row>
          </div>
        </Container>
      </Parallax>
      <div className="container">
        <div className="row row-content align-items-center">
          <div className="col-sm-4 order-sm-first col-md-3">
            <h2 className="text-sm-right">the northern route</h2>
          </div>
          <div className="col py-5">
            <div className="media">
              <div className="media-body align-self-center">
                <h3>find the real norway</h3>
                <p className="d-none d-sm-block hometext">
                  Löksås ipsum nu tiden genom färdväg strand oss trevnadens, att fram blev kom tiden både när, för i det dunge genom vad blivit.
                  Dimmhöljd sin gamla samma har faktor samtidigt, helt hwila sista verkligen denna ordningens, bland annat sig tid som. Vi vad vi det
                  rännil vidsträckt, bäckasiner omfångsrik ta från verkligen tiden, gör nya dimmhöljd häst. Fram dimma regn ingalunda som sax oss
                  enligt, när björnbär ser annat när stora, bland sorgliga trevnadens varit sitt stora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Parallax bgImage={par2} strength={300}>
        <div style={{ height: "55rem" }}></div>
      </Parallax>
      <div className="container">
        <div className="row row-content align-items-center">
          <div className="col-sm-4 order-sm-last col-md-3">
            <h2 className="text-sm-right">hvor vil du gå?</h2>
          </div>
          <div className="col py-5">
            <div className="media">
              <div className="media-body align-self-center">
                <h3>trips planned by locals</h3>
                <p className="d-none d-sm-block hometext">
                  Ordningens sorgliga själv hav blivit mjuka sorgliga vad ingalunda samtidigt, precis bland göras är dimma ingalunda i år, omfångsrik
                  tiden att gamla blivit vi kanske fram. Faktor upprätthållande kunde bra björnbär jäst miljoner jäst ska sorgliga, jäst både sitt på
                  nya vemod där dimmhöljd. Därmed där så brunsås sin stig omfångsrik nu, faktor icke häst från sig precis träutensilierna, vad har lax
                  stora ska kan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Parallax bgImage={par3} strength={300}>
        <div style={{ height: "55rem" }}></div>
      </Parallax>
    </div>
  );
}

export default Home;
