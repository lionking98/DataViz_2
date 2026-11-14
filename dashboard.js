// Each figure names its Vega-Lite file in data-chart.
const charts = document.querySelectorAll("[data-chart]");

for (const chart of charts) {
  const file = "charts/" + chart.dataset.chart + ".json";
  vegaEmbed(chart, file, { actions: false, renderer: "svg" })
    .then(() => { chart.dataset.ready = "true"; })
    .catch(error => {
      chart.textContent = "This chart could not load.";
      chart.dataset.ready = "error";
      console.error(file, error);
    });
}
