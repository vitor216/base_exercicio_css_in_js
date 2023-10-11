import { Container } from '../../Styles'
import { Hero as HeroEstilo, DivEstilo, HeroTitle } from './styles'
const Hero = () => (
  <HeroEstilo>
    <Container>
      <DivEstilo>
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </DivEstilo>
    </Container>
  </HeroEstilo>
)

export default Hero
