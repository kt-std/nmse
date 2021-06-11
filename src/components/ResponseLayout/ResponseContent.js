import React from 'react';
import styles from './style.css';
import SortSelect from '../SortSelect';
import SelectedFiltersLayout from '../SelectedFiltersLayout';
import MediaCards from '../MediaCards';
import NoResults from '../NoResults';

//TODO: fix searchValue update when input is changed (total hits for*)
export default function ResponseContent({ media }) {
  const data = media.data;
  return !media.data.noResults ? (
    <div className={styles.cards__wrapper} id="cardsWrapper">
      <div className={styles.sort_hits_wrapper}>
        <h3 className={styles.total_hits}>
          Total hits {media.data.totalHits} for {media.searchParams.searchValue}
        </h3>

        <SortSelect
          data={media.data}
          sort={media.sort}
          filter={media.filter}
          mediaTypes={media.searchParams.mediaTypes}
        />
      </div>
      <SelectedFiltersLayout filter={media.filter} data={data} />
      <MediaCards data={media.data} />
    </div>
  ) : (
    <NoResults />
  );
}
