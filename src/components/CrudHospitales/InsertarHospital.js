import axios from "axios";
import React, { Component } from "react";
import Global from "../../Global";
import { Redirect } from "react-router-dom";

export default class InsertarHospital extends Component {
  idRef = React.createRef();
  nomRef = React.createRef();
  dirRef = React.createRef();
  tlfRef = React.createRef();
  camasRef = React.createRef();

  state = {
    mensaje: "",
    status: false,
  };

  nuevoHospital = (e) => {
    e.preventDefault();
    var id = parseInt(this.idRef.current.value);
    var nom = this.nomRef.current.value;
    var dir = this.dirRef.current.value;
    var tlf = this.tlfRef.current.value;
    var camas = this.camasRef.current.value;
    var hosp = {
      idhospital: id,
      nombre: nom,
      direccion: dir,
      telefono: tlf,
      camas: camas,
    };
    var request = "webresources/hospitales/post";
    var url = Global.urlhospitales + request;
    axios.post(url, hosp).then((res) => {
      this.setState({
        mensaje: "Nuevo hospital " + id,
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
        <h1>Nuevo departamento</h1>
        <form onSubmit={this.nuevoHospital}>
          <label>Id: </label>
          <input
            type="number"
            name="cajaid"
            className="form-control"
            ref={this.idRef}
          ></input>
          <label>Nombre: </label>
          <input
            type="text"
            name="cajanombre"
            className="form-control"
            ref={this.nomRef}
          ></input>
          <label>Dirección: </label>
          <input
            type="text"
            name="cajalocalidad"
            className="form-control"
            ref={this.dirRef}
          ></input>
          <label>Teléfono: </label>
          <input
            type="text"
            name="cajatlf"
            className="form-control"
            ref={this.tlfRef}
          ></input>
          <label>Camas: </label>
          <input
            type="text"
            name="cajacamas"
            className="form-control"
            ref={this.camasRef}
          ></input>
          <button className="btn btn-success">Insertar hospital</button>
        </form>
      </div>
    );
  }
}
