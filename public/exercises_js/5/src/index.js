import Chart from '../../../../node_modules/chart.js';

const chartType = document.querySelector("#chart-type");
const context = document.querySelector("#app-chart").getContext("2d");

let chart = null;

const colors = {
  safari: "#25AEEE",
  chrome: "#FECD52",
  firefox: "#FD344B",
  edge: "##4cf16b",
};

const render = (type) => {
  if (chart) {
    chart.destroy();
  }
  chart = new Chart(context, {
    type: type,
    data: {
      labels: ["Safari", "Chrome", "Firefox", "Edge"],
      datasets: [
        {
          label: "Browser stats",
          data: [16.74, 64.26, 4.47, 2.11],
          backgroundColor: [
            colors.safari,
            colors.chrome,
            colors.firefox,
            colors.edge,
          ],
          borderWidth: 3,
        },
      ],
    },
  });
};

chartType.addEventListener("change", (event) => {
  render(event.currentTarget.value);
});

render(chartType.value);
