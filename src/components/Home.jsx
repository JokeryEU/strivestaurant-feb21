import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import items from "../data/menu.json";
import DishComments from "./DishComments";
import NotificAlert from "./AlertNotific";
import ReservationForm from "./ReservationForm";
import Reservations from "./Reservations";

// functional components are great to work with and they can use the props
// but if we want to use the state, we need a CLASS BASED component

export default class Home extends React.Component {
  state = {
    selectedDish: items[0],
  };

  // constructor(props) {
  //     super(props)
  //     console.log('constructor invoked!')
  //     this.state = {
  //         selectedDish: null
  //     }
  // }

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6}>
            {this.state.selectedDish ? (
              <h1>{this.props.newTitle}</h1>
            ) : (
              <h1>Welcome to Strivestaurant</h1>
            )}
            {this.state.selectedDish ? (
              <p>{this.props.NewPayoff}</p>
            ) : (
              <p>The best dishes you can find on the web!</p>
            )}
            <Carousel
            // onSlide={(e) => this.setState({
            //     selectedDish: items[e]
            // })}
            >
              {items.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={item.name}
                    onClick={() =>
                      this.setState({
                        selectedDish: item,
                      })
                    }
                  />
                  <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} lg={3}>
            <Reservations h3="These are the reservations" />
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={12}>
            {!this.state.selectedDish.comments[0].rating === 5 ? (
              <ReservationForm />
            ) : (
              <NotificAlert />
            )}
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} lg={3}>
            {this.state.selectedDish.name !== "Amatriciana" && (
              <DishComments selectedDish={this.state.selectedDish} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
