import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { Redirect } from "react-router-dom";

export default class EliminarHospital extends Component {
  state = { status: false };
  eliminarHospital = () => {
    var request = "webresources/hospitales/delete/" + this.props.idhospital;
    var url = Global.urlhospitales + request;
    axios.delete(url).then((res) => {
      this.setState({
        status: true,
      });
    });
  };
  render() {
    if (this.state.status) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1 style={{ color: "red" }}>
          Desea eliminar el hospital {this.props.idhospital}
        </h1>
        <button onClick={this.eliminarHospital} className="btn btn-danger">
          Eliminar
        </button>
      </div>
    );
  }
}
