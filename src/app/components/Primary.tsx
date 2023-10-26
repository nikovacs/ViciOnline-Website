"use client";

import "./Primary.css";

export default function Primary() {
  return (
    <div className="primary">
      <h1>Vici Online</h1>
      <p>Coming Soon!</p>
      {/* <button onClick={}>Join the Discord</button> */}
      <a
        href="https://discord.gg/bKKy5tyNuA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Join the Discord</button>
      </a>
    </div>
  );
}
