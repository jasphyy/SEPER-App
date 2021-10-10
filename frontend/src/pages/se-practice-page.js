
import Table from "../components/evidencetable.js";
import React, { Component } from "react";
import axios from "axios";
import Columns from "../components/column.js";

class SEPracticePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios
      .get("https://seper-app-g2.herokuapp.com/api/articles/")
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
 
  render() {
    return (
      <div class="container pt-3 border border-dark border-top-0 rounded-bottom bg-light">
        <h2>Select SE Practice</h2>
        <hr></hr>
              
                 <Table
                  data = {this.state.data}
                  columns={Columns}
                 />
        
      </div>
    );
  }
}

export default SEPracticePage;
