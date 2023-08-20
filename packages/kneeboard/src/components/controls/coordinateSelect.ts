import { Component, Context, refresh } from "../..";
import { save } from "../../cache";
import calculator from '../../calculator';

const options = [
  {
    label: 'DD',
    value: 'DD',
  },
  {
    label: 'DMM',
    value: 'DMM',
  },
  {
    label: 'DMS',
    value: 'DMS',
  },
  {
    label: 'MGRS',
    value: 'MGRS',
  },
]

const component: Component = {
  id: 'coordinate-select',
  template: '<div id="coordinate-select"></div>',
  control: `<select name="coordinateSelect" id="coordinate-select-control" title="Warning: changing units will reset user input">
  ${
    options.map(o => {
      return `<option value="${o.value}" ${calculator.config.coordinates === o.value ? 'selected' : ''}>${o.label}</option>`
    })
  }
</select>`,
  render: (c: Context) => {
    const select = document.getElementById('coordinate-select-control')!;

    select.addEventListener('change', selectionHandler)
    return '';
  },
}

export default component;

function selectionHandler(e:Event) {
  const value = e.target.value
  
  save('coordinates', value)
  calculator.config.coordinates = value;

  setTimeout(refresh, 100);
}