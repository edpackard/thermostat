class Thermostat {

  constructor() {
    this.DEFAULT_TEMP = 20;
    this.MINIMUM_TEMP = 10;
    this.POWERSAVE_MAX_TEMP = 25;
    this.NORMAL_MAX_TEMP = 32;
    this.temp = this.DEFAULT_TEMP;
    this.powerSavingMode = true;
  }

  isPowerSaving() {
    return this.powerSavingMode
  }

  temp() {
    return this.temp
  }

  up() {
    let powersave = (this.isPowerSaving() && this.temp < this.POWERSAVE_MAX_TEMP)
    let normal = (!this.isPowerSaving() && this.temp < this.NORMAL_MAX_TEMP)
    if ( powersave || normal ) {
      this.temp++
    }
    // if (this.isPowerSaving() && this.temp < this.POWERSAVE_MAX_TEMP) {
    //   this.temp++
    // }
    // if (!this.isPowerSaving() && this.temp < this.NORMAL_MAX_TEMP) {
    //   this.temp++
    // }
  }

  down() {
    if (this.temp > this.MINIMUM_TEMP) {
    this.temp--
    }
  }

  powerSaving() {
    this.powerSavingMode = this.powerSavingMode ? false : true
  }


}