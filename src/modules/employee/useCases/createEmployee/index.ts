import { EmployeesRepository } from "../../repositories/EmployeesRepository";
import { CreateEmployeeController } from "./CreateEmployeeController";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";

export default (): CreateEmployeeController => {
  const employeesRepository = new EmployeesRepository();

  const createEmployeeUseCase = new CreateEmployeeUseCase(employeesRepository);

  const createEmployeeController = new CreateEmployeeController(
    createEmployeeUseCase
  );

  return createEmployeeController;
};
