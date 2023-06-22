import { useNavigate } from 'react-router-dom'

import './directory-item.styles.jsx'
import { BackgroundImage, Body, DirectoryItemContainer, Subtitle, Title } from './directory-item.styles.jsx'

const DirectoryItem = ({ category }) => {
    const { title, imageUrl, route } = category

    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)

    return (
      <DirectoryItemContainer onClick = {onNavigateHandler} >
        <BackgroundImage
          imageUrl={imageUrl}
        />
        <Body>
          <Title>{title}</Title>
          <Subtitle>Shop Now</Subtitle>
        </Body>
      </DirectoryItemContainer>
    )

}

export default DirectoryItem