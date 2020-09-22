import React from 'react'
import { useAppContext } from '../AppContext'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    head: {
      textAlign: 'center',
      fontSize: '1.2rem',
    },
    subhead: {
      textAlign: 'center',
      fontSize: '2rem'
    }
  }),
);

export const TimerPage: React.FunctionComponent = () => {
  const { timeInSeconds } = useAppContext();
  const classes = useStyles();

  const secondsToTime = (numberSeconds: number) => {
    let hours: number = Math.floor(numberSeconds / (60 * 60));

    let divisorMinutes = numberSeconds % (60 * 60);
    let minutes: number = Math.floor(divisorMinutes / 60);

    let divisorSeconds = divisorMinutes % 60;
    let seconds: number = Math.ceil(divisorSeconds);

    return {
      hours,
      minutes,
      seconds
    };
  }

  const { hours, minutes, seconds } = secondsToTime(timeInSeconds);

  return (
    <>
      <Typography variant="subtitle1" className={classes.head} gutterBottom>Со времени открытия сайта прошло:</Typography>
      <Typography variant="subtitle2" className={classes.subhead}>
        {hours < 10 ? '0' + hours : hours}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
      </Typography>
    </>
  )
}