import React from "react";
import LibarySong from "./LibarySong";

export default function Libary({ songs }) {
  return (
    <div className="libary">
      <h2>Libary</h2>
      <div>
        {songs.map((song) => (
          <LibarySong song={song} />
        ))}
      </div>
    </div>
  );
}
