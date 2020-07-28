import React, { Component } from 'react';
import MenuItems from '../menu-items/Menu-items.component';
import '../directory/directory.styles.scss';

class DIrectory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          id: 1,
          title: 'HATZ',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          linkUrl: 'hats',
        },
        {
          id: 2,
          title: 'JACKET',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          linkUrl: '',
        },
        {
          id: 3,
          title: 'SNEAKERS',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          linkUrl: '',
        },
        {
          id: 4,
          title: 'WOMEN',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          linkUrl: '',
        },
        {
          id: 5,
          title: 'MENS',
          imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
          size: 'large',
          linkUrl: ' ',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="directory-menu">
          {this.state.sections.map(({ id, ...otherSectionProps }) => {
            return <MenuItems key={id} {...otherSectionProps} />;
          })}
        </div>
      </div>
    );
  }
}
export default DIrectory;
