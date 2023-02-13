import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    const options = ['a', 'b', 'c'];
    const col = { options };

    const { root } = await newSpecPage({
      components: [MyComponent],
      template: () => <my-component col={col} />,
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <p>Hello world</p>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders x2', async () => {
    const options = ['a', 'b', 'c'];
    const col = { options };

    const { root } = await newSpecPage({
      components: [MyComponent],
      template: () => <my-component col={col} />,
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <p>Hello world</p>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
