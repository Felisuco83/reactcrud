import React, { Component } from "react";
import Global from "./../../Global";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class ModificarHospital extends Component {
  idRef = React.createRef();
  nomRef = React.createRef();
  dirRef = React.createRef();
  tlfRef = React.createRef();
  camasRef = React.createRef();

  state = {
    hospital: {},
    status: false,
  };
  modificarHospital = (e) => {
    e.preventDefault();
    var hosp = {
      idhospital: parseInt(this.idRef.current.value),
      nombre: this.nomRef.current.value,
      direccion: this.dirRef.current.value,
      telefono: this.tlfRef.current.value,
      camas: this.camasRef.current.value,
    };
    var request = "webresources/hospitales/put";
    var url = Global.urlhospitales + request;
    axios.put(url, hosp).then((res) => {
      this.setState({ status: true });
    });
  };

  render() {
    if (this.state.status == true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Modificar hospital</h1>
        <form onSubmit={this.modificarHospital}>
          <label>Id: </label>
          <input
            type="number"
            ref={this.idRef}
            name="cajaid"
            defaultValue={this.props.idhospital}
            readOnly={true}
            className="form-control"
          ></input>
          <label>Nombre: </label>
          <input
            type="text"
            ref={this.nomRef}
            name="cajanombre"
            defaultValue={this.props.nombre}
            className="form-control"
          ></input>
          <label>Direccion: </label>
          <input
            type="text"
            ref={this.dirRef}
            name="cajadir"
            defaultValue={this.props.direccion}
            className="form-control"
          ></input>
          <label>Telefono: </label>
          <input
            type="text"
            ref={this.tlfRef}
            name="cajadir"
            defaultValue={this.props.telefono}
            className="form-control"
          ></input>
          <label>Camas: </label>
          <input
            type="text"
            ref={this.camasRef}
            name="cajadir"
            defaultValue={this.props.camas}
            className="form-control"
          ></input>
          <button className="btn btn-info">Modificar Hospital</button>
        </form>
      </div>
    );
  }
}
