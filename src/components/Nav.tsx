import React from 'react'
import { NavLink } from 'react-router-dom'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import { ListItem } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      justifyContent: 'space-between',
    },
    link: {
      display: 'block',
      fontSize: '1.2rem',
      letterSpacing: '1px',
      color: '#FFFFFF',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      textAlign: 'center',
      position: 'relative',
    },
    active: {
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        backgroundColor: '#FFFFFF'
      }

    }
  })
);

export const Nav: React.FC = () => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root} disableGutters >
      <ListItem className={classes.link} activeClassName={classes.active} component={NavLink} to="/" exact >О себе</ListItem>
      <ListItem className={classes.link} activeClassName={classes.active} component={NavLink} to="/map" >Местоположение</ListItem>
      <ListItem className={classes.link} activeClassName={classes.active} component={NavLink} to="/timer" >Таймер</ListItem>
    </Toolbar>
  )
}

