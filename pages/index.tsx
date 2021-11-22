import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

import { Paper } from '@mui/material'
import { Grid } from '@mui/material'

import Layout from '../components/Layout'
import Ratecard from '../components/Top/Ratecard'
import RaceList from '../components/Top/RaceList'

const Home: NextPage = () => {

  interface Racedata {
    name: string,
    grade: 'L' | 'OP' | 'G3' | 'G2' | 'G1' | 'J-G3' | 'J-G2' | 'J-G1',
    course: string,
    date: string
  }

  // レースリスト(仮)
  const raceList: Racedata[] = [
    {
      name: "ジャパンカップ",
      grade: "G1",
      course: "東京",
      date: '2021-11-28'
    },{
      name: "ジャパンカップ",
      grade: "G2",
      course: "東京",
      date: '2021-11-27'
    },{
      name: "ジャパンカップ",
      grade: "G3",
      course: "東京",
      date: '2021-11-27'
    },{
      name: "ジャパンカップ",
      grade: "OP",
      course: "東京",
      date: '2021-11-27'
    },{
      name: "ジャパンカップ",
      grade: "L",
      course: "東京",
      date: '2021-11-27'
    },{
      name: "ジャパンカップ",
      grade: "J-G3",
      course: "東京",
      date: '2021-11-27'
    },{
      name: "ジャパンカップ",
      grade: "J-G2",
      course: "東京",
      date: '2021-11-27'
    },{
      name: "中山グランドジャンプ",
      grade: "J-G1",
      course: "東京",
      date: '2021-11-27'
    }

  ]
  return (
    <Layout title="KEIBANK メニュー">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Ratecard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RaceList racedata={raceList}/>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Home
