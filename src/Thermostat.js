class Thermostat {

  constructor() {
    this.DEFAULT_TEMP = 20;
    this.MINIMUM_TEMP = 10;
    this.temp = this.DEFAULT_TEMP;
  }

  temp() {
    return this.temp
  }

  up() {
    this.temp++
  }

  down() {
    if (this.temp > this.MINIMUM_TEMP) {
    this.temp--
    }
  }
}