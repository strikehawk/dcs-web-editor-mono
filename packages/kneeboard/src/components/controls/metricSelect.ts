import { Component, Context } from "../..";

const component: Component = {
  id: 'metric-select',
  template: '',
  control: `<select name="metricSelect" id="metric-select">
  <option value="metric">Metric</option>
  <option value="imperial" disabled="true">Imperial (soon)</option>
</select>`,
  render: (c: Context) => {
    return '';
  },
}

export default component;
