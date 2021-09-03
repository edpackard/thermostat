document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temp;
  }

  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector('#temperature-up').addEventListener('click', () => {
     thermostat.up();
     updateTemperature();
  });

  document.querySelector('#temperature-down').addEventListener('click', () => {
    thermostat.down();
    updateTemperature();
  });

  document.querySelector('#temperature-reset').addEventListener('click', () => {
    thermostat.reset();
    updateTemperature();
  });

  document.querySelector('#powersaving-on').addEventListener('click', () => {
    thermostat.powerSavingOn();
    document.querySelector('#power-saving-status').innerText = 'on';
    updateTemperature();
  })

  document.querySelector('#powersaving-off').addEventListener('click', () => {
    thermostat.powerSavingOff();
    document.querySelector('#power-saving-status').innerText = 'off';
    updateTemperature();
  })

});