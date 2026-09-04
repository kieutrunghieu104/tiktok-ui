import * as request from "../utils/request";

export const search = async (q, page, perPage) => {
  try {
    const res = await request.get(`data`, {
      params: {
        "full_name:contains": q,
        _page: page,
        _per_page: perPage,
      },
    });
    return res.data
  } catch (error) {
    console.log(error);
  }
};
