import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import Animated, {
  useSharedValue
} from 'react-native-reanimated';

import Logo from '../../assets/logo.svg';
import api from '../../services/api';
import { CarDTO } from '../../dtos/carDTO';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import {
 Container,
 Header,
 HeaderContent,
 TotalCars,
 CarList,
 MyCarsButton
} from './styles';

export function Home(){
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const navegation = useNavigation();
  const theme = useTheme();

  function handleCarDetails(car: CarDTO) {
    navegation.navigate('CarDetails', { car });
  }

  function handleOpenMyCar() {
    navegation.navigate('MyCars', '');
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');

        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  },[]);

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
      { loading ? <Load/> :
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({item}) =>  <Car data={item} onPress={() => handleCarDetails(item)}/> }
        />
      }

      <MyCarsButton onPress={handleOpenMyCar}>
        <Ionicons size={32} name='ios-car-sport' color={theme.colors.shape}/>
      </MyCarsButton>
    </Container>
  );
}