import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton/indez';

import {
 Container,
 Content,
 Title,
 Message,
 Footer,
} from './styles';

export function SchedulingComplete(){
  const { width } = useWindowDimensions();
  const navegation = useNavigation();

  function handleConfirm() {
    navegation.navigate('Home', '');
  } 

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <LogoSvg width={width}/>

      <Content>
        <DoneSvg width={80} height={80}/>
        <Title>Carro alugad!</Title>

        <Message>
          Agora você so preicsa ir {'\n'}
          até a consecionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirm}/>
      </Footer>

    </Container>
  );
}