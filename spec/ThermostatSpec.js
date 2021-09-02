describe ("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("expects a new thermostat to have a starting temp of 20", () => {
    expect(thermostat.temp).toEqual(20);
  });

  it("expects up to increase the temperature by 1 degree", () => {
    thermostat.up();
    expect(thermostat.temp).toEqual(21);
  });

  it("expects down to decrease the temperature by 1 degree", () => {
    thermostat.down();
    expect(thermostat.temp).toEqual(19);
  });

  it("expects down to decrease the temperature by 1 degree", () => {
    for(let i = 0; i < 15; i++) {
      thermostat.down();
    }
    expect(thermostat.temp).toEqual(10);
  });

  it("expect a new thermostat to start in power saving mode", () => {
    expect(thermostat.isPowerSaving()).toBe(true);
  });

  it("can turn off powersaving mode", () => {
    thermostat.powerSaving()
    expect(thermostat.isPowerSaving()).toBe(false);
  });

  it("can turn on powersaving mode", () => {
    for (let i = 0; i < 2; i++) {
      thermostat.powerSaving()
    }
    expect(thermostat.isPowerSaving()).toBe(true); 
  });

  it("can't go above 25 degrees if powersaving on", () => {
    for(let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.temp).toEqual(25);
  }); 

  it("can't go above 32 degrees if powersaving off", () => {
    thermostat.powerSaving()
    for(let i = 0; i < 20; i++) {
      thermostat.up();
    }
    expect(thermostat.temp).toEqual(32);
  }); 

  it("reset function should reset temperature to 20", () => {
    thermostat.reset()
    expect(thermostat.temp).toEqual(20);
  });
  
});