import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "./../../Global";
import axios from "axios";

export default class HospitalDetalles extends Component {
  buscarHospital = () => {
    var request = "webresources/hospitales/" + this.props.idhospital;
    var url = Global.urlhospitales + request;
    axios.get(url).then((res) => {
      this.setState({
        hospital: res.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.buscarHospital();
  };
  state = {
    hospital: {},
    status: false,
  };
  render() {
    return (
      <div>
        <h1>Detalles Hospital</h1>
        {this.state.status == true && (
          <React.Fragment>
            <NavLink to="/">Volver al listado</NavLink>
            <h1>Id: {this.state.hospital.idhospital}</h1>
            <h1>Nombre: {this.state.hospital.nombre}</h1>
            <h1>Direccion: {this.state.hospital.direccion}</h1>
            <h1>Telefono: {this.state.hospital.telefono}</h1>
            <h1>Camas: {this.state.hospital.camas}</h1>
            <NavLink
              to={
                "/update/" +
                this.state.hospital.idhospital +
                "/" +
                this.state.hospital.nombre +
                "/" +
                this.state.hospital.direccion +
                "/" +
                this.state.hospital.telefono +
                "/" +
                this.state.hospital.camas
              }
              className="btn btn-warning"
            >
              Modificar
            </NavLink>
            <NavLink
              to={"/delete/" + this.state.hospital.idhospital}
              className="btn btn-danger"
            >
              {" "}
              Eliminar NavLink{" "}
            </NavLink>
          </React.Fragment>
        )}
      </div>
    );
  }
}
