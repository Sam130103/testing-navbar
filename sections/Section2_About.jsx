'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import SupportIconImage from '../public/images/support-icon.svg';
import ShieldIconImage from '../public/images/shield-icon.svg';
import SimpleIconImage from '../public/images/simple-icon.svg';
// import styles from '../styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A232E',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const message = 'Guest Lecture Series featuring the worlds greatest speakers!';
const messageA = 'GLS';

const message1 = 'Explore a plethora of events focused on various technological domains.';
const messageB = 'Events';

const message2 = 'A footfall of around 80k+ was recorded in the previous year.';
const messageC = 'Footfall';

const AutoGridNoWrap = () => (
  <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }} className="BOX">
    <StyledPaper
      sx={{
        my: 1,
        mx: 'auto',
        p: 2,
      }}
    >
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar sx={{ width: 50, height: 50, bgcolor: 'white' }}><Image alt="GLS Section" src={SupportIconImage} /> </Avatar>
        </Grid>
        <Grid item xs>
          <Typography style={{ paddingTop: '5px', color: '#ffffff', fontSize: '22px' }}>{messageA}</Typography>
          <Typography style={{ color: '#26A699', fontSize: '17px' }}>{message}</Typography>
        </Grid>
      </Grid>
    </StyledPaper>
    <StyledPaper
      sx={{
        my: 1,
        mx: 'auto',
        p: 2,
      }}
    >
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar sx={{ width: 50, height: 50, bgcolor: 'white' }}><Image alt="Events Section" src={ShieldIconImage} /> </Avatar>
        </Grid>
        <Grid item xs>
          <Typography style={{ paddingTop: '5px', color: '#ffffff', fontSize: '22px' }}>{messageB}</Typography>
          <Typography style={{ color: '#26A699', fontSize: '17px' }}>{message1}</Typography>
        </Grid>
      </Grid>
    </StyledPaper>
    <StyledPaper
      sx={{
        my: 1,
        mx: 'auto',
        p: 2,
      }}
    >
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item style={{ color: 'white' }}>
          <Avatar sx={{ width: 50, height: 50, bgcolor: 'white' }}><Image alt="Footfall Section" src={SimpleIconImage} /> </Avatar>
        </Grid>
        <Grid item xs>
          <Typography style={{ paddingTop: '5px', color: '#ffffff', fontSize: '22px' }}>{messageC}</Typography>
          <Typography style={{ color: '#26A699', fontSize: '17px' }}>{message2}</Typography>
        </Grid>
      </Grid>
    </StyledPaper>
  </Box>
);

export default AutoGridNoWrap;
