import { createSelector } from "reselect";

const selectRaw = (state) => state.category;

const selectCategories = createSelector(
    [selectRaw],
    (category) => category.categories
);
const selectCategory = createSelector(
    [selectRaw],
    (category) => category.category
);
const selectIsModalShow = createSelector(
    [selectRaw],
    (category) => category.isModalShow
);
const selectSaveLoading = createSelector(
    [selectRaw],
    (category) => category.saveLoading
)

const selectors = {
    selectCategories,
    selectCategory,
    selectIsModalShow,
    selectSaveLoading,
};

export default selectors;
