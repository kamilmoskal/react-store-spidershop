import React, { Component } from 'react';
import './Filters.scss';
import { Dropdown, Divider } from 'semantic-ui-react';

const species = [
    { key: 1, text: ` Avicularia (${3})`, value: 1 },
    { key: 2, text: 'Brachypelma', value: 2 },
    { key: 3, text: 'Chromatopelma', value: 3 },
    { key: 4, text: ' Grammostola', value: 4 },
]
const options = [
    { key: 1, text: 'Price: from the lowest', value: 1 },
    { key: 2, text: 'Price: from the highest', value: 2 },
    { key: 3, text: 'Name: from A to Z', value: 3 },
    { key: 4, text: 'Name: from Z to A', value: 4 },
]

class Filters extends Component {
  render() {
    return (
      <div>
        <Dropdown placeholder='Species'  clearable selection options={species} />
        <Dropdown placeholder='Filter' clearable selection options={options} />

        <Divider />
      </div>
    )
  }
}

export default Filters;
