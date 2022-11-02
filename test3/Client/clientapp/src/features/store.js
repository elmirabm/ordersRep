import { configureStore } from '@reduxjs/toolkit';

import orderslice from './orders';

export const store = configureStore({
    reducer:{
      orders:orderslice.reducer
    },
  });

