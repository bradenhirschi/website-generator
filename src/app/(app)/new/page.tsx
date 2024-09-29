"use client"

import { ReactNode } from "react";
import SearchForBusiness from "./components/search-for-business";
import SelectBusiness from "./components/select-business";
import { useNewSiteContext } from "./new-site-context";
import BusinessData from "./components/business-data";

export default function NewSitePage() {
  const { step } = useNewSiteContext();

  let child: ReactNode;

  switch (step) {
    case 0:
      child = <SearchForBusiness />;
      break;
    case 1:
      child = <SelectBusiness />;
      break;
    case 2:
      child = <BusinessData />;
      break;
  }

  return <div className="flex-1 p-10">{child}</div>;
}
