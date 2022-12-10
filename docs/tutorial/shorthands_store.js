import("../javascripts/mdchart.js").then((MdChart) => {
  const MdChartConstructor = MdChart.default;
  const mdchart = new MdChartConstructor("./data.js", "./vizzu.js", "tutorial");

  mdchart.create([
    {
      anims: [
        (chart) => {
          return chart.animate({
            config: {
              title: "Store function",
              channels: {
                y: { set: ["Popularity", "Kinds"] },
                x: { set: "Genres" },
                label: { attach: "Popularity" },
              },
              color: { set: "Kinds" },
            },
          });
        },
        (chart) => {
          return chart.animate({
            config: {
              align: "stretch",
            },
          });
        },
      ],
    },
    {
      anims: [
        (chart) => {
          return chart.animate({
            config: {
              title: "When just one series is used",
            },
          });
        },
        (chart) => {
          return chart.animate({
            config: {
              channels: {
                y: { detach: "Kinds" },
                x: { attach: "Kinds" },
              },
              align: "none",
            },
          });
        },
      ],
    },
    {
      anims: [
        (chart) => {
          return chart.animate({
            config: {
              title: "When you use set and no other channel options",
            },
          });
        },
        (chart) => {
          return chart.animate({
            config: {
              channels: {
                y: ["Kinds", "Popularity"],
                x: "Genres",
              },
            },
          });
        },
      ],
    },
    {
      anims: [
        (chart) => {
          return chart.animate({
            config: {
              title: "You don't have to use the channel object",
            },
          });
        },
        (chart) => {
          return chart.animate({
            config: {
              y: "Kinds",
              x: ["Genres", "Popularity"],
            },
          });
        },
      ],
    },
    {
      anims: [
        (chart) => {
          return chart.animate({
            config: {
              title: "Shorthand for styles",
            },
          });
        },
        (chart) => {
          return chart.animate({
            style: {
              "plot.xAxis.label.fontSize": "150%",
              "title.backgroundColor": "#A0A0A0",
            },
          });
        },
      ],
    },
    {
      anims: [
        (chart) => {
          return chart.animate({
            style: null,
            config: {
              title: "Store function",
              align: "stretch",
              channels: {
                y: { set: ["Popularity", "Kinds"] },
                x: { set: "Genres" },
                label: { attach: "Popularity" },
              },
              color: { set: "Kinds" },
            },
          });
        },
        (chart) => {
          return chart.animate({
            config: {
              title: "Restoring a previously stored state",
            },
          });
        },
      ],
    },
  ]);
});