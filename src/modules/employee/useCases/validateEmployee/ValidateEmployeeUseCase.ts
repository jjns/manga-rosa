import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";

interface IRequest {
  id: string;
  status: boolean;
}

class ValidateEmployeeUseCase {
  constructor(private employeesRepository: IEmployeesRepository) {}

  async execute({ id, status }: IRequest): Promise<void> {
    await this.employeesRepository.validateById(id, status);
  }
}

export { ValidateEmployeeUseCase };
