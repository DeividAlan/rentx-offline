import React, { useState, useEffect } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';
import { LoadAnimation } from '../../components/LoadAnimation';

import { Car } from '../../components/Car';
import { CarDTO } from '../../dtos/carDTO';
import api from '../../services/api';

import {
 Container,
 Header,
 Title,
 SubTitle,
 Content,
 Appointements,
 AppointmentsTitle,
 AppointmentsQuantity,
 CarWrapper,
 CarFooter,
 CarFooterTitle,
 CarFooterPeriod,
 CarFooterDate
} from './styles';

interface CarProps {
  id: number;
  user_id: number;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function MyCars(){
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get(`/schedules_byuser?user_id=1`);
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  },[])

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle='light-content'
          translucent
          backgroundColor='transparent'
        />
        <BackButton
          onPress={() => handleBack()}
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de inicio e {'\n'}
          fim do aluguel
        </Title>

        <SubTitle>
          Conforto, Seguranca e praticidade.
        </SubTitle>
      </Header>
      {loading ? <LoadAnimation/> : 
        <Content>
          <Appointements>
            <AppointmentsTitle>Agendamentos Feitos</AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointements>

          <FlatList
            data={cars}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Periodo</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name='arrowright'
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      }
    </Container>
  );
}