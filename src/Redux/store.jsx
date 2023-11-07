
import { configureStore } from "@reduxjs/toolkit";
import DoctorSlice  from "./DoctorSlice"

export const Store = configureStore({
    reducer: {
      Doctor: DoctorSlice,
    },
  });

  export default Store
