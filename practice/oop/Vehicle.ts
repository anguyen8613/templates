export abstract class Vehicle {
  //can only be accessed within this class
  private licensePlate: string;
  private numberOfWheels: number;


  constructor(licensePlate: string, numberOfWheels: number) {
    this.numberOfWheels = numberOfWheels;
    this.licensePlate = licensePlate;
  }

  //child class will inherit this method.  
  public getLicensePlate() {
    return this.licensePlate;
  }

  //use "set" methods to do validation 
  public setLicensePlate(licensePlate:string) {
    //Validation
    if(licensePlate.length === 8){
        this.licensePlate = licensePlate;
    }
    
  }

  public getNumberOfWheels() {
    return this.numberOfWheels;
  }

  public setNumberOfWheels(numberOfWheels: number){
    this.numberOfWheels = numberOfWheels;
  }

  //forces child class to have this method
  abstract doMaintenance(): string;
}