import { Component, h, Listen, Element, Prop, Watch } from '@stencil/core';

const colors = {
  green: 'green',
  blue: 'blue',
} as const;

type ColorsType = typeof colors[keyof typeof colors];
const logColors = (color: ColorsType): void => {
  console.log(color);
};

logColors(colors.green);

@Component({
  scoped: true,
  tag: 'my-tabs',
  styleUrl: './my-tabs.css',
})
export class MyTabs {
  @Prop({ mutable: true }) activeTab: string;
  @Watch('activeTab')
  handleActiveTabChange(newValue: string) {
    const headings = this.getHeadings();
    console.log('headings: ', headings);

    headings.forEach(heading => {
      if (heading.name === newValue) {
        heading.active = true;
      } else {
        heading.active = false;
      }
    });
  }
  @Element() element;

  @Listen('tabActivate')
  handleTabActivate(e: CustomEvent<{ name: string }>) {
    console.log('tabs component, detail.name', e);

    this.activeTab = e.detail.name;
  }

  componentDidLoad() {
    if (this.activeTab === undefined) {
      const headings = this.getHeadings();
      const haveActiveTab = headings.filter(heading => heading.active).length > 0;
      if (!haveActiveTab && headings.length > 0) {
        this.activeTab = headings[0].name;
      }
    } else {
      this.handleActiveTabChange(this.activeTab);
    }
  }
  getHeadings = () => {
    const children = [].slice.call(this.element.querySelector('.my-tabs-container').children).filter(child => child.tagName.toLowerCase() === 'my-tab');
    return children;
  };

  render() {
    return (
      <div class="my-tabs-container">
        <slot />
      </div>
    );
  }
}
