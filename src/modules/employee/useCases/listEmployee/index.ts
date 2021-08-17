import { EmployeesRepository } from "../../repositories/EmployeesRepository";
import { ListEmployeeController } from "./ListEmployeesController";
import { ListEmployeeUseCase } from "./ListEmployeeUseCase";

export default (): ListEmployeeController => {
  const employeesRepository = new EmployeesRepository();

  const listEmployeeUseCase = new ListEmployeeUseCase(employeesRepository);

  const listEmployeeController = new ListEmployeeController(
    listEmployeeUseCase
  );

  return listEmployeeController;
};
