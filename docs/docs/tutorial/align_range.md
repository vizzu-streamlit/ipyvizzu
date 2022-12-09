# Align & range

ipyvizzu offers different options to align your chart elements and to set the
range of values shown on the axes. Alignment can be used to create charts like
a stream chart where the elements are vertically centered. A good example for
using range is when you fix the y-axis so that it would not adapt to the data
being shown.

Centered alignment. The effect of this parameter depends on the orientation of
the chart. For example, on a column chart, elements will be vertically
centered, whereas on a bar chart, horizontally.

**Note:** In the first example, the y-axis labels are hidden because they don't
properly represent the values shown on the column chart anymore, as the chart
elements float off the x-axis.

```python
import pandas as pd
from ipyvizzu import Chart, Data, Config


data_frame = pd.read_csv("./music_data.csv")
data = Data()
data.add_data_frame(data_frame)


chart = Chart()

chart.animate(data)

chart.animate(
    Config(
        {
            "channels": {
                "y": {"set": ["Popularity", "Kinds"]},
                "x": {"set": "Genres"},
                "label": {"attach": "Popularity"},
            },
            "color": {"attach": "Kinds"},
            "title": "Align: center",
        }
    )
)

# Change align and
# configures the y axis labels to disappear during the animation
chart.animate(
    Config({"align": "center", "channels": {"y": {"labels": False}}})
)
```

<div id="tutorial_01"></div>

Stretched alignment. This way the elements will proportionally fill the entire
plot area, effectively showing proportions in stacked charts. This is why the
scale will also switch from values to percentages when used.

```python
chart.animate(Config({"title": "Align: stretch = % view"}))

chart.animate(Config({"align": "stretch"}))
```

<div id="tutorial_02"></div>

Getting back to the default alignment.

```python
chart.animate(Config({"title": "Align: none - default"}))

chart.animate(Config({"align": "none"}))
```

<div id="tutorial_03"></div>

You can set the range of an axis by setting the minimum and maximum values of
it. Both parameters are optional so that you can set only one of those, and you
either set specific values or a relative value by adding the % sign. In this
example, we set the range of the y-axis in a way that the max value is 150% of
the biggest element’s value.

```python
chart.animate(
    Config({"title": "Axis range set proportionally to shown values"})
)

chart.animate(Config({"channels": {"y": {"range": {"max": "150%"}}}}))
```

<div id="tutorial_04"></div>

You can also set the range for an axis with a dimension on it. You can even use
this feature to filter certain elements, just like in the following example.

```python
chart.animate(
    Config(
        {"title": "Axis range set explicitly on an axis with discrete series"}
    )
)

chart.animate(
    Config(
        {
            "channels": {
                "x": {
                    "range": {
                        "min": -2,
                        "max": 3,
                    }
                }
            }
        }
    )
)
```

<div id="tutorial_05"></div>

Ranges have certain defaults depending on the chart's configuration, based on
common data viz guidelines because we wanted to make it easy for you to create
sleek charts. For example, in the cartesian coordinate system, the range will
be automatically set to the max:110% for an axis with a measure on it. Polar
coordinates work differently, as you can see for yourself in the
[Orientation, split & polar chapter](./01_10_orientation_split_polar.md).

Whenever you want to set your ranges back to the default value, just set them
to `auto`.

```python
chart.animate(Config({"title": "Back to the default ranges"}))

chart.animate(
    Config(
        {
            "channels": {
                "y": {
                    "range": {"max": "auto"},
                    "labels": True,
                },
                "x": {
                    "range": {
                        "min": "auto",
                        "max": "auto",
                    }
                },
            }
        }
    )
)
```

<div id="tutorial_06"></div>

<script src="./01_08_align_range.js"></script>