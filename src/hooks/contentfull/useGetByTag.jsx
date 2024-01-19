import contentfulClient from "contentfulClient";
import { useState } from "react";

function useGetByTag() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [total, setTotal] = useState(null);

  const getContentByTag = async (tag, limit = undefined, skip = undefined) => {
    setLoading(true);
    try {
      const res = await contentfulClient.getEntries({
        "metadata.tags.sys.id[in]": tag,
        content_type: "academy",
        limit,
        skip,
      });

      setData(res.items);
      setLoading(false);
      setTotal(res.total);
      return res.items;
    } catch (error) {
      console.log("error ===");
      console.log(error);

      setError(error);
    }

    setLoading(false);
  };

  return {
    data,
    error,
    isLoading,
    getContentByTag,
    total,
  };
}

export default useGetByTag;
