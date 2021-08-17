import { Employee } from "../entities/Employee";

interface ICreateEmployeeDTO {
  name: string;
  email: string;
  cpf: string;
  celphone?: string;
  knowledge: string[];
}

interface IEmployeesRepository {
  create({
    name,
    email,
    cpf,
    celphone,
    knowledge,
  }: ICreateEmployeeDTO): Promise<void>;
  list(): Promise<Employee[]>;
  findByCpf(cpf: string): Promise<Employee>;
  validateById(id: string, status: boolean): Promise<void>;
}

export { ICreateEmployeeDTO, IEmployeesRepository };
