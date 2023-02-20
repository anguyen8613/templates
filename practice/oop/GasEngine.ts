import { Engine } from './Engine';

export class GasEngine extends Engine {
  private fuelType: string;

  constructor(engineType: string, weight: number, fuelType: string) {
    super(engineType, weight);
    this.fuelType = fuelType;
  }

  getFuelType(): string {
    return this.fuelType;
  }

  setFuelType(fuelType: string): void {
    this.fuelType = fuelType;
  }

  startEngine(): string {
    return 'Intaking gas.  Engaging motors. Starting Engine.';
  }
}