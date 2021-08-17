import { Request, Response } from "express";

import { ValidateEmployeeUseCase } from "./ValidateEmployeeUseCase";

class ValidateEmployeeController {
  constructor(private validateEmployeeUseCase: ValidateEmployeeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { status } = request.body;

    await this.validateEmployeeUseCase.execute({ id, status });

    return response.status(200).send();
  }
}

export { ValidateEmployeeController };
