import { createSelector } from "reselect";

const selectRaw = (state) => state.book;

const selectBooks = createSelector(
    [selectRaw],
    (book) => book.books
);
const selectBook = createSelector(
    [selectRaw],
    (book) => book.book
);
const selectIsModalShow = createSelector(
    [selectRaw],
    (book) => book.isModalShow
);
const selectSaveLoading = createSelector(
    [selectRaw],
    (book) => book.saveLoading
);

const selectors = {
    selectBooks,
    selectBook,
    selectIsModalShow,
    selectSaveLoading,
};

export default selectors;
