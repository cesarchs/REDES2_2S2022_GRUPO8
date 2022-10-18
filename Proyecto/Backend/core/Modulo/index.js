import express from 'express';
import { ModuleModels } from './Models/module.model.js';
import { ModuloRoutes } from './Routes/module.route.js';


export const moduloModule = () =>{
  const model = new ModuleModels();
  const route = new ModuloRoutes(express, model).router;

  return route;
}