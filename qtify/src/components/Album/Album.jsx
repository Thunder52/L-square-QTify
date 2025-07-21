import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Album = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  const fetchData = async () => {
    try {
      const [res1, res2, res3] = await Promise.allSettled([
        axios.get("https://qtify-backend-labs.crio.do/albums/top"),
        axios.get("https://qtify-backend-labs.crio.do/albums/new"),
        axios.get("https://qtify-backend-labs.crio.do/songs"),
      ]);
      if (res1.status === "fulfilled") {
        setTopAlbums(res1.value.data);
      }

      if (res2.status === "fulfilled") {
        setNewAlbums(res2.value.data);
      }
      if (res3.status === "fulfilled") {
        setSongs(res3.value.data);
      }
      console.log(res3.value.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  async function getData() {
    try {
      const res = await axios.get("https://qtify-backend-labs.crio.do/genres");
      setGenres([{ key: "All", label: "All" }, ...res.data.data]);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  }
  useEffect(() => {
    fetchData();
    getData();
  }, []);

  const handleGenreChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };
  const filteredSongs =
    selectedGenre === "All"
      ? songs
      : songs.filter((song) => song.genre.label === selectedGenre);
  return (
    <div>
      <Section id="top" data={topAlbums} title="Top Albums" />
      <Section id="new" data={newAlbums} title="New Albums" />

      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "#121212",
          padding: "16px",
          color: "#ffffff",
        }}
      >
        <Tabs
          value={selectedGenre}
          onChange={handleGenreChange}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="genre tabs"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#34C94B",
            },
          }}
        >
          {genres?.map((genre) => (
            <Tab
              key={genre.key}
              value={genre.label}
              label={genre.label}
              sx={{ color: "#ffffff", "&.Mui-selected": { color: "#ffffff" } }}
            />
          ))}
        </Tabs>
      </Box>

      <Section
        id="songs"
        data={filteredSongs}
        title="Songs"
        hideExpand={true}
      />
    </div>
  );
};

export default Album;
