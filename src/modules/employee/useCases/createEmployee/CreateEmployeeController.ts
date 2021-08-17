import { Request, Response } from "express";

import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";

class CreateEmployeeController {
  constructor(private createEmployeeUseCase: CreateEmployeeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, cpf, celphone, knowledge } = request.body;

    await this.createEmployeeUseCase
      .execute({
        name,
        email,
        cpf,
        celphone,
        knowledge,
      })
      .catch((err) => {
        return response.status(err.statusCode).json({ erro: err.message });
      });

    return response.status(201).send();
  }
}

export { CreateEmployeeController };
