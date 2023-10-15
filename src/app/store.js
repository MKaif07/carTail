import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import carReducer from "../features/cars/carSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    car: carReducer,
  },
});
