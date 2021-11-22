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
import Passbook from '../components/Passbook/passbook'

const Home: NextPage = () => {

  return (
    <Layout title="KEIBANK 競馬通帳">
      <Passbook />
    </Layout>
  )
}

export default Home
