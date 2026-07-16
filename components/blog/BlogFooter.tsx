"use client";

import { useState, useEffect } from "react";
import { sanityClient } from "@/lib/sanity";

const COUNT_QUERY = `count(*[_type == "blogPost"])`;
const TAGS_QUERY = `count(array::compact(array::unique(*[_type == "blogPost" && defined(tags)].tags[])))`;

export default function BlogFooter() {
  const [postCount, setPostCount] = useState(0);
  const [catCount, setCatCount] = useState(0);

  useEffect(() => {
    sanityClient.fetch<number>(COUNT_QUERY).then(setPostCount).catch(() => {});
    sanityClient.fetch<number>(TAGS_QUERY).then(setCatCount).catch(() => {});
  }, []);

  return (
    <>
      <div className="blog-footer-strip" aria-label="System status">
        <span>{postCount} ENTRIES</span>
        <span className="footer-divider">&middot;</span>
        <span>{catCount} CATEGORIES</span>
        <span className="footer-divider">&middot;</span>
        <span>ACTIVE SINCE 2025</span>
        <span className="footer-divider">&middot;</span>
        <button type="button" aria-label="Show keyboard shortcuts">
          PRESS ? FOR HELP
        </button>
      </div>
      <div className="blog-webring">
        <a href="https://blr.indiewebclub.org/webring/previous.html">&larr; Previous</a>{" "}
        &middot;{" "}
        <a href="https://blr.indiewebclub.org/">IndieWebClub Bangalore</a>{" "}
        &middot;{" "}
        <a href="https://blr.indiewebclub.org/webring/next.html">Next &rarr;</a>
      </div>
    </>
  );
}
