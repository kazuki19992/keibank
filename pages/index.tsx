import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

import { Paper } from '@mui/material'
import { Grid } from '@mui/material'
import { Button } from '@mui/material'

import Layout from '../components/Layout'
import Ratecard from '../components/Top/Ratecard'
import RaceList from '../components/Top/RaceList'

const deletePassbook = () => {
  if(confirm("通帳を削除します。本当に良いですか？")){
    if(confirm("後悔しませんね？")){
      localStorage.removeItem('betdata')
      alert("通帳を削除しました")
    }
  }
}

const Home: NextPage = () => {
  return (
    <Layout title="KEIBANK メニュー">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Ratecard />
          <div style={{marginTop: 10}}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Button href="/add" fullWidth color="primary" variant="contained">記帳する</Button>
              </Grid>
              <Grid item xs={4}>
                <Button onClick={deletePassbook} fullWidth color="secondary" variant="outlined">通帳削除</Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <RaceList />
        </Grid>
      </Grid>
    </Layout>
  )
}


export default Home
