import {MapShema} from '../store/MapStore';

export const getScreenArea = (state: MapShema) => state.coordinates.screenArea;
export const getTouchCoords = (state: MapShema) => state.coordinates.touchCoords;
export const getSelectPoint = (state: MapShema) => state.selectPoint;
export const getStreetData = (state: MapShema) => state.streetData;
export const getPoints = (state: MapShema) => state.points;
export const getSetStreetData = (state: MapShema) => state.setStreetData;
export const getClearStreetData = (state: MapShema) => state.clearStreetData;
export const getSetSelectPoint = (state: MapShema) => state.setSelectPoint;
export const getSetScreenArea = (state: MapShema) => state.setScreenArea;
export const getSetTouchCoords = (state: MapShema) => state.setTouchCoords;
export const getSetPoints = (state: MapShema) => state.setPoints;
export const selectSetComment = (state: MapShema) => state.setComment;
export const selectComment = (state: MapShema) => state.comment;

