import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import CallToAction from "@/app/components/CallToAction";
import { Content } from "@prismicio/client";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("praticearea", params.uid)
    .catch(() => notFound());
  const settings = (
    await client.getByType<Content.SettingsDocument>("settings")
  ).results[0];

  return (
    <>
      <Bounded>
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className=" text-5xl font-bold md:text-7xl">
            <PrismicText field={page.data.title} />
          </h1>
          <PrismicNextImage field={page.data.image} />
          <div className="prose ">
            <PrismicRichText field={page.data.body} />
          </div>
        </div>
        <SliceZone slices={page.data.slices} components={components} />
      </Bounded>
      <CallToAction settings={settings} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("praticearea", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("praticearea");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
