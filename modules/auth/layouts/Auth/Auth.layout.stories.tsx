import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignUpBgImage from '../../../../public/images/signup-bg.jpg';
import { AuthLayout } from './Auth.layout';

export default {
  title: 'Auth Module/Auth Layout',
  component: AuthLayout,
  decorators: [
    (Story) => (
      <Story image={SignUpBgImage} imageAlt="Test Alt">
        Title
      </Story>
    ),
  ],
} as ComponentMeta<typeof AuthLayout>;

const Template: ComponentStory<typeof AuthLayout> = (args) => (
  <AuthLayout image={args.image} imageAlt={args.imageAlt}>
    {args.children}
  </AuthLayout>
);

export const SignUp = Template.bind({});
SignUp.args = {
  image: SignUpBgImage,
  imageAlt: 'Test Alt',
  children: <h1>Test</h1>,
};
