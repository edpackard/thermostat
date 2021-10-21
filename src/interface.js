document.addEventListener("DOMContentLoaded", () => {
  const localTemperature = () => {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Ipswich,uk&units=metric&APPID=3bd226d52051ddd6ea23503b34ab4b1c"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector("#location").innerText = data.name;
        document.querySelector("#local-temp").innerText = data.main.temp;
      });
  };

  localTemperature();

  const updateTemperature = () => {
    document.querySelector("#temperature").innerText = thermostat.temp;
  };

  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector("#temperature-up").addEventListener("click", () => {
    thermostat.up();
    updateTemperature();
  });

  document.querySelector("#temperature-down").addEventListener("click", () => {
    thermostat.down();
    updateTemperature();
  });

  document.querySelector("#temperature-reset").addEventListener("click", () => {
    thermostat.reset();
    updateTemperature();
  });

  document.querySelector("#powersaving-on").addEventListener("click", () => {
    thermostat.powerSavingOn();
    document.querySelector("#power-saving-status").innerText = "on";
    updateTemperature();
  });

  document.querySelector("#powersaving-off").addEventListener("click", () => {
    thermostat.powerSavingOff();
    document.querySelector("#power-saving-status").innerText = "off";
    updateTemperature();
  });
});
