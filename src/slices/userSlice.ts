import { createSlice, PayloadAction } from "@reduxjs/redux-toolkit";

export type User = {
  username: string;
  firstname: string;
  lastname: string;
  roles: string[];
};

const userSlice = createSlice({
  name: "user",
  initialState: (null as unknown) as User,
  reducers: {
    receiveUser: (state: User, action: PayloadAction<User>) => {
      return action.payload;
    }
  }
});

export default userSlice;
