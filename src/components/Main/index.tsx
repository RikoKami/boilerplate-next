import { Wrapper, Description, Illustration, Logo, Title } from "./styles"

export const Main = () => (
	<Wrapper>
		<Logo src="/img/icon-512.png" alt="Imagem de um átomo" />
		<Title>React Avançado</Title>
		<Description>Typescript, ReactJS, NextJS e Styled Components</Description>
		<Illustration
			src="/img/hero-illustration.svg"
			alt="Um desenvolvedor de frente para uma tela com código."
		/>
	</Wrapper>
)
