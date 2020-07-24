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
        },
        {
          id: 2,
          title: 'JACKET',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        },
        {
          id: 3,
          title: 'SNEAKERS',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        },
        {
          id: 4,
          title: 'WOMEN',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
        },
        {
          id: 5,
          title: 'MENS',
          imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
          size: 'large',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="directory-menu">
          {this.state.sections.map(({ id, title, imageUrl, size }) => {
            return (
              <MenuItems
                key={id}
                title={title}
                imageUrl={imageUrl}
                size={size}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default DIrectory;
