document.addEventListener("DOMContentLoaded", () => {
  const localTemperature = (location = "ipswich,uk") => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=3bd226d52051ddd6ea23503b34ab4b1c`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector("#location").innerText = data.name;
        console.log(data.main.temp);
        document.querySelector("#local-temp").innerText = Math.round(
          data.main.temp
        );
      });
  };

  const updateTemperature = () => {
    document.querySelector("#temperature").innerText = thermostat.temp;
  };

  const thermostat = new Thermostat();
  updateTemperature();
  localTemperature();

  document
    .querySelector("#select-location")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const location = document.querySelector("#choose-location").value;
      localTemperature(location);
    });

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
