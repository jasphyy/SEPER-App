import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
    this.onChangePublishedYear = this.onChangePublishedYear.bind(this);
    this.onChangeDoi = this.onChangeDoi.bind(this);
    this.onChangeClaim = this.onChangeClaim.bind(this);
    this.onChangeEvidenceLevel = this.onChangeEvidenceLevel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      authors: '',
      source: '',
      published_year: '',
      doi: '',
      claim: '',
      evidence_level: '',
    };
  }

  onChangeTitle(e){
    this.setState({
      title: e.target.value
    });
  }

  onChangeAuthor(e){
    this.setState({
      authors: e.target.value
    });
  }

  onChangeSource(e){
    this.setState({
      source: e.target.value
    });
  }

  onChangePublishedYear(e){
    this.setState({
      published_year: e.target.value
    });
  }

  onChangeDoi(e){
    this.setState({
      doi: e.target.value
    });
  }

  onChangeClaim(e){
    this.setState({
      claim: e.target.value
    });
  }

  onChangeEvidenceLevel(e){
    this.setState({
      evidence_level: e.target.value
    });
  }

  componentDidMount(){
    this.setState({
      claim: ['test']
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const article = {
      title: this.state.title,
      authors: this.state.authors,
      source: this.state.source,
      published_year: this.state.published_year,
      doi: this.state.doi,
      claim: this.state.claim,
      evidence_level: this.state.evidence_level
      
    }
    console.log(article);
    
    axios.post("http://localhost:3000/api/articles/add", article)
    .then(res => console.log(res.article))
    .catch((err)  => {
      console.log("Error in submission!");
    });
    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto pb-5">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="articleTitle">Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  id="articleTitle"
                />
              </div>

              <div className="form-group">
                <label for="articleAuthors">Author/s</label>
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={this.state.authors}
                  onChange={this.onChangeAuthor}
                  id="articleAuthors"
                />
              </div>

              <div className="form-group">
                <label for="articleSource">Source</label>
                <input
                  type="text"
                  placeholder="Source"
                  name="source"
                  className="form-control"
                  value={this.state.source}
                  onChange={this.onChangeSource}
                  id="articleSource"
                />
              </div>

              <div className="form-group">
                <label for="articleYear" data-testid = "Publish Year">Publish Year</label>
                <input
                  type="text"
                  placeholder="Year Published"
                  name="published_year"
                  className="form-control"
                  value={this.state.published_year}
                  onChange={this.onChangePublishedYear}
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
                  onChange={this.onChangeDoi}
                  id="articleDOI"
                />
              </div>
              <div className="form-group">
                <label for ="articleClaim" >Claim</label>
                <select ref = "userInput" data-testid = "Claim"
                required
                className = "form-control"
                value={this.state.claim}
                onChange={this.onChangeClaim}>
                  <option value ="code quality improvement">Code Quality Improvement</option>
                  <option value ="product quality improvement">Product Quality Improvement</option>
                </select>
              </div>

              <div className="form-group">
                <label for ="articleEvidenceLevel" >Evidence Level</label>
                <select ref = "userInput" data-testid = "Evidence Level"
                required
                className = "form-control"
                value={this.state.evidence_level}
                onChange={this.onChangeEvidenceLevel}>
                  <option value ="weak support">Weak support</option>
                  <option value ="strong support">Strong support</option>
                  <option value ="weak against">Weak against</option>
                  <option value ="strong against">Strong against</option>
                </select>
              </div>

              <input data-testid = "Submit"
                type="submit"
                className="btn btn-outline-warning btn-block mt-4 pb-2"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmitForm;
