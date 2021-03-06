import React from 'react';
import styles from './style.css';
import Logo from '../Logo';
import SearchInput from '../SearchInput';
import SearchButton from '../SearchButton';
import PictureOfTheDay from '../PictureOfTheDay';
import MediaTypeSwitcher from '../MediaTypeSwitcher';
import { searchByTerm } from '../../data/mediaData';
import { useSearchValueContext } from '../../context';

export default function SearchLayout({ searchPosition, media }) {
  const { searchInputValue } = useSearchValueContext();
  const { searchParams } = media;
  const searchPositionClass = searchPosition === 'top' ? styles.form_top : styles.form_middle,
    searchClasses = [styles.form__wrapper, searchPositionClass].join(' ');
  return (
    <>
      <div className={searchClasses}>
        {searchPosition === 'top' ? (
          <>
            <Logo media={media} />
            <PictureOfTheDay apod={media.apod} />
          </>
        ) : null}
        <form
          onSubmit={event => searchByTerm(searchInputValue, media, event)}
          id="searchForm"
          className={styles.form}
        >
          <div className={styles.search__box}>
            <MediaTypeSwitcher
              selectedMediaTypes={searchParams.selectedMediaTypes}
              setSelectedMediaTypes={searchParams.setSelectedMediaTypes}
            />
            <SearchInput />
          </div>
          <SearchButton selectedMediaTypes={searchParams.selectedMediaTypes} />
        </form>
      </div>
    </>
  );
}
