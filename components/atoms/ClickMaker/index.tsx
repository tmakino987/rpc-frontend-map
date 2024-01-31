import { useCallback, useState } from 'react';
import React from 'react';

import { LatLng } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet';

export interface IMakerProps {
  positions: LatLng[];
  setPositions: (positions: LatLng[]) => void;
}

export const ClickMaker = (props: IMakerProps): JSX.Element => {
  //地図のクリックイベント
  useMapEvents({
    click(e) {
      //クリックされた箇所にマーカーを追加
      props.setPositions([...props.positions, e.latlng]);
      console.log('aaa');
    },
  });

  //マーカーの削除
  const handleDelete = useCallback(
    (latlng: LatLng) => {
      props.setPositions(props.positions.filter((x) => !x.equals(latlng)));
    },
    [props.positions],
  );

  return (
    <>
      {props.positions.map((x, index) => (
        <Marker position={x} key={index}>
          <Popup>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation(), handleDelete(x);
              }}
            >
              削除
            </a>
          </Popup>
        </Marker>
      ))}
    </>
  );
};
