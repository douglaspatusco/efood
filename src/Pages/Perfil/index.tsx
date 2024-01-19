import DishesList from '../../components/DishesList'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Cover, CoverContainer, Especialty, RestaurantName } from './styles'

const Perfil = () => (
  <>
    <Header />
    <Cover>
      <CoverContainer>
        <Especialty>Italiana</Especialty>
        <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
      </CoverContainer>
    </Cover>
    <DishesList />
    <Footer />
  </>
)
export default Perfil
