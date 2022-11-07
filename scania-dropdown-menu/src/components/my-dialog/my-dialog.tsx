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

  // Watches for changes to open prop and emits changes to my-menu component
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

          {/* If open is true, the dialog box is visable. If not, it is hidden */}
        <dialog open={this.open}>
          <slot></slot>
        </dialog>
      </Host>
    );
  }

}
