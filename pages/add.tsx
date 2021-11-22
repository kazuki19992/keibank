import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

import { Button, FormControl, InputLabel, MenuItem, Paper, Select } from '@mui/material'
import { Grid } from '@mui/material'

import Layout from '../components/Layout'
import { useState } from 'react'
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { redirect } from 'next/dist/server/api-utils'


const Home: NextPage = () => {
  const [raceName, setRaceName] = useState('')
  const [raceGrade, setRaceGrade] = useState('')
  const [bet, setBet] = useState(0)
  const [ret, setRet] = useState(0)

  const updateStateHundle = (e:any, type: string) => {
    console.log(type)
    console.log(e.target.value)
    const value = e.target.value
    switch(type){
      case 'name':{
        setRaceName(value)
        break
      }
      case 'grade':{
        setRaceGrade(value)
        break
      }
      case 'bet':{
        const num = parseInt(value, 10)
        if(!isNaN(num)){
          console.log('NaN外', num)
          setBet(num)
        }else{
          if(value !== ''){
            alert("数字外のものが入力されました")
          }
        }
        break
      }
      case 'ret':{
        const num = parseInt(value, 10)
        if(!isNaN(num)){
          setRet(num)
        }else{
          if(value !== ''){
            alert("数字外のものが入力されました")
          }
        }
        break
      }
    }
  }

  const submit = () => {
    const betdata = localStorage.getItem('betdata')
    if(betdata) {
      // すでにデータが存在した場合
      console.log("データが見つかったよ！")
      const list = JSON.parse(betdata)
      const now = new Date()
      const today = now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate()
      const listObject = {
        date: today,
        name: raceName,
        grade: raceGrade,
        bet: bet,
        return: ret,
        balance: ret - bet
      }
      list.unshift(listObject)
      console.log(list)
      localStorage.setItem('betdata', JSON.stringify(list))
      alert("記帳しました！")
    }else{
      // データが存在しなかった場合
      console.log("データが無かったよ！")
      const now = new Date()
      const today = now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate()
      const list = []
      const listObject = {
        date: today,
        name: raceName,
        grade: raceGrade,
        bet: bet,
        return: ret,
        balance: ret - bet
      }
      list.push(listObject)
      console.log(list)
      localStorage.setItem('betdata', JSON.stringify(list))
      alert("通帳を作成して記帳しました！")
    }
    location.href = '/'
  }

  return (
    <Layout title="KEIBANK 通帳記帳">
      <Typography variant="h4">
        通帳記帳
      </Typography>
      <div style={{margin: '20px 0px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField id="raceNameField" label="レース名" onChange={(e) => updateStateHundle(e, 'name')}/>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="race-grade-selector-label">グレード</InputLabel>
              <Select
                labelId="race-grade-selector-label"
                id="raceGradeSelector"
                value={raceGrade}
                label="グレード"
                onChange={(e) => updateStateHundle(e, 'grade')}
              >
                <MenuItem value="Normal">一般競争</MenuItem>
                <MenuItem value="L">リステッド競争</MenuItem>
                <MenuItem value="OP">オープン特別競争</MenuItem>
                <MenuItem value="G3">GIII</MenuItem>
                <MenuItem value="G2">GII</MenuItem>
                <MenuItem value="G1">GI</MenuItem>
                <MenuItem value="J-G3">J-GIII</MenuItem>
                <MenuItem value="J-G2">J-GII</MenuItem>
                <MenuItem value="J-G1">J-GI</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField id="betField" label="購入金額" onChange={(e) => updateStateHundle(e, 'bet')}/>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField id="retField" label="払戻金額" onChange={(e) => updateStateHundle(e, 'ret')}/>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      <Button fullWidth variant="contained" color="primary" onClick={submit}>記帳する！</Button>
    </Layout>
  )
}

export default Home
