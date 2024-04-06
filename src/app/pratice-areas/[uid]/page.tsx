import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("praticearea", params.uid)
    .catch(() => notFound());

  return (
    <Bounded>
      <PrismicRichText field={page.data.title} />
      <PrismicNextImage field={page.data.image} />
      <PrismicRichText field={page.data.body} />
      <PrismicRichText field={page.data.snippet} />
      <SliceZone slices={page.data.slices} components={components} />
    </Bounded>
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
