import React,{useState, useEffect} from 'react'
import recomendaciones from '../../staticData/recomendaciones.json'
import { 
    Body,
    Block,
    RecomendationTitle,
    RecommendationContainer,
    Recommendation,
    ImageBlock,
    Image, 
    RecomendationInfo, 
    HotelTopInfoBlock, 
    Category, 
    Title, 
    PunctuationBlock, 
    Punctuation, 
    Opinion, 
    LocationText, 
    DescriptionBlock, 
    Description, 
    Button } from './RecomendacionesComponents'

import { AiFillStar, AiFillHeart } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { BiWifi } from 'react-icons/bi'
import { FaSwimmingPool } from 'react-icons/fa'

const Recomendaciones = () => {

  const [activeLike, setActiveLike] = useState(false)

  const handleActiveHeart = () => {
      setActiveLike(!activeLike)
  }
  
  return (
    <Body>
        <Block>
            <RecomendationTitle>Recomendaciones</RecomendationTitle>
            <RecommendationContainer>
                {
                    recomendaciones.map((item) => {
                        return (
                            <Recommendation key={item.id}>
                                <ImageBlock>
                                    <Image src={item.crimg} alt="" />
                                    <AiFillHeart onClick={handleActiveHeart} className={activeLike ? 'active' : ''}/>
                                </ImageBlock>
                                    <RecomendationInfo>
                                        <HotelTopInfoBlock>
                                            <div>
                                                <Category>{item.category}<div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div></Category>
                                                <Title>{item.title}</Title>
                                            </div>
                                            <PunctuationBlock>
                                                <Punctuation>8</Punctuation>
                                                <Opinion>Muy bueno</Opinion>
                                            </PunctuationBlock>
                                        </HotelTopInfoBlock>
                                        <div>
                                            <LocationText> <HiLocationMarker/> {item.location} <span>mostrar en el mapa</span></LocationText>
                                            <BiWifi/> <FaSwimmingPool/>
                                        </div>
                                        <DescriptionBlock>
                                            <Description>{item.description} <span>mas...</span></Description>
                                            <Button>Ver mas</Button>
                                        </DescriptionBlock>
                                    </RecomendationInfo>
                            </Recommendation>
                        )
                    })
                }
            </RecommendationContainer>
        </Block>
    </Body>
  )
}

export default Recomendaciones