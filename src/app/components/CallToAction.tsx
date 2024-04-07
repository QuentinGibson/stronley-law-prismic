import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import React from "react";
import Bounded from "./Bounded";

export default function CallToAction({
  settings,
}: {
  settings: Content.SettingsDocument;
}) {
  return (
    <Bounded data-slice-type={settings.type} className="bg-[#ebf8ff]">
      <h2 className="relative text-3xl font-bold after:absolute after:bottom-0 after:top-0 after:m-auto after:block after:h-[1px] after:w-full after:border after:border-blue-800 md:text-4xl">
        <span className="relative z-10 mx-auto block w-fit bg-[#ebf8ff] px-4">
          <PrismicText field={settings.data.cta_title} />
        </span>
      </h2>
      <PrismicNextLink
        className="mx-auto mt-8 w-fit bg-blue-800 p-5 py-2 text-2xl font-bold uppercase text-white hover:bg-blue-900"
        field={settings.data.cta_link}
      >
        {settings.data.cta_label}
      </PrismicNextLink>
    </Bounded>
  );
}
