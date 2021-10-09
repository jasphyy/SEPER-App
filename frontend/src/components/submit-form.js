import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class SubmitForm extends Component {


  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      source: "",
      published_date: "",
      doi: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      source: this.state.source,
      published_date: this.state.published_date,
      doi: this.state.doi,
    };

    axios
      .post("http://localhost:3000/api/articles/add", data)
      .then((res) => {
        this.setState({
          title: "",
          author: "",
          source: "",
          published_date: "",
          doi: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in Submission!");
      });
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto pb-5">
            <form noValidate onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="articleTitle">Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChange}
                  id="articleTitle"
                />
              </div>

              <div class="form-group">
                <label for="articleAuthors">Author/s</label>
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={this.state.author}
                  onChange={this.onChange}
                  id="articleAuthors"
                />
              </div>

              <div class="form-group">
                <label for="articleSource">Source</label>
                <input
                  type="text"
                  placeholder="Source"
                  name="source"
                  className="form-control"
                  value={this.state.source}
                  onChange={this.onChange}
                  id="articleSource"
                />
              </div>

              <div class="form-group">
                <label for="articleYear">Publish Year</label>
                <input
                  type="date"
                  placeholder="published_date"
                  name="published_date"
                  className="form-control"
                  value={this.state.published_date}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label for="articleDOI">DOI</label>
                <input
                  type="text"
                  placeholder="DOI"
                  name="doi"
                  className="form-control"
                  value={this.state.doi}
                  onChange={this.onChange}
                  id="articleDOI"
                />
              </div>

              <input
                type="submit"
                className="btn btn-outline-warning btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmitForm;
