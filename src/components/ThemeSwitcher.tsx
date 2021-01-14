import React from "react";

const moonPath =
  "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
const sunPath =
  "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 33.991 9.89 26.93 20.209 26.93 27.5 C 26.93 34.791 33.689 45.261 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";

export default function ThemeSwitcher(props: {
  theme: boolean;
  switcher: Function;
}) {
  return (
    <svg
      id="themeSwitcher"
      onClick={() => {
        props.switcher();
      }}
      width="24"
      height="24"
      style={{ paddingBottom: "4px", cursor: "pointer" }}
      viewBox="0 0 55 55"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={props.theme ? "moon" : "sun"}
        d={props.theme ? moonPath : sunPath}
        fill={props.theme ? "#fff" : "#0d0d0d"}
      />
    </svg>
  );
}
