describe ("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("expects a new thermostat to have a starting temp of 20", () => {
    expect(thermostat.temp()).toEqual(20);
  });

});