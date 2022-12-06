import * as React from 'react';

export interface IContextProviderProps {
    children:any,
}
interface IContext{
    currentElement:string,
    setCurrentElement:(data:string)=> void,
    position: string[],
    setPosition:(data:string[])=>void
}
const initalContextVal={
    currentElement:'',
    setCurrentElement:(data:string)=>{},
    position:[],
    setPosition: (data:string[])=>{}
}
const Context=React.createContext<IContext>(initalContextVal);


 function ContextProvider (props: IContextProviderProps) {
    const [currentElement,setCurrentElement]=React.useState('');
    const [position,setPosition]=React.useState(['']);
  return (
    <Context.Provider value={{currentElement,setCurrentElement,position,setPosition}}>
      {props.children}
    </Context.Provider>
  );
}
export default {Context,ContextProvider};