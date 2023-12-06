import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {TombalaCard} from '../types'

const TombalaCardComponent = ({card} : {card:TombalaCard}) => {
  return (
    <View style={[styles.tombalaCard, { backgroundColor: card.cardColor }]}>
      {card.cardNumbers.map((numbers, rowIndex) => (
        <View key={rowIndex} style={styles.cardRow}>
          {numbers.map((num, index) => (
            <View
              key={index}
              style={[
                styles.numberBox,
                card.cardBoxesColors[rowIndex][index] === 'green' ? styles.greenBox : null,
              ]}
            >
              <Text>{num}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tombalaCard: {
    width:220,
    flexDirection: 'column',
    margin:15,
    borderRadius:20,
    alignItems:'center',
    borderWidth:4,
    borderColor:'black',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberBox: {
    width: 30,
    height: 30,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'linen',
  },
  greenBox: {
    backgroundColor: 'green',
  },
});

export default TombalaCardComponent;