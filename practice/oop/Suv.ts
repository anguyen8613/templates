import { Vehicle } from './Vehicle';

export class Suv extends Vehicle{
    constructor(licensePlate: string, numberOfWheels: number){
        super(licensePlate, numberOfWheels);
    }

    doMaintenance(): string {
        return 'Checking oil levels. Checking brake fluids.'
    }
}