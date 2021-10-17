import React, { useRef, useState, useCallback } from 'react';
import { FlatList, ViewToken } from 'react-native';

import {
 Container,
 ImageIndexes,
 ImageIndex,
 CarImageWrapper,
 CarImage,
} from './styles';
interface Props {
  imagesUrl: {
    id: string;
    photo: string;
  }[];
}

interface ChangeImageProps{
  viewableItems: ViewToken[];
  change: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props){
  const [imageIndex, setImageIndex] = useState(0);

  const onViewableItemsChanged = ({
    viewableItems,
  }) => {
    setImageIndex(viewableItems[viewableItems.length-1].index);
  };

  const viewabilityConfigCallbackPairs = useRef([
    { onViewableItemsChanged },
  ]);

  return (
    <Container>
      <ImageIndexes>
        {
          imagesUrl.map((item, index) => (
            <ImageIndex
              key={item.id}
              active={index === imageIndex} 
            />
          ))
        }
      </ImageIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={( item ) => item.id}
        renderItem={({item}) => (
          <CarImageWrapper>
            <CarImage 
              source={{uri: item.photo}}
              resizeMode="contain"
            />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />


    </Container>
  );
}