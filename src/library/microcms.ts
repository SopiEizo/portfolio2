import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// 型定義
export type work = {
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
  color: String;
  credit: String;
}

// APIの呼び出し
export const getWorks = async (limit=10, offset=0, queries?: MicroCMSQueries): Promise<work[]> => {
  const works = await client.getList<work>({
    endpoint: "works",
    queries: {
        limit,
        offset,
    }
    });

    if (works.offset + works.limit < works.totalCount) {
        const contents = await getWorks(works.limit, works.offset + works.limit);
        return [...works.contents, ...contents];
    }

    return works.contents;
};

export const getWorkDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<work>({
    endpoint: "works",
    contentId,
    queries,
  });
};