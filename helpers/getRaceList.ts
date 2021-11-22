import axios from 'axios'
// const client = require('cheerio-httpcli')
interface Racedata {
  name: string,
  grade: 'L' | 'OP' | 'G3' | 'G2' | 'G1' | 'J-G3' | 'J-G2' | 'J-G1',
  course: string,
  date: string
}

const getRaceList = (): Racedata[] => {
  axios.get('./data/2021Race.json').then((res) => {
    console.log(res.data)
    return res.data
  }).catch((err) => {
    throw err
  })
}
export getRaceList