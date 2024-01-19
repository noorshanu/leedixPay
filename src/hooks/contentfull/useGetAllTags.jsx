import contentfulClient from "contentfulClient";
import { useEffect } from "react";
import { useState } from "react";

function useGetAllTags() {
  const [tags, setTags] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getAllTags = async () => {
    try {
      const res = await contentfulClient.getTags();
      setTags(res.items);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTags();
  }, []);

  return {
    tags,
    error,
    isLoading,
  };
}

export default useGetAllTags;
