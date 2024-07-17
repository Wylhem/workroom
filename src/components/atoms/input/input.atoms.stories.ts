import { Input } from "@/components/atoms/input";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design System/Atoms/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "pasword",
    placeholder: "Input",
    type: "text",
  },
};

export const Password: Story = {
  args: {
    id: "pasword",
    placeholder: "Password",
    type: "password",
  },
};

export const Invalid: Story = {
  args: {
    id: "pasword",
    placeholder: "Invalid",
    type: "text",
    state: "invalid",
  },
};

export const Disabled: Story = {
  args: {
    id: "pasword",
    placeholder: "Disabled",
    type: "text",
    state: "disabled",
  },
};
