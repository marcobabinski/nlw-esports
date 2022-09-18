import React from 'react';
import { View, Image, FlatList } from 'react-native';

import imgLogo from '../../assets/logo-nlw-esports.png'

import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

import { styles } from './styles';

import { GAMES } from '../../utils/games';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={imgLogo} style={styles.logo}/>
      <Heading title='Encontre seu duo!' subtitle='Selecione o game que deseja jogar...'/>
      <FlatList 
        data={GAMES} 
        keyExtractor={item => item.id} 
        horizontal
        renderItem={({item}) => (
          <GameCard data={item}/>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        >
      </FlatList>
    </View>
  );
}