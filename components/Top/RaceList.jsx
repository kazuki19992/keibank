import * as React from 'react'
import Card from '@mui/material/Card'
import { CardHeader } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import { useEffect, useState } from 'react'

// スクレイピング用
import axios from 'axios'

export default function RaceList() {
  const [raceList, setRaceList] = useState('取得中...')

  useEffect(() => {
    axios.get('./data/2021Race.json').then((res) => {
      console.log(res.data)
      const list = []
      for(const race of res.data){
        console.log(race)
        const memberJsx = <ListItem disablePadding>{gradeBadge(race.grade)}<ListItemText primary={race.name} secondary={race.date + ' ' + race.course} /></ListItem>
        list.push(memberJsx)
      }
      setRaceList(list)
    })
  }, [])
  return (
    <Card sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <CardHeader title="メインレースカレンダー"/>
      <Divider variant="middle" />
      <nav aria-label="secondary mailbox folders">
        <List>
          {raceList}
        </List>
      </nav>
    </Card>
  );
}

const gradeBadge = (grade) => {
  const badgeStyle = {
    marginLeft: '1em',
    marginRight: '1em',
    paddingTop: '3px',
    paddingBottom: '3px',
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#2196f3',
    borderRadius: 5,
  };
  switch ( grade ) {
    case 'L':{
      badgeStyle.backgroundColor = '#AAAAAA'

      break
    }
    case 'OP':{
      badgeStyle.backgroundColor = '#AAAAAA'
      break
    }
    case 'G3':
    case 'J-G3':{
      badgeStyle.backgroundColor = '#4caf50'
      break
    }
    case 'G2':
    case 'J-G2':{
      badgeStyle.backgroundColor = '#f44336'
      break
    }
    case 'G1':
    case 'J-G1':{
      badgeStyle.backgroundColor = '#2196f3'
      break
    }
    default:{
      badgeStyle.backgroundColor = '#2196f3'
      grade = "一般"
      break
    }
  }
  return (
    <div style={badgeStyle}>
      <span style={{display: 'block', fontWeight: 'bold'}}>{grade}</span>
    </div>
  )
}

// 重賞レース情報を取得する
// const getRaceList = () => {
//   const year = new Date().getFullYear.toString
//   console.log(year)
// }
// const sc