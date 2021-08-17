import { EntityRepository, getRepository, Repository } from "typeorm";

import { Employee } from "../entities/Employee";
import {
  ICreateEmployeeDTO,
  IEmployeesRepository,
} from "./IEmployeesRepository";

@EntityRepository(Employee)
class EmployeesRepository implements IEmployeesRepository {
  private repository: Repository<Employee>;

  constructor() {
    this.repository = getRepository(Employee);
  }

  async create({
    cpf,
    email,
    knowledge,
    name,
    celphone,
  }: ICreateEmployeeDTO): Promise<void> {
    const employee = this.repository.create({
      name,
      email,
      cpf,
      celphone,
      knowledge,
    });

    await this.repository.save(employee);
  }

  async list(): Promise<Employee[]> {
    const employees = await this.repository.find({ order: { name: "ASC" } });

    return employees;
  }

  async findByCpf(cpf: string): Promise<Employee> {
    const employee = await this.repository.findOne({ cpf });

    return employee;
  }

  async validateById(id: string, status: boolean): Promise<void> {
    await this.repository.update({ id }, { status });
  }
}

export { EmployeesRepository };
