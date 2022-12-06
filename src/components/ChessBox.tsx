import { Container } from '@mui/material';
import * as React from 'react';
import AppContext from '../provider/AppContext'
import BedroomBabyTwoToneIcon from '@mui/icons-material/BedroomBabyTwoTone';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';

export interface IChessBoxProps {
    color:string,
    row:Number,
    col:Number,
    cell:string
}

export function ChessBox (props: IChessBoxProps) {

    const context=React.useContext(AppContext.Context);

    const handleClick=()=>{
        identifyPositions();
    }

    const identifyPositions=()=>{
        let row=props.row;
        let col=props.col;
        let pos1='c'+(Number(row)-1)+(Number(col)-2);
        let pos2='c'+(Number(row)+1)+(Number(col)-2);
        let pos3='c'+(Number(row)-2)+(Number(col)-1);
        let pos4='c'+(Number(row)+2)+(Number(col)-1);
        let pos5='c'+(Number(row)-2)+(Number(col)+1);
        let pos6='c'+(Number(row)+2)+(Number(col)+1);
        let pos7='c'+(Number(row)-1)+(Number(col)+2);
        let pos8='c'+(Number(row)+1)+(Number(col)+2);
        let arr=[pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8];
        console.log(arr);
        context.setPosition(arr);
        context.setCurrentElement(props.cell);
    }
  return (
    <>
      <div style={{ "backgroundColor":props.color,"width":"100%","aspectRatio":"1"}} onClick={handleClick}>
        {props.cell}
        {context.currentElement===props.cell?<Container><BedroomBabyTwoToneIcon sx={{fontSize:40}} /></Container>:<></>}
        {context.position.includes(props.cell)?<Container><CircleTwoToneIcon sx={{fontSize:40}}/></Container>:<></>}
        
      </div>
    </>
  );
}
