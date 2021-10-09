import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { LinkComponent } from '../link.component';
import { withKnobs, text, select } from '@storybook/addon-knobs';

// This exports the Stories group for this component
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/Link',
  
  // The component related to the Stories
  component: LinkComponent,  
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [LinkComponent],
      imports: [CommonModule],
    }),
    // we add the withKnobs decorator in order to use it
    withKnobs,
  ],
};

// This creates a Story for the component
const Template: Story<LinkComponent> = () => ({
  component: LinkComponent,
  props: {
    // we use the select knob to set the color value
    color: select('Color', ['primary', 'secondary'] , 'primary'),
    
    // we use the text knob to set the ngContent value
    content: text('Text', 'Visit Storybooks'),
    
    href: 'https://storybook.js.org/',
    target: '_blank',
  },
  template: `
    <app-link
        [color]="color"
        [href]="href"
        [target]="target"
      >
        {{ content }}
    </app-link>`,
});
export const Base = Template.bind({});

// Other stories could be added here as well, all you have to do is export them along!