import { Meta, StoryObj } from "@storybook/react";
import { VscSend } from "react-icons/vsc";
import { PrimaryButton } from "@/components/molecules/button";

const meta = {
  title: "Design System/molecules/button",
  component: PrimaryButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Login",
    type: "submit",
    rightIcon: <VscSend />,
  },
};
export const Disabled: Story = {
  args: {
    text: "Login",
    type: "submit",
    rightIcon: <VscSend />,
    disabled: true,
  },
};

export const IconButton: Story = {
  args: {
    type: "button",
    rightIcon: <VscSend size={24} />,
  },
};
