import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    const options = ['a', 'b', 'c'];
    const col = { options };

    const spec = await newSpecPage({
      components: [MyComponent],
      template: () => <my-component col={col} />,
    });
    expect(spec.root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <p>Hello world</p>
        </mock:shadow-root>
      </my-component>
    `);

    // Comment this line back in to "pass" the test without an error
    // spec.rootInstance.disconnectedCallback();
  });
});
