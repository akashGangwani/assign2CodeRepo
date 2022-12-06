import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import { ChessBox } from './ChessBox';

export interface IChessBoardProps {
}

export default function ChessBoard (props: IChessBoardProps) {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      let chessGrid:any=[];
      const createGrid=()=>{
        for(let i=1;i<=8;i++){
            for(let j=1;j<=8;j++){
                let color=(i%2===0 || j%2===0) && !(i%2===0 && j%2===0)?"#682a08db":"white";
                let a=<Grid key={'c'+i+j} xs={1} ><Item><ChessBox color={color} cell={'c'+i+j} row={i} col={j}></ChessBox> </Item> </Grid>
                chessGrid.push(a);
           
            }
        }
        return chessGrid;

      }
  return (
    <>
    <Container sx={{width:"50%"}}>
    <Box sx={{flexGrow:1,backgroundColor:'black',padding:'1px',border:'10px solid #d0a31b99'}}>
    <Grid container columns={{xs:8, sm: 8 ,md: 8}} spacing={0.2}>
    {createGrid()}
    </Grid>
    </Box>
    </Container>
      
    </>
  );
}
