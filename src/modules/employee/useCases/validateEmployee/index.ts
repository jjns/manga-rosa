import { EmployeesRepository } from "../../repositories/EmployeesRepository";
import { ValidateEmployeeController } from "./ValidateEmployeeController";
import { ValidateEmployeeUseCase } from "./ValidateEmployeeUseCase";

export default (): ValidateEmployeeController => {
  const employeesRepository = new EmployeesRepository();

  const validateEmployeeUseCase = new ValidateEmployeeUseCase(
    employeesRepository
  );

  const validateEmployeeController = new ValidateEmployeeController(
    validateEmployeeUseCase
  );

  return validateEmployeeController;
};
