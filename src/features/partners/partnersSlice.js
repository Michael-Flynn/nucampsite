import { createSlice } from '@reduxjs/toolkit';
import { PARTNERS } from '../../app/shared/PARTNERS.js';

const initialState = {
    partnersArray: PARTNERS
};

const partnersSlice = createSlice({
    name:'partners',
    initialState
});

export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) => {
    return state.partners.partnerArray;
};

export const selectFeaturedPartners = (state) => {
    return state.partners.partnersArray.find(
        (partner) => (partner.featured)
    );
};