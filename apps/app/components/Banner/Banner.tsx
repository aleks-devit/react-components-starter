import React, {FC} from 'react';
import {BannerTypes} from "./types";
import {makeStyles} from "@material-ui/core";

interface BannerInterface {
  banner: BannerTypes
}

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: 'lightgreen',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: '20px',
    wordBreak: 'break-all',
    padding: '10px'
  },
}));

const Banner: FC<BannerInterface> = ({banner}) => {
  const classes = useStyles();
  return (
    <>
      {banner &&
      <div className={classes.banner} style={{height: banner.height + 'vh',}}>
        {banner.text}
      </div>
      }
    </>
  );
};

export default Banner;
