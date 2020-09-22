import React, { useContext, useReducer } from 'react';

const UPDATE_SECONDS = 'UPDATE_SECONDS';

type Coords = {
  latitude: number;
  longitude: number;
};

type AppState = {
  timeInSeconds: number;
  coords: Coords;
};

const initialAppState = {
  timeInSeconds: 0,
  coords: {
    // Coords of Medvedkovo
    latitude: 55.887473,
    longitude: 37.661527
  },
};

type UpdateSecondsAction = {
  type: typeof UPDATE_SECONDS;
}

const createUpdateSecondsAction = (): UpdateSecondsAction => ({
  type: UPDATE_SECONDS,
});

const calculateSeconds: () => number = () => {
  let timePerformance: number = performance.now()

  let performanceSeconds: number = Math.round(timePerformance / 1000)

  return performanceSeconds;
}

const appReducer = (state: AppState, action: UpdateSecondsAction) => {
  switch (action.type) {
    case UPDATE_SECONDS:
      return {
        ...state,
        timeInSeconds: calculateSeconds()
      };
    default:
      return state;
  }
}

type AppContextType = {
  timeInSeconds: number;
  coords: Coords;
  tickTime: () => void;
};

const AppContext = React.createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const appData = useContext(AppContext);

  if (appData === undefined) {
    throw new Error('Unexpected appData state');
  }

  return appData;
}

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  const tickTime = () => {
    dispatch(createUpdateSecondsAction());
  };

  return (
    <AppContext.Provider value={{
      timeInSeconds: state.timeInSeconds, coords: state.coords, tickTime,
    }}>
      {children}
    </AppContext.Provider>
  )
}