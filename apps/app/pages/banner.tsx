import React, {useState} from 'react';
import {BannerTypes} from "../components/Banner/types";
import BannerModifier from "../components/Banner/BannerModifier";
import {Box} from "@material-ui/core";
import Banner from "../components/Banner/Banner";


const BannerPage = () => {
  const [banner, setBanner] = useState<BannerTypes>();
  return (
    <Box>
      <BannerModifier setBanner={setBanner}/>
      <Banner banner={banner}/>
    </Box>
  )

}

export default BannerPage;
