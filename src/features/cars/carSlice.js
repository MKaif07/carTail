import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCars, getCarWithId } from "./carApi";
import { useParams } from "react-router-dom";

const initialState = {
  status: "idle",
  cars: [],
  selectedCar: null,
};

export const getAllCarsAsync = createAsyncThunk("car/getAllCars", async () => {
  const response = await getAllCars();
  return response.data;
});

export const getCarWithIdAsync = createAsyncThunk(`/car/id`, async (id) => {
  const response = await getCarWithId(id);
  return response.data;
});

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCarsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCarsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cars = action.payload;
      })
      .addCase(getCarWithIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCarWithIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedCar = action.payload;
      });
  },
});

export default carSlice.reducer;
