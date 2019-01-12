import React, {Component} from 'react';
import Button from '../Button';
import {getRandomDog} from '../../Utils/API';

class Discover extends Component {

  state = {
    dogPhoto: "",
    dogMatchCount: 0
  }

  componentDidMount() {
    this.getDogPicture();
  }

  // get a new random dog
  getDogPicture = () => {
    getRandomDog().then(({data}) => {
      console.log(data);
      this.setState({dogPhoto: data.message})
    }).catch(err => console.log(err));
  }

  handleUpvote = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 2) {
      // you match with a dog
      this.setState({
        dogMatchCount: this.state.dogMatchCount + 1
      }, () => this.getDogPicture());
    } else {
      this.getDogPicture();
    }

  }

  handleDownvote = () => {
    this.getDogPicture();
  }

  render() {
    return (
      <div className="container text-center">
        <h1>Vote on your doggos, make a new friend!</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 text-center">
            <img className="img-fluid img-thumbnail" src={this.state.dogPhoto} alt="Doggo"/>
          
            <h3>You've matched with {this.state.dogMatchCount} Doggos</h3>

            <div className="d-flex justify-content-between">
              <Button 
                className="btn btn-success btn-lg" 
                onClick={this.handleUpvote}>
                <i className="fa fa-thumbs-up"></i>
                Vote Yes
              </Button>

              <Button className="btn btn-danger btn-lg" onClick={this.handleDownvote}>
                <i className="fa fa-thumbs-down"></i>
                Vote No</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Discover;