import("../../javascripts/mdchart.js").then((MdChart) => {
  const MdChartConstructor = MdChart.default;
  const mdchart = new MdChartConstructor("./data.js", "./vizzu.js", "tutorial");

  mdchart.create([
    {
      anims: [
        (chart) => {
          return chart.animate({
            config: {
              title: "Switch to ascending order...",
              channels: {
                y: { set: ["Popularity", "Kinds"] },
                x: { set: "Genres" },
                label: { attach: "Popularity" },
              },
              color: { attach: "Kinds" },
            },
          });
        },
        (chart) => {
          return chart.animate({
            config: {
              sort: "byValue",
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
              title: "...or descending order.",
            },
          });
        },
        (chart) => {
          return chart.animate({
            config: {
              reverse: true,
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
              title: "Let's get back to where we were",
            },
          });
        },
        (chart) => {
          return chart.animate({
            config: {
              sort: "none",
              reverse: false,
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
              title: "With two discretes on one axis...",
            },
          });
        },
        (chart) => {
          return chart.animate({
            config: {
              channels: {
                y: {
                  detach: "Kinds",
                },
                x: {
                  set: ["Genres", "Kinds"],
                },
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
              title: "...grouping is determined by their order.",
            },
          });
        },
        (chart) => {
          return chart.animate({
            config: {
              channels: {
                x: {
                  set: ["Kinds", "Genres"],
                },
              },
            },
          });
        },
      ],
    },
  ]);
});