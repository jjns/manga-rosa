import { Employee } from "../../entities/Employee";
import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";

class ListEmployeeUseCase {
  constructor(private employeesRepository: IEmployeesRepository) {}

  async execute(): Promise<Employee[]> {
    const employees = await this.employeesRepository.list();

    return employees;
  }
}

export { ListEmployeeUseCase };
