import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Appointment {
  petOwner: { _id: string; name: string } | string;
  pet: { _id: string; name: string };
  doctor: { _id: string; name: string };
  appointmentDate: string;
  query: string;
  status: "Pending" | "Approved" | "Rejected";
  doctorResponse: "Pending" | "Responded";
}

interface AppointmentState {
  bookAppointment: Appointment | null;
  appointments: Appointment[];
  
}

const initialState: AppointmentState = {
  bookAppointment: null,
  appointments: [],
};

const appointmentSlice = createSlice({
  name: "appoinment",
  initialState,
  reducers: {
    bookApt: (state, action) => {
      state.bookAppointment = action.payload;
      localStorage.setItem(
        "bookAppointment",
        JSON.stringify(state.bookAppointment)
      );
    },
    setAppointments: (state, action) => {
      state.appointments = action.payload; // Overwrite with API response
    },
  },
});


export const {bookApt, setAppointments} = appointmentSlice.actions;
export default appointmentSlice.reducer;