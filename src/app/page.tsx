'use client';


import Card from '@/components/card';
import SearchBar from '@/components/search';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
    <Background>
      <SearchBar></SearchBar>
      <CardsWrapper>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </CardsWrapper>
  
    </Background>
   
    </>
  )
}


const Background = styled.div`
font-family: 'Roboto', sans-serif;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;

`

const CardsWrapper = styled.div`
width: 1190px;
height: 300px;
display: flex;
flex-wrap: wrap;



 
`