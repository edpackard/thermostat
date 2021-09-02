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
    thermostat.powerSavingOff()
    expect(thermostat.isPowerSaving()).toBe(false);
  });

  it("can turn on powersaving mode", () => {
    thermostat.powerSavingOff()
    thermostat.powerSavingOn()
    expect(thermostat.isPowerSaving()).toBe(true); 
  });

  it("can't go above 25 degrees if powersaving on", () => {
    for(let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.temp).toEqual(25);
  }); 

  it("can't go above 32 degrees if powersaving off", () => {
    thermostat.powerSavingOff()
    for(let i = 0; i < 20; i++) {
      thermostat.up();
    }
    expect(thermostat.temp).toEqual(32);
  }); 

  it("reset function should reset temperature to 20", () => {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.temp).toEqual(20);
  });

  it("checks to see if low usage is registered", () => {
    for(let i = 0; i < 5; i++) {
      thermostat.down();
    }
      expect(thermostat.usage()).toEqual("Low Usage");
  });

  it("checks to see if medium usage is registered", () => {
    expect(thermostat.usage()).toEqual("Medium Usage");
  });

  it("checks to see if a high usage is registered", () => {
    thermostat.powerSavingOff()
    for(let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.usage()).toEqual("High Usage");
  });
  
});