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

  @State() firstButton = {
    title: '<= 200.000 km',
    operator: 'lte',
    value: 200000
  }
  @State() secondButton = {
    title: '> 200.000 km',
    operator: 'gt',
    value: 200000
  }

  // Watches for changes to dropdownTitle state and emits changes to parent component in React project
  @Watch("dropdownTitle")
  titleUpdatedHandler(dropdownTitle: string) {
    this.titleUpdated.emit({ dropdownTitle });
  }

  // Watches for changes to reset prop and changes dropdownTitle state to its value
  @Watch("reset")
  resetUpdatedHandler(reset: string) {
    this.dropdownTitle = reset;
  }

  @Event() titleUpdated: EventEmitter;

  // Sets local open state to value of emitted open state from my-dialog component
  private handleToggle(event: CustomEvent) {
    this.open = event.detail.open;
  }

  // When first option in dropdown button is clicked, it changes dropdownTitle state to the title value of the first button
  // and changes local open state to false
  private handleFirstButton() {
    this.dropdownTitle = this.firstButton.title;
    this.open = !this.open;
  }

  // When second option in dropdown button is clicked, it changes dropdownTitle state to the title value of the second button
  // and changes local open state to false
  private handleSecondButton() {
    this.dropdownTitle = this.secondButton.title;
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
            <button onClick={() => this.handleFirstButton()} class={this.dropdownTitle === this.firstButton.title ? "active" : ""}>
              {this.firstButton.title}
            </button>
            <button onClick={() => this.handleSecondButton()} class={this.dropdownTitle === this.secondButton.title ? "active" : ""}>
              {this.secondButton.title}
            </button>
          </menu>
        </my-dialog>
      </Host>
    );
  }
}