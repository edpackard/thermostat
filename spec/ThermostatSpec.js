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
    for(let i = 1; i < 15; i++) {
      thermostat.down();
    }
    expect(thermostat.temp).toEqual(10);
  });

});