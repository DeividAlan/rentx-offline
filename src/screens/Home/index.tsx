import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
 Container,
 Header,
 HeaderContent,
 TotalCars,
 CarList
} from './styles';

export function Home(){
  const carDataOne = {
    brand: 'AUDI', 
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120
    },
    thumbnail: 'https://production.autoforce.com/uploads/version/profile_image/2175/model_main_comprar-2-5-tfsi_939eb0c299.png'
  }

  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1,2,3,4,5,6,7]}
        keyExtractor={item => String(item)}
        renderItem={({item}) =>  <Car data={carDataOne}/> }
      />
    </Container>
  );
}