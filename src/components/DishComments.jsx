import { ListGroup } from "react-bootstrap";
import react, { Component } from "react";

export default class DishComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ comment: !this.state.comment });
    }, 1000);
  }

  render() {
    return (
      <>
        {!this.props.selectedDish && <h3>Nothing yet</h3>}
        {this.props.selectedDish && (
          <ListGroup>
            <h2>Comments for {this.props.selectedDish.name}</h2>
            {this.props.selectedDish.comments.map((c) => (
              <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </>
    );
  }
}

// mapping props.selectedDish.comments
