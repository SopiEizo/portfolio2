import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from "microcms-js-sdk";

export type Work = {
  id: String;
  title: String;
  body: String;
  class: String;
  img: String;
  url: String;
  yturl: String;
  ymd: String;
  tools: String;
}

export const client = createClient({
  serviceDomain: 'sopieizo', 
  apiKey: process.env.API_KEY ||"",
});

export const getWorks = async (limit=10, offset=0) => {
  const works = await client.getList<Work>({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "works",
    queries: {
      limit,
      offset,
    }
  });

  if (works.offset + works.limit < works.totalCount) {
    const contents = await getWorks(works.limit, works.offset + works.limit)
    return [...works.contents, ...contents]
  }

  return works.contents;
}

export const getDetail = async (contentId: string) => {
  const work = await client.getListDetail<Work>({
    customRequestInit: {
      cache: "no-store",
    },
      endpoint: "works",
      contentId
  });
  return work;
};