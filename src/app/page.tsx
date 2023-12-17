'use client';


import Card from '@/components/card';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
    <Background>
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

`

const CardsWrapper = styled.div`
width: 1250px;
height: 300px;
display: flex;
flex-wrap: wrap;
margin: 0 auto;

 
`