import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/atoms/button";
import { VscAdd } from "react-icons/vsc";

const meta = {
  title: "Design System/Atoms/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => (
  <Button onClick={() => console.log("Button clicked")}>Default</Button>
);
export const Disabled = () => <Button state="disabled">Disabled</Button>;
export const Submit = () => <Button type="submit">Submit</Button>;
export const WithChildren = () => (
  <Button>
    <Button.Body>
      Body
      <Button.Icon>
        <VscAdd />
      </Button.Icon>
    </Button.Body>
  </Button>
);
