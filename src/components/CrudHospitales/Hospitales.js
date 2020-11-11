import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { NavLink } from "react-router-dom";

export default class Hospitales extends Component {
  state = {
    hospitales: [],
    status: false,
  };
  componentDidMount = () => {
    this.cargarHospitales();
  };
  cargarHospitales = () => {
    var url = Global.urlhospitales + "webresources/hospitales";
    axios.get(url).then((res) => {
      this.setState({
        hospitales: res.data,
        status: true,
      });
    });
  };
  render() {
    return (
      <div>
        <h1>Hospitales</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id hospital</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Camas</th>
            </tr>
          </thead>
          <tbody>
            {this.state.status == true &&
              this.state.hospitales.map((hosp, index) => {
                return (
                  <tr key={index}>
                    <td>{hosp.idhospital}</td>
                    <td>{hosp.nombre}</td>
                    <td>{hosp.direccion}</td>
                    <td>{hosp.telefono}</td>
                    <td>{hosp.camas}</td>
                    <td>
                      <NavLink to={"/details/" + hosp.idhospital}>
                        Detalles
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
