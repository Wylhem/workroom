import { PrimaryButton } from "@/components/molecules/button";
import { Meta, StoryObj } from "@storybook/react";
import { Logo } from "@/components/atoms/logo";

const meta = {
  title: "Design System/atoms/logo",
  component: Logo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: { expanded: boolean; href: string }) => (
  <Logo {...args} />
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  expanded: true,
  href: "/",
};
