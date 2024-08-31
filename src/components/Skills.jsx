import React from "react";

import { CIcon } from '@coreui/icons-react';
import { cibAdobePhotoshop, cibAdobeAfterEffects, cibAdobeIllustrator, cibAdobePremiere, cibWordpress } from '@coreui/icons';


export default function Skills() {
  return (  
    <div className="grid grid-cols-4 place-content-center place-items-center gap-3 md:gap-8 p-4 md:p-8 bg-[#ff8e329c] dark:bg-[#ffad7756] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm text-lg md:text-xl lg:text-5xl text-center text-[#ffffffde]">
      <CIcon icon={cibAdobePhotoshop} size="xl"/>
      <CIcon icon={cibAdobeAfterEffects} size="xl"/>
      <CIcon icon={cibAdobeIllustrator} size="xl"/>
      <CIcon icon={cibAdobePremiere} size="xl"/>
      <CIcon icon={cibWordpress} size="xl"/>
    </div>
  );
}
