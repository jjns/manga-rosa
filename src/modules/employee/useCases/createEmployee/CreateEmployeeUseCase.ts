import { AppError } from "../../../../shared/errors/AppError";
import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";

interface IRequest {
  name: string;
  email: string;
  cpf: string;
  celphone?: string;
  knowledge: string[];
}

class CreateEmployeeUseCase {
  constructor(private employeesRepository: IEmployeesRepository) {}

  async execute({
    name,
    email,
    cpf,
    celphone,
    knowledge,
  }: IRequest): Promise<void> {
    const employeeAlreadyExists = await this.employeesRepository.findByCpf(cpf);

    if (employeeAlreadyExists) {
      throw new AppError("Employee already existis!");
    }

    await this.employeesRepository.create({
      name,
      email,
      cpf,
      celphone,
      knowledge,
    });
  }
}

export { CreateEmployeeUseCase };
