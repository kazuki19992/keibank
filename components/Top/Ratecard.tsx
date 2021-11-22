import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Divider, makeStyles } from '@mui/material';
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader';
import { green } from '@mui/material/colors';

const CustomCard = styled(Card)({
  backgroundColor: green[500],
  color: 'white'
})

export const Ratecard = React.memo(function PricingCard() {
  return (
    <div style={{width: '100%'}}>
      <CustomCard>
        <CardHeader title="今までの損益"/>
        <Divider variant="middle" />
        <CardContent>
          <Typography variant="h4" align="center">
            + 250円
          </Typography>
        </CardContent>
        <Divider variant="middle" />
        <CardActions>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', paddingInline: '0.5em'}}>
            <div style={{marginRight: '5px'}}>
              <Button variant="outlined" color="inherit" href="https://www.netkeiba.com/">
                競馬通帳
              </Button>
            </div>
            <div style={{display: 'flex'}}>
              <div style={{marginRight: '5px'}}>
                <Button variant="outlined" color="inherit" href="">
                  ネット投票
                </Button>
              </div>
              <div>
                <Button variant="outlined" color="inherit" href="https://www.netkeiba.com/">
                  netkeiba
                </Button>
              </div>
            </div>
          </div>
        </CardActions>
      </CustomCard>
    </div>
  );
});

export default Ratecard