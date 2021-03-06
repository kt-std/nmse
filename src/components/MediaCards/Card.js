import React from 'react';
import styles from './style.css';
import {
  showDescription,
  leaveItemShown,
  getBackground,
  setBackground,
  getCardStyling,
  showDescriptionOnKeyPress,
} from '../../data/mediaData';
import CardDescription from './CardDescription';

export default function Card({ dataItem, index }) {
  const cardClass = [styles.card__item, getCardStyling(dataItem.mediaType, styles)].join(' '),
    background = setBackground(getBackground(dataItem)),
    descriptionId = `description_${index}`;
  return (
    <div className={styles.item_container}>
      <div
        className={cardClass}
        tabIndex="0"
        onBlur={e => leaveItemShown(e, descriptionId, styles.visible)}
        onClick={e => showDescription(styles.visible, descriptionId, e)}
        id={dataItem.id}
        style={background}
        data-title={dataItem.title}
        data-index={index}
        onKeyPress={e => showDescriptionOnKeyPress(e, styles.visible, descriptionId)}
      ></div>
      <CardDescription index={index} dataItem={dataItem} />
    </div>
  );
}
