import { Component, Host, h, Prop, Element, Listen, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-dialog',
  styleUrl: 'my-dialog.css',
  shadow: true,
})
export class MyDialog {
  @Element() el: HTMLElement;

  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  @Listen("click", { target: "window" })
  handleWindowClick(event: MouseEvent) {
    // Only close if we click outside the shadow root
    if (!event.composedPath().includes(this.el.shadowRoot)) {
      this.open = false;
    }
  }

  @Watch("open")
  openChangedHandler(open: boolean) {
    this.openChanged.emit({ open });
  }

  @Event() openChanged: EventEmitter;

  render() {
    return (
      <Host>
        <button class="dropdown-button"
          onClick={() => {
            this.open = !this.open;
          }}
        >
          <slot name="activator"></slot>
        </button>

        <dialog open={this.open}>
          <slot></slot>
        </dialog>
      </Host>
    );
  }

}
