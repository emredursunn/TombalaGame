export function divideListIntoRows<T>(list: T[]): T[][] {
    const rows: T[][] = [];
    const itemsPerRow = Math.ceil(list.length / 3);
  
    for (let i = 0; i < list.length; i += itemsPerRow) {
      rows.push(list.slice(i, i + itemsPerRow));
    }
  
    return rows;
  }
  
  export function getRandomColor() :string{
    const colorList :string[] = ["#5f45ab","#fb78bb","#acf475","#c19009","#26ab3a","#56b5bb","#fce454","#56e724","#654d44","#b72b16","#ef1b27","#fd5c86","#53fd7f","#72948b","#801605","#b2656b","#d5df17"] 
    let index = Math.floor(Math.random() * colorList.length)
    return colorList[index]
  }
  
  // tombalaUtils.ts
  import { Dispatch, SetStateAction } from 'react';
  import { TombalaCard, TombalaProps } from './types';
  
  
  export function deleteCard(cardList: TombalaCard[], setCardList: Dispatch<SetStateAction<TombalaCard[]>>) {
    if (cardList.length > 0) {
      const newCardList = [...cardList];
      newCardList.pop();
      setCardList(newCardList);
    }
  }
  
  export function getNumberFromBox(
    cardList: TombalaCard[],
    takenNumbers: number[],
    setTakenNumbers: Dispatch<SetStateAction<number[]>>,
    setSelectedNumber: Dispatch<SetStateAction<number>>,
    putNumberToCard: ({ cardList, selectedNumber }: TombalaProps) => void
  ) {
    if(cardList.length>1){
        let randomNumber : number;
        do {
          randomNumber = Math.floor(Math.random() * 99) + 1;
        } while (takenNumbers.includes(randomNumber));
  
        setSelectedNumber(randomNumber);
        setTakenNumbers((prevTakenNumbers) => [...prevTakenNumbers, randomNumber]);
        putNumberToCard({ cardList: cardList, selectedNumber: randomNumber });
      }
  }
  
  
  export function putNumberToCard({cardList ,selectedNumber} : TombalaProps, setWinners: Dispatch<SetStateAction<number[]>>, setHasFinished: Dispatch<SetStateAction<boolean>>){
    let finished = false
      cardList.map((card,index) => {
      const selectedNumberExists = card.cardNumbers.some(row => row.includes(selectedNumber));
        if(selectedNumberExists){
          let newCard = {...card}
          for(let i=0;i<3;i++){
            for(let j=0;j<newCard.cardBoxesColors[i].length;j++){
              if(newCard.cardNumbers[i][j] == selectedNumber){
                newCard.cardBoxesColors[i][j] = 'green'
                if(card.cardBoxesColors.every(row => !row.includes("linen"))){
                  setWinners((prevWinners) => [...prevWinners,index])
                  finished = true
                }
              } 
            }
          }
        }
      })
      if(finished){
        setHasFinished(true)
      }
  }
  
  export function restart(
    setCardList: Dispatch<SetStateAction<TombalaCard[]>>,
    setSelectedNumber: Dispatch<SetStateAction<number>>,
    setTakenNumbers: Dispatch<SetStateAction<number[]>>,
    setWinners: Dispatch<SetStateAction<number[]>>,
    setHasFinished: Dispatch<SetStateAction<boolean>>
  ) {
    setCardList([]);
    setSelectedNumber(0);
    setTakenNumbers([]);
    setWinners([]);
    setHasFinished(false);
  }
  
  