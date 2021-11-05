import React, {FC, useState} from 'react';
import {TransitionProps} from "@material-ui/core/transitions";
import {Slide} from "@material-ui/core";
import Banner from "./Banner";
import {BannerTypes} from "./types";

export const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BannerModifier: FC = () => {
  const [bannerList, setBannerList] = useState<BannerTypes[] | []>([])
  const [text, setText] = useState('')
  const [width, setWidth] = useState(50)
  const [height, setHeight] = useState(10)
  const [color, setColor] = useState('')
  const [open, setOpen] = useState(false);

  const addBanner = () => {
    setBannerList(prev => [...prev, {text, width, height, color}])
    setOpen(false);
  }
  const deleteBanner = (): void => {
    setBannerList(prev => prev.slice(0, -1))
  }

  const handleChangeWidth = (event: React.ChangeEvent<HTMLInputElement>, newValue: number): void => {
    setWidth(newValue);
  };

  const handleChangeHeight = (event: React.ChangeEvent<HTMLInputElement>, newValue: number): void => {
    setHeight(newValue);
  };


  //Modal handlers===============
  const handleClickOpen = ():void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  //====================

  return (
    <div>
      <Banner
        bannerList={bannerList}
        setText={setText}
        setColor={setColor}
        open={open}
        addBanner={addBanner}
        deleteBanner={deleteBanner}
        handleChangeWidth={handleChangeWidth}
        handleChangeHeight={handleChangeHeight}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        width={width}
        height={height}
        color={color}
        text={text}
      />
    </div>
  );
};

export default BannerModifier;
