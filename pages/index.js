import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import ItemList from '../src/component/ItemList';
import { Divider, Header } from 'semantic-ui-react';
import Axios from 'axios';


export default function Home() {
  const [list, setList] = useState([]);

  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  function getData(){
    Axios.get(API_URL).then(res=>{
      console.log(res.data);
      setList(res.data);
    })
  }
  useEffect(()=>{
    getData();
  },[]);
  return (
    <div>
      <Head>
        <title>Home | next-js</title>
      </Head>
      <Header as="h3" style={{paddingTop: 40}}>베스트 상품</Header>
      <Divider />
      <ItemList list={list.slice(0,3)}/>

      <Header as="h3" style={{paddingTop: 40}}>신 상품</Header>
      <Divider />
      <ItemList list={list.slice(3)}/>
    </div>
  )
}
