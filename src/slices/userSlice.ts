import { createSlice, PayloadAction } from "@reduxjs/redux-toolkit";

export type User = {
  username: string;
  firstname: string;
  lastname: string;
  roles: string[];
};

export const slice = createSlice({
  name: "user",
  initialState: (null as unknown) as User,
  reducers: {
    receiveUser: (state: User, action: PayloadAction<User>): User => {
      return action.payload;
    }
  }
});

export default slice;

export const getUserFullName = (state?: User): string => {
  return state ? [state.firstname, state.lastname].join(" ").trim() : "";
};

export const getIsLoggedIn = (state?: User): boolean => {
  if (!state) {
    return false;
  }
  return state !== null;
};
