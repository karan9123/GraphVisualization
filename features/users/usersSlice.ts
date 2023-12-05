// features/users/usersSlice.ts
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {User} from '/Users/karan/Documents/Tale/GraphVisualization/types'; // Import the User type
import {fetchUsers as fetchUsersApi} from '/Users/karan/Documents/Tale/GraphVisualization/services/apiService';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetchUsersApi();
  return response.data; // Assuming the response has a data property
});

const initialState = {
  users: [],
  // additional state properties
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Define reducers and actions
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    // Handle other cases like pending and rejected if needed
  },
});

export default usersSlice.reducer;
