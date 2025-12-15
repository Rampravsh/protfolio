import { useEffect } from "react";
import { useMatches } from "react-router-dom";

const MetaHandler = () => {
  const matches = useMatches();

  useEffect(() => {
    // Get the most specific match (the last one) that has handle.meta
    const match = matches.filter((match) => Boolean(match.handle?.meta)).pop();

    if (match && match.handle.meta) {
      const { title, description } = match.handle.meta;

      // Update the document title
      if (title) document.title = title;

      // Update the meta description
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "description";
        newMeta.content = description;
        document.head.appendChild(newMeta);
      }
    }
  }, [matches]);

  return null;
};

export default MetaHandler;
