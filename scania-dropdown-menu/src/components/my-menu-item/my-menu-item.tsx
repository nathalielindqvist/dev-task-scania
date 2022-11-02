import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-menu-item',
  shadow: true,
})

export class MyMenuItem {
  render() {
    return (
      <Host>
        <button>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
