import { GasEngine } from './GasEngine';
import { Vehicle } from './Vehicle';

//Inheritance.  The bus sub class inherits fields and methods from Vehicle.
//Example: A bus instance can call the getLicensePlate method.
export class Bus extends Vehicle{

    private govIssueId: number;
    private gasEngine: GasEngine;

    constructor(licensePlate: string, numberOfWheels: number, govIssueId: number){
        //call the super method to use the constructor of the Vehicle class
        super(licensePlate, numberOfWheels);     
        this.gasEngine = new GasEngine("gas", 50, "diesel");
        this.govIssueId = govIssueId;
    }

    getGovIssueId(){
        return this.govIssueId;
    }

    setGovIssueId(govIssueId: number){
        this.govIssueId = govIssueId;
    }

    doMaintenance(): string {
        return "Checking oil levels. Checking brakes." +
         "Checking communication channels. Checking safety protocols."
    }

}