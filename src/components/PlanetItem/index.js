// Write your code here
import {PlanetContainer, Image, Name, Description} from './styledComponents'

const PlanetItem = props => {
  const {details} = props
  const {name, description, imageUrl} = details

  return (
    <PlanetContainer>
      <Image src={imageUrl} alt={`planet ${name}`} className="img" />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </PlanetContainer>
  )
}

export default PlanetItem
