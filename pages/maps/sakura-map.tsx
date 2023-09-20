import dynamic from "next/dynamic";
import React from "react";

const MapPage = (): JSX.Element => {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("../../components/organisms/Map/index"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return <Map />;
};

export default MapPage;
