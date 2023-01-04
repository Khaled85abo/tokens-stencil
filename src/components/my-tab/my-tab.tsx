import { Component, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'my-tab',
  styleUrl: 'my-tab.css',
  scoped: true,
})
export class MyTab {
  @Prop() name: string;
  @Prop() active: boolean;
  @Event() tabActivate: EventEmitter<{ name: string }>;

  @Listen('click')
  handleClick() {
    this.active = true;
    this.tabActivate.emit({ name: this.name });
  }
  handleTabClicked() {
    this.tabActivate.emit({ name: 'fd' });
  }
  getClass = () => (this.active ? 'my-tab active' : 'my-tab');
  render() {
    return (
      <div class={this.getClass()}>
        <slot />
      </div>
    );
  }
}
