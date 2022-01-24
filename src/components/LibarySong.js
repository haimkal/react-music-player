import React from "react";

export default function LibarySong({ song }) {
  return (
    <div className="libary-song">
      <img alt={song.name} src={song.cover} />
      <h3>{song.name}</h3>
      <h4>{song.artist}</h4>
    </div>
  );
}
