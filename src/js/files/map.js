if (document.querySelector("#map")) {
  ymaps.ready(init);
  function init() {
    let map = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 18,
      type: "yandex#map",
      controls: ["routeButtonControl"],
    });

    let control = map.controls.get("routeButtonControl");
    control.routePanel.state.set({
      fromEnabled: true,
      toEnabled: true,
    });
  }
}
