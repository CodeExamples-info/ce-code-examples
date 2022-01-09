import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import EmailInput from './EmailInput.component';

export default {
  title: 'Inputs/Email Input',
  component: EmailInput,
} as ComponentMeta<typeof EmailInput>;

const Template: ComponentStory<typeof EmailInput> = (args) => {
  const [email, setEmail] = useState('');
  return <EmailInput {...args} emailState={email} handleInputChange={setEmail} />;
};

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  showLabel: true,
};

export const WithTip = Template.bind({});
WithTip.args = {
  showTip: true,
};

export const WithLabelAndTip = Template.bind({});
WithLabelAndTip.args = {
  showLabel: true,
  showTip: true,
};
