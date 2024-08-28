import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from "microcms-js-sdk";

export type Work = {
  id: string;
  title: String;
  body: String;
  class: String;
  img: {
    url: string;
    height: number;
    width: number;
  };
  url: String;
  yturl: string;
  ymd: String;
  tools: String;
}

export const client = createClient({
  serviceDomain: 'sopieizo', 
  apiKey: process.env.API_KEY ||"",
});

export const getWorks = async (limit=10, offset=0): Promise<Work[]> => {
  const works = await client.getList<Work>({
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
      endpoint: "works",
      contentId
  });
  return work;
};