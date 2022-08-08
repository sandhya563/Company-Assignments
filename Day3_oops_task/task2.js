// class inverter_power_rating {
//   current;
//   operating_voltage;
//   constructor(current, operating_voltage) {
//     this.current = current;
//     this.operating_voltage = operating_voltage;
//   }
//   power() {
//     var totalRating = this.current * this.operating_voltage;
//     console.log("Power Rating:", totalRating);
//   }
// }
// class solar_inverter extends inverter_power_rating {
//   battery;
//   grid;
//   constructor(battery, grid, current, operating_voltage) {
//     super(current, operating_voltage);
//     this.battery = battery;
//     this.grid = grid;
//   }
//   solar_panel(){
//     if(this.battery === "PCU"){
//         this.battery = false;
//     }else{
//         this.grid = true
//     }
//   }
// }

// const powerRating = new inverter_power_rating(2.5, 240);
// powerRating.power();
// console.log(powerRating);

// const batteryPower = new solar_inverter("PCU", true, 2.3, 240)
// batteryPower.solar_panel();
// console.log(batteryPower);


