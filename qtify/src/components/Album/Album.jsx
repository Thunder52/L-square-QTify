import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";

const Album = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const fetchData = async () => {
    try {
      const [res1, res2] = await Promise.allSettled([
        axios.get("https://qtify-backend-labs.crio.do/albums/top"),
        axios.get("https://qtify-backend-labs.crio.do/albums/new"),
      ]);
      if (res1.status === "fulfilled") {
        setTopAlbums(res1.value.data);
      }

      if (res2.status === "fulfilled") {
        setNewAlbums(res2.value.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Section id="top" data={topAlbums} title="Top Albums" />
      <Section id="new" data={newAlbums} title="New Albums" />
    </div>
  );
};

export default Album;
