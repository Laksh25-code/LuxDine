import React, { useEffect, useRef } from "react";

/**
 * LordIcon React wrapper — creates <lord-icon> element imperatively.
 * Props:
 *  - src (string): CDN url (e.g. https://cdn.lordicon.com/wloilxuq.json)
 *  - trigger (string): 'hover', 'loop', 'click', etc.
 *  - colors (string): "primary:#CAA86B,secondary:#F5F5F5"
 *  - style (object): JS style object for width/height etc.
 *  - className, aria-hidden, title, etc.
 */
export default function LordIcon({ src, trigger = "hover", colors, style = {}, className, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // remove previous icon if any
    ref.current.innerHTML = "";

    const el = document.createElement("lord-icon");
    if (src) el.setAttribute("src", src);
    if (trigger) el.setAttribute("trigger", trigger);
    if (colors) el.setAttribute("colors", colors);

    // apply inline style object (width/height)
    for (const [k, v] of Object.entries(style)) {
      // convert JS style keys to CSS (e.g., width -> width)
      el.style[k] = v;
    }

    // pass any other attributes
    Object.keys(rest).forEach((key) => {
      if (rest[key] != null) el.setAttribute(key, rest[key]);
    });

    ref.current.appendChild(el);

    // cleanup on unmount
    return () => {
      if (ref.current) ref.current.innerHTML = "";
    };
  }, [src, trigger, colors, JSON.stringify(style), className]); // style json used to trigger effect

  return <span ref={ref} className={className} aria-hidden="true" />;
}
