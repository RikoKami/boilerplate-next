import { Wrapper, Description, Illustration, Logo, Title } from "./styles"

export const Main = ({
	title = "React Avançado",
	description = "Typescript, ReactJS, NextJS e Styled Components"
}) => (
	<Wrapper>
		<Logo src="/img/icon-512.png" alt="Imagem de um átomo" />
		<Title>{title}</Title>
		<Description>{description}</Description>
		<Illustration
			src="/img/hero-illustration.svg"
			alt="Um desenvolvedor de frente para uma tela com código."
		/>
	</Wrapper>
)
