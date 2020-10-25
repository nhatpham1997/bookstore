import { createSelector } from "reselect";

const selectRaw = (state) => state.author;

const selectAuthors = createSelector(
    [selectRaw],
    (author) => author.authors
);
const selectAuthor = createSelector(
    [selectRaw],
    (author) => author.author
);
const selectIsModalShow = createSelector(
    [selectRaw],
    (author) => author.isModalShow
);
const selectSaveLoading = createSelector(
    [selectRaw],
    (author) => author.saveLoading
)

const selectors = {
    selectAuthors,
    selectAuthor,
    selectIsModalShow,
    selectSaveLoading,
};

export default selectors;
