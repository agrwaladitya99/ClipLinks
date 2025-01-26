"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto max-w-lg bg-green-100 my-20 p-12 rounded-lg flex flex-col gap-6">
      <h1 className="font-bold text-3xl">Generate your short URLs</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={url}
          className="px-6 py-3 focus:outline-green-600 rounded-md text-lg"
          placeholder="Enter your URL"
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />

        <input
          type="text"
          value={shorturl}
          className="px-6 py-3 focus:outline-green-600 rounded-md text-lg"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
        />
        <button
          onClick={generate}
          className="bg-green-500 rounded-lg shadow-lg p-4 py-2 my-4 font-bold text-xl text-white"
        >
          Generate
        </button>
      </div>

      {generated && (
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xl">Your Link </span>
          <code>
            <Link target="_blank" href={generated} className="text-lg">
              {generated}
            </Link>
          </code>
        </div>
      )}
    </div>
  );
};

export default Shorten;
