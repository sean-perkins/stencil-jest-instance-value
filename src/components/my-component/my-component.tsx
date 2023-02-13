import { Component, Prop, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent implements ComponentInterface {
  private timer: any;

  @Prop() col: any;

  connectedCallback(): void {
    this.timer = setTimeout(this.refresh, 250);
  }

  disconnectedCallback(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  private refresh() {
    console.log('fired refresh');
    const options = this.col.options;
    console.log('the options', options);
  }

  render() {
    return <p>Hello world</p>;
  }
}
