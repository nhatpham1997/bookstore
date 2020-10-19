import {createSelector} from 'reselect';

const selectRaw = (state) => state.publisher;

const selectPublisher = createSelector([selectRaw], (publisher) => publisher.publisher);
const selectPublisherList = createSelector([selectRaw], (publisher) => publisher.publisherList);