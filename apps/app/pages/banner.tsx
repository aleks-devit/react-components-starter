import React from 'react';
import dynamic from 'next/dynamic'

const BannerModifier = dynamic(() => import("../components/Banner/BannerModifier"), {
  ssr: false
})

const BannerPage = () => <BannerModifier/>

export default BannerPage;
