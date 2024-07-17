import { LabelInput } from "@/components/molecules/input";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design System/Molecules/Input",
  component: LabelInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof LabelInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "default",
    children: "Default",
    type: "text",
    placeholder: "Default",
    state: "default",
  },
};
