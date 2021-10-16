import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectShop = state => state.collections;
const selectIsFetching = state => state.isFetching;

export const selectShopItems = createSelector(
  [selectShop],
  collections => collections
);
export const selectCollectionsForPreview = createSelector(
    [selectShop],
    collections=> collections ? Object.keys(collections).map(key=>collections[key]):[]
)
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopItems],
    (collections) => collections? collections[collectionUrlParam]:null
  )
);
export const selectIsCollectionFetching = createSelector(
  [selectIsFetching],
  isFetching=>isFetching
)
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  collections => !!collections
)