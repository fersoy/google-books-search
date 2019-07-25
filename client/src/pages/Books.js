import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "", image: "", link: "" })
      )
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        description: this.state.synopsis,
        image: this.state.image,
        link: this.state.link
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>


        <div>
          <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <h4>Search for and Save Books of Interest</h4>
          </Jumbotron>
        </div>
        <div>
          <form>
            <div id="searchBar">
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Book name... (required)"
              />
            </div>


            <FormBtn
              // disabled={!(this.state.author && this.state.title)}
              onClick={this.handleFormSubmit}
            >
              Search
              </FormBtn>
          </form>
        </div>

      </div >
    );
  }
}

export default Books;
