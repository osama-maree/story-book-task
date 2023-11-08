import Button from "./Button.js";
export default {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "text"] },
    size: { control: "select", options: ["small", "medium", "large"] },
    color: { control: "color" },
    label: { control: "text" },
  },
};

export const Primary = {
  args: {
    variant: "primary",
    size: "small",
    color: "black",
    label: "Primary Button",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    size: "medium",
    color: "gray",
    label: "Secondary Button",
  },
};

export const Text = {
  args: {
    variant: "text",
    size: "large",
    color: "red",
    label: "text Button",
  },
};
