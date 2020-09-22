import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'

import { Container, createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'

/* Components */
import { Nav } from './components/Nav'
import { Timer } from './components/Timer'

/* Pages */
import { AboutPage } from './pages/AboutPage'
import { MapPage } from './pages/MapPage'
import { TimerPage } from './pages/TimerPage'


const AppTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: '"Roboto", sans-serif',
          backgroundColor: '#111111',
          color: '#FFFFFF'
        }
      }
    }
  }
})

export const App: React.FC = () => {
  return (
    <>
      <Timer />
      <ThemeProvider theme={AppTheme}>
        <CssBaseline />
        <Container maxWidth="md" >
          <HashRouter hashType="noslash">
            <Nav />
            <Switch>
              <Route component={AboutPage} path="/" exact />
              <Route component={MapPage} path="/map" />
              <Route component={TimerPage} path="/timer" />
            </Switch>
          </HashRouter>
        </Container>
      </ThemeProvider>
    </>
  )
};
