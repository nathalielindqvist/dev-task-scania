import { Component, Host, h, State, Prop, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'my-menu',
  styleUrl: 'my-menu.css',
  shadow: true,
})
export class MyMenu {

  @Prop() reset: string;

  @State() open = false;

  @State() dropdownTitle = 'Select distance';
  @State() firstButtonTitle = '<= 200.000 km';
  @State() secondButtonTitle = '> 200.000 km';

  @Watch("dropdownTitle")
  titleUpdatedHandler(dropdownTitle: string) {
    this.titleUpdated.emit({ dropdownTitle });
  }

  @Watch("reset")
  resetUpdatedHandler(reset: string) {
    this.dropdownTitle = this.reset;
  }

  @Event() titleUpdated: EventEmitter;

  private handleToggle(event: CustomEvent) {
    this.open = event.detail.open;
  }
  private handleFirstButton() {
    this.dropdownTitle = this.firstButtonTitle;
    this.open = !this.open;
  }
  private handleSecondButton() {
    this.dropdownTitle = this.secondButtonTitle;
    this.open = !this.open;
  }

  render() {
    return (
      <Host>
        <my-dialog onOpenChanged={(event) => this.handleToggle(event)} open={this.open}>
          <slot slot="activator" name="label">
            {this.dropdownTitle}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" aria-label={this.open ? "Expanded" : "Collapsed"}>
              <path fill-rule="evenodd" d={
                this.open ? "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" : "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              }/>
            </svg>
          </slot>
          <menu>
            <button onClick={() => this.handleFirstButton()}>
              {this.firstButtonTitle}
            </button>
            <button onClick={() => this.handleSecondButton()}>
              {this.secondButtonTitle}
            </button>
          </menu>
        </my-dialog>
      </Host>
    );
  }

}
