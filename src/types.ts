
export type TombalaCard = {
    cardColor:string,
    cardNumbers:number[][],
    cardBoxesColors:string[][],
  } 
  
  export type TombalaProps = {
    cardList:TombalaCard[],
    selectedNumber:number,
  }