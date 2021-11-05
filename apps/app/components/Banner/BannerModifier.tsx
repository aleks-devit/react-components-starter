import React, {FC, useEffect, useState} from 'react';
import {BannerTypes} from "./types";
import {Box, makeStyles, Slider, TextareaAutosize} from "@material-ui/core";

interface BannerModifierInterface {
  setBanner: (banner: BannerTypes) => void
}


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1rem',
  },
  textarea: {
    width: 100 + '%',
    resize: 'none',
    display: 'block',
    marginBottom: '30px'
  }
}));

const BannerModifier: FC<BannerModifierInterface> = ({setBanner}) => {
  const classes = useStyles();
  const [text, setText] = useState('')
  const [height, setHeight] = useState(10)

  useEffect(() => {
    setBanner({text, height})
  }, [text, height])

  const handleChangeHeight = (event: React.ChangeEvent<HTMLInputElement>, newValue: number): void => {
    setHeight(newValue);
  };


  return (
    <div className={classes.root}>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Empty"
        className={classes.textarea}
        onChange={e => setText(e.target.value)}
      />
      <span>Height:</span>
      <Box width={300}>
        <Slider value={height} onChange={handleChangeHeight} aria-label="Default" valueLabelDisplay="auto"/>
      </Box>
    </div>

  );
};

export default BannerModifier;
