import React, {FC, useEffect, useState} from 'react';
import {BannerTypes} from "./types";
import {Box, Slider, TextareaAutosize} from "@material-ui/core";

interface BannerModifierInterface {
  setBanner: (banner: BannerTypes) => void
}

const BannerModifier: FC<BannerModifierInterface> = ({setBanner}) => {
  const [text, setText] = useState('')
  const [width, setWidth] = useState(50)
  const [height, setHeight] = useState(10)

  useEffect(() => {
    setBanner({text, width, height})
  }, [text, width, height])

  const handleChangeWidth = (event: React.ChangeEvent<HTMLInputElement>, newValue: number): void => {
    setWidth(newValue);
  };

  const handleChangeHeight = (event: React.ChangeEvent<HTMLInputElement>, newValue: number): void => {
    setHeight(newValue);
  };


  return (
    <div style={{padding: '20px'}}>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Empty"
        style={{width: 100 + '%', resize: 'none', display: 'block', marginBottom: '30px'}}
        onChange={e => setText(e.target.value)}
      />
      <span>Height:</span>
      <div style={{width: '300px'}}>
        <Slider value={height} onChange={handleChangeHeight} aria-label="Default" valueLabelDisplay="auto"/>
      </div>
    </div>

  );
};

export default BannerModifier;
