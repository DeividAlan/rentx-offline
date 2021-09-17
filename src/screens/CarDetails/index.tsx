import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import {
 Container,
 Header,
 CarImages,
 Content,
 Details,
 Description,
 Brand,
 Name,
 Rent,
 Period,
 Price,
 Accessories,
 Abount,
 Footer
} from './styles';

export function CarDetails(){
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider 
          imagesUrl={['https://production.autoforce.com/uploads/version/profile_image/2175/model_main_comprar-2-5-tfsi_939eb0c299.png']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory icon={SpeedSvg} name="380Km/h"/>
          <Accessory icon={AccelerationSvg} name="3.2w"/>
          <Accessory icon={ForceSvg} name="800 HP"/>
          <Accessory icon={GasolineSvg} name="Gasolina"/>
          <Accessory icon={ExchangeSvg} name="Auto"/>
          <Accessory icon={PeopleSvg} name="2 pessoas"/>
        </Accessories>

        <Abount>
          Este é automóvel desportivo. 
          Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
          É um belíssimo carro para quem gosta de acelerar.
        </Abount>
        
      </Content>

      <Footer>
        <Button title="Confirmar"/>
      </Footer>
    </Container>
  );
}