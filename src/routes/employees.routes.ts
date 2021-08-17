import { Router } from "express";

import createEmployeeController from "../modules/employee/useCases/createEmployee";
import listEmployeeController from "../modules/employee/useCases/listEmployee";
import validateEmployeeController from "../modules/employee/useCases/validateEmployee";

const employeesRouter = Router();

employeesRouter.get("/registros", (request, response) => {
  return listEmployeeController().handle(request, response);
});

employeesRouter.post("/registrar", (request, response) => {
  return createEmployeeController().handle(request, response);
});

employeesRouter.patch("/:id/validar", (request, response) => {
  return validateEmployeeController().handle(request, response);
});

export { employeesRouter };
