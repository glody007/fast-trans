import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    origin: {
      location: {
        lat: -11.664722,
        long: 27.479444,
      },
      description: 'Ville du cuivre'
    },
    destination: {
      location: {
        lat: -11.664722,
        long: 27.409444,
      },
      description: 'Destination'
    },
    travelTimeInformation: null
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
        state.origin = action.payload.origin
    },
    setDestination: (state, action) => {
        state.destination = action.payload.destination
    },
    setTravelTimeInformation: (state, action) => {
        state.travelTimeInformation = action.payload.travelTimeInformation
    }
  },
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

export const selectOrigin = (state) => state.nav.origin;

export const selectDestination = (state) => state.nav.destination;

export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation

export default navSlice.reducer