import { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "@/components/organisms/form";
import { userEvent, within } from "@storybook/test";

const meta = {
  title: "Design System/Organisms/Form/Login",
  component: LoginForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Login",
    fields: [
      {
        id: "email",
        type: "email",
        placeholder: "Email",
        state: "default",
        required: true,
        label: "Email",
      },
      {
        id: "password",
        type: "password",
        placeholder: "Password",
        state: "default",
        required: true,
        label: "Password",
      },
    ],
    children: (
      <>
        <LoginForm.Button text={"Login"} />
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByLabelText("Email"), "email@test.fr", {
      delay: 100,
    });

    await userEvent.type(canvas.getByLabelText("Password"), "password", {
      delay: 100,
    });

    await userEvent.click(canvas.getByLabelText("password-adornment"));
  },
};
