import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import About from "./AboutComponent";
import TourInfo from "./TourComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Rentals from "./RentalsComponent";
import Tester from "./TestComponent";
// import Contact from './ContactComponent'
import { Switch, Route, Redirect } from "react-router-dom";
import { TOURS } from "../shared/tours";
import { RENTALS } from "../shared/rentals";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: TOURS,
      rentals: RENTALS,
    };
  }

  render() {
    // const HomePage = () => {
    //     return (
    //         <Home
    //             campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
    //             promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
    //             partner={this.state.partners.filter(partner => partner.featured)[0]}
    //         />
    //     );
    // }

    const TourWithId = ({ match }) => {
      return (
        <TourInfo
          tour={this.state.tours.filter((tour) => tour.id === +match.params.tourId)[0]}
          // comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
        />
      );
    };

    return (
      <div>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/test" render={() => <Tester />} />

          {/* <Route path='/home' component={Home} />  */}
          <Route exact path="/tours" render={() => <Directory tours={this.state.tours} />} />
          <Route path="/tours/:tourId" component={TourWithId} />
          <Route exact path="/aboutus" render={() => <About />} />
          {/* <Route exact path='/aboutus' render={() => <About partners={this.state.partners} /> }  /> */}
          <Route exact path="/rentals" component={Rentals} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
