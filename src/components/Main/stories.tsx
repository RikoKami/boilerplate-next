import { Meta, Story } from "@storybook/react/types-6-0"
import { text, withKnobs } from "@storybook/addon-knobs"
import { Main } from "."

export default {
	title: "Main",
	component: Main,
	decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
	<Main
		title={text("Title", "React Avançado")}
		description={text(
			"Description",
			"Typescript, ReactJS, NextJS e Styled Components"
		)}
	/>
)
