
export abstract class Engine {
  private engineType: string;
  private weight: number;

  constructor(engineType: string, weight: number) {
    this.engineType = engineType;
    this.weight = weight;
  }

  public getType(): string {
    return this.engineType;
  }

  public setType(engineType: string): void {
    this.engineType = engineType;
  }

  public getWeight(): number {
    return this.weight;
  }

  public setWeight(weight: number): void {
    this.weight = weight;
  }

  abstract startEngine(): string;
}