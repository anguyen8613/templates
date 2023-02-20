import { Engine } from './Engine';

export class ElectricEngine extends Engine{

    batteryType: string;

    constructor(engineType: string, weight: number, batteryType: string){
        super(engineType, weight);
        this.batteryType = batteryType;
    }

    getBatteryType():string{
        return this.batteryType;
    }

    setBatteryType():void{
        this.batteryType = this.batteryType;
    }

    startEngine(): string {
        return 'Drawing power from battery.  Engaging motors.  Starting Engine';
    }
}