import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import HospitalDetalles from "./CrudHospitales/HospitalDetalles";
import Hospitales from "./CrudHospitales/Hospitales";
import InsertarHospital from "./CrudHospitales/InsertarHospital";
import ModificarHospital from "./CrudHospitales/ModificarHospital";
import EliminarHospital from "./CrudHospitales/EliminarHospital";
import MenuHospitales from "./CrudHospitales/MenuHospitales";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuHospitales />
        <Switch>
          <Route
            exact
            path="/details/:idhospital"
            render={(props) => {
              var idhospital = props.match.params.idhospital;
              console.log("Id " + idhospital);
              return <HospitalDetalles idhospital={idhospital} />;
            }}
          />
          <Route exact path="/" component={Hospitales} />
          <Route exact path="/create" component={InsertarHospital} />
          <Route
            exact
            path="/update/:id/:nombre/:direccion/:telefono/:camas"
            render={(props) => {
              var id = props.match.params.id;
              var nom = props.match.params.nombre;
              var dir = props.match.params.direccion;
              var tlf = props.match.params.telefono;
              var camas = props.match.params.camas;

              return (
                <ModificarHospital
                  idhospital={id}
                  nombre={nom}
                  direccion={dir}
                  telefono={tlf}
                  camas={camas}
                />
              );
            }}
          />
          <Route
            exact
            path="/delete/:id"
            render={(props) => {
              var id = props.match.params.id;
              return <EliminarHospital idhospital={id} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
