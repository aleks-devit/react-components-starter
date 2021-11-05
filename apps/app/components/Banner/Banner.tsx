import React, {FC} from 'react';
import {AppBar, Box, Button, Dialog, IconButton, Slider, TextareaAutosize, Toolbar} from "@material-ui/core";
import {HexColorPicker} from "react-colorful";
import {Transition} from "./BannerModifier";
import {BannerTypes} from "./types";
import CloseIcon from '@material-ui/icons/Close';

interface BannerInterface {
  bannerList: BannerTypes[]
  handleClickOpen: () => void
  deleteBanner: () => void
  handleClose: () => void
  addBanner: () => void
  setText: (value: string) => void
  handleChangeWidth: (event: React.ChangeEvent<HTMLInputElement>, newValue: number) => void
  handleChangeHeight: (event: React.ChangeEvent<HTMLInputElement>, newValue: number) => void
  setColor: (value: string) => void
  width: number
  height: number
  color: string
  text: string
  open: boolean
}

const Banner: FC<BannerInterface> = ({
                                       bannerList,
                                       handleClickOpen,
                                       deleteBanner,
                                       handleClose,
                                       addBanner,
                                       setText,
                                       handleChangeWidth,
                                       handleChangeHeight,
                                       setColor,
                                       width,
                                       height,
                                       color,
                                       text,
                                       open
                                     }) => {

  return (
    <div>
      <div>
        <Box sx={{ m: 2}}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add banner
          </Button>
        </Box>
        <Box sx={{ m: 2}}>
          <Button onClick={deleteBanner} variant="outlined">
            Delete last banner
          </Button>
        </Box>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar style={{position: 'relative'}}>
            <Toolbar>
              <Box sx={{ml: 2, flex: 1}}>
                <Button autoFocus color="inherit" onClick={addBanner}>
                  Save
                </Button>
              </Box>

              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div>
            <Box sx={{p: 2}}>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Empty"
                style={{width: 50 + 'vw', resize: 'none'}}
                onChange={e => setText(e.target.value)}
              />
              <div>
                <div>Width:
                  <Box width={300}>
                    <Slider value={width} onChange={handleChangeWidth} aria-label="Default" valueLabelDisplay="auto"/>
                  </Box>
                </div>
                <div>Height:
                  <Box width={300}>
                    <Slider value={height} onChange={handleChangeHeight} aria-label="Default" valueLabelDisplay="auto"/>
                  </Box>
                </div>
                <div>
                  <HexColorPicker color={color} onChange={setColor}/>
                </div>
              </div>
              <div style={{
                height: height + 'vh',
                width: width + 'vw',
                backgroundColor: color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: '10px',
                border: '3px dashed #000000'
              }}>
                {text}
              </div>
            </Box>
          </div>
        </Dialog>
      </div>


      {bannerList.map((item: BannerTypes, index: number) => (
        <div style={{
          height: item.height + 'vh',
          width: item.width + 'vw',
          backgroundColor: item.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: '10px'
        }} key={index}>
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default Banner;
