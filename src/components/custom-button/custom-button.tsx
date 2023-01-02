import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-button',
  styleUrls: ['custom-button.css'],
  shadow: false,
})
export class Button {
  @Prop() text: string = 'Default';
  render() {
    return <button class="button">{this.text}</button>;
  }
}
