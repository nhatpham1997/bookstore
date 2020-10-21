import { createSelector } from "reselect";

const selectRaw = (state) => state.publisher;

const selectPublishers = createSelector(
    [selectRaw],
    (publisher) => publisher.publishers
);
const selectPublisher = createSelector(
    [selectRaw],
    (publisher) => publisher.publisher
);
const selectIsModalShow = createSelector(
    [selectRaw],
    (publisher) => publisher.isModalShow
);
const selectSaveLoading = createSelector(
    [selectRaw],
    (publisher) => publisher.saveLoading
)

const selectors = {
    selectPublishers,
    selectPublisher,
    selectIsModalShow,
    selectSaveLoading,
};

export default selectors;
