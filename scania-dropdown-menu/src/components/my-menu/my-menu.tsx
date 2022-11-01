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

  @State() open = false;

  private handleToggle(event: CustomEvent) {
    this.open = event.detail.open;
  }

  render() {
    return (
      <Host>
        <slot></slot>

        <my-dialog onOpenChanged={(event) => this.handleToggle(event)}>
          <slot slot="activator" name="label">
            Actions
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d={
                this.open ? "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" : "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              }/>
            </svg>
            {/* <svg
              viewBox="0 0 100 66"
              aria-label={this.open ? "Expanded" : "Collapsed"}
            >
              <polygon
                points={
                  this.open ? "0 66.6, 100 66.6, 50 0" : "0 0, 100 0, 50 66.6"
                }
              />
            </svg> */}
          </slot>
          <menu>
            {this.items.map((_, i) => (
              <li>
                <slot name={`item-${i}`}></slot>
              </li>
            ))}
          </menu>
        </my-dialog>
      </Host>
    );
  }

}
