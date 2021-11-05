import React, {FC} from 'react';
import {BannerTypes} from "./types";

interface BannerInterface {
  banner: BannerTypes
}

const Banner: FC<BannerInterface> = ({banner}) => {
  return (
    <>
      {banner &&
      <div style={{
        height: banner.height + 'vh',
        backgroundColor: '#03fc88',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: '20px',
        wordBreak: 'break-all',
        padding: '10px'
      }}>
        {banner.text}
      </div>
      }
    </>
  );
};

export default Banner;
