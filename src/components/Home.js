import React from 'react';
import { Grid, Row, Col, Thumbnail, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Home extends React.Component {

  render() {
    return(
      <div>
        <div className="homeContainer">
          <div className="header"/>
        </div>

        <Grid bsClass="container-fluid homeGrid">
          <Row>
            <div className="aboutDiv">
              <Col xs={12} md={8} lg={8} lgOffset={2} mdOffset={2}>
                <h2 className="aboutHeader">About Bozeman Pet Project</h2>
                <br />
                <p>
                  Engage with your local shelter!
                  Pets in your community need help, and Bozeman Pet Project
                  allows to you stay involved. Search for pets by species, save your favorites,
                  contribute to their stay, and keep up with their progress.
                </p>
                <br />
                <hr />
              </Col>
            </div>
          </Row>
          <Row>
            <div className="aboutDiv">
              <Col xs={12} md={4} lg={4}>
                <Glyphicon glyph="envelope" className="aboutGlyphicon" />
                <h2 className="aboutHeader">Subscribe</h2>
                <p>
                  Be the first to know.  As soon as your shelter takes in a new dog
                  or cat, you&apos;ll be notified that they are available to be adopted.
                </p>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <Glyphicon glyph="heart" className="aboutGlyphicon" />
                <h2 className="aboutHeader">Save</h2>
                <p>
                  Track your favorite pets by saving them to your favorites.
                  You&apos;ll get updates on any sponsorships they receive as
                  well as any changes to their adoption status.
                </p>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <Glyphicon glyph="usd" className="aboutGlyphicon" />
                <h2 className="aboutHeader">Sponsor</h2>
                <p>
                  Most shelters spend an average of $500 per animal they house.
                  Help fund your favorite animals by directly contributing to their stay.
                </p>
              </Col>
            </div>
          </Row>
          <Row bsClass="browsePetsRow row">
            <div>
              <Col xs={12} md={6} lg={6}>
                <Link to={{pathname: '/DogDisplay'}}>
                  <Thumbnail className="homediv1" src="../images/mainpuppy.jpg" alt="242x200"/>
                </Link>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Link to={{pathname: '/CatDisplay'}}>
                  <Thumbnail className="homediv2" src="../images/maincat.jpg" alt="242x200"/>
                </Link>
              </Col>
            </div>
          </Row>
          <Row>
            <div className="aboutDiv">
              <Col xs={12} md={8} lg={8} lgOffset={2} mdOffset={2}>
                <br />
                <br />
                <br />
                <h2 className="aboutHeader">&copy;&nbsp;BPP</h2>
              </Col>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}
