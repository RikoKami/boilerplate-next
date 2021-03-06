import { Meta, Story } from "@storybook/react/types-6-0"
import { Main } from "."

export default {
	title: "Main",
	component: Main,
	args: {
		title: "title default",
		description: "description default"
	}
} as Meta

export const Default: Story = (args) => <Main {...args} />
export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
	title: "title basic"
}
