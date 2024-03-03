import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "properties",
  initialState: {
    properties: [
        {
            id: 1,
            address: "123 Main St",
            postcode: "ABC123",
            type: "Flat",
            numberOfRooms: 3,
            floorArea: "100 sqm",
          },
          {
            id: 2,
            address: "456 Elm St",
            postcode: "DEF456",
            type: "Terraced house",
            numberOfRooms: 2,
            floorArea: "80 sqm",
          },
        {
            id: 3,
            address: "123 Main St",
            postcode: "ABC123",
            type: "Semi-deteched",
            numberOfRooms: 3,
            floorArea: "100 sqm",
          },
          {
            id: 4,
            address: "456 Elm St",
            postcode: "DEF456",
            type: "Terraced house",
            numberOfRooms: 2,
            floorArea: "80 sqm",
          },
      // Add more dummy data as needed
    ],
    searchQuery: "",
    selectedProperties: [],
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    togglePropertySelection: (state, action) => {
      const propertyId = action.payload;
      const index = state.selectedProperties.indexOf(propertyId);
      if (index === -1) {
        state.selectedProperties.push(propertyId);
      } else {
        state.selectedProperties.splice(index, 1);
      }
    },
  },
});

export const { setSearchQuery, togglePropertySelection } =
  propertySlice.actions;
export default propertySlice.reducer;
