import {View,Text,TouchableOpacity,StyleSheet,FlatList} from 'react-native'
import {useState} from 'react'
import {TombalaProps, TombalaCard} from '../types'
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons'; 
import TombalaCardComponent from '../components/TombalaCard'
import * as TombalaUtils from '../utils'

const TombalaSingle = () => {

  const [hasFinished,setHasFinished] = useState<boolean>(false)
  const [selectedNumber,setSelectedNumber] = useState<number>(0)
  const [cardList,setCardList] = useState<TombalaCard[]>([])
  const [takenNumbers, setTakenNumbers] = useState<number[]>([]);
  const [winners,setWinners] = useState<number[]>([])

  function addRandomCard() {

    if(cardList.length<2){
    const newNumbers :number[] = [];
    const newBoxesColors = [];

    // Generate new card
    while (newNumbers.length < 13) {
      let randomNumber = Math.floor(Math.random() * 99) + 1;
      if (!newNumbers.includes(randomNumber)) {
        newNumbers.push(randomNumber);
        newBoxesColors.push('linen');
      }
    }

  const newCard: TombalaCard = {
    cardColor: TombalaUtils.getRandomColor(),
    cardNumbers: TombalaUtils.divideListIntoRows(newNumbers),
    cardBoxesColors: TombalaUtils.divideListIntoRows(newBoxesColors),
  };

  setCardList((prevCardList) => [...prevCardList,newCard]);
    }
  }

   function deleteCard(){
    TombalaUtils.deleteCard(cardList,setCardList)
  }


  function getNumberFromBox() {
    TombalaUtils.getNumberFromBox(cardList,takenNumbers,setTakenNumbers,setSelectedNumber,putNumberToCard)
  }

  const putNumberToCard = ({cardList,selectedNumber} : TombalaProps) => {
    TombalaUtils.putNumberToCard({cardList,selectedNumber},setWinners,setHasFinished)
  }


  function restart(){
    TombalaUtils.restart(setCardList,setSelectedNumber,setTakenNumbers,setWinners,setHasFinished)
  }

function renderCard(item:TombalaCard){
      return <TombalaCardComponent card={item} />;
}


return(
    <View style={styles.container}>
      
      {cardList[0] && <MaterialCommunityIcons name={"robot"} size={30}/>}
      {cardList[0] && renderCard(cardList[0])}

      
      {cardList[1] && renderCard(cardList[1])}
      {cardList[1] && <AntDesign name={"user"} size={30}/>}

      {hasFinished ? (
         winners.length === 2 ? (
        <Text style={styles.text}>DRAW!</Text>
        ) : (winners[0] === 0 ? (<Text style={styles.text}>Computer Has Won! </Text>)
      : (<Text style={styles.text}>CONGRATS YOU WON!</Text>))
      ) : (cardList.length<2 ? (<Text style={styles.text}>Add Card!</Text>)
      : (takenNumbers.length>0 && <Text style={styles.text}>Number Drawn: {selectedNumber}</Text>)
      )}

      <View style={styles.bottomBar}>
      {!hasFinished && takenNumbers.length<=0 && <TouchableOpacity 
        style={styles.button} onPress={addRandomCard}>
        <MaterialCommunityIcons name="card-plus" size={40} color="black"/>
      </TouchableOpacity>
      }
      {!hasFinished && <TouchableOpacity style={[styles.button,{backgroundColor:"#654321"}]}
       onPress={getNumberFromBox}>
        <Text style={[styles.text,{color:"linen"}]}>Draw Number</Text>
      </TouchableOpacity>
      }
      {!hasFinished && takenNumbers.length<=0 && <TouchableOpacity 
        style={styles.button} onPress={() => deleteCard()}>
        <MaterialCommunityIcons name="card-remove" size={40} color="black" />
      </TouchableOpacity>
      }
      </View>
      {hasFinished && <TouchableOpacity style={[styles.button,{backgroundColor:"#654321"}]}
       onPress={() => restart()}>
      <Text style={styles.text}>PLAY AGAIN</Text>
      </TouchableOpacity>
      }
    </View>
  );

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'linen'
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  text: {
    fontSize:20,
  }
})

export default TombalaSingle