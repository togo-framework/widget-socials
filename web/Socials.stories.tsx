import type { Meta, StoryObj } from "@storybook/react";
import { Socials } from "./index";

const meta = { title: "Widgets/Socials", component: Socials } satisfies Meta<typeof Socials>;
export default meta;

export const Default: StoryObj<typeof Socials> = {
  args: { settings: {}, setSettings: () => {}, editing: false },
};

export const Editing: StoryObj<typeof Socials> = {
  args: { settings: {}, setSettings: () => {}, editing: true },
};
