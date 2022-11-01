import { Component, Host, h, Element, State } from '@stencil/core';

@Component({
  tag: 'my-menu',
  styleUrl: 'my-menu.css',
  shadow: true,
})
export class MyMenu {

  @Element() el: HTMLElement;

  @State() items: HTMLMyMenuItemElement[] = [];

  componentWillLoad() {
    this.items = Array.from(this.el.querySelectorAll("my-menu-item"));
    this.items.forEach((item, i) => {
      item.slot = `item-${i}`;
    });
  }

  render() {
    return (
      <Host>
        <menu>
          {this.items.map((_, i) => (
            <li>
              <slot name={`item-${i}`}></slot>
            </li>
          ))}
        </menu>
      </Host>
    );
  }

}
