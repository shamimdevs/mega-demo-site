// Inline SVG icon set, 24x24 viewBox, colored with currentColor.
const paths = {
  menu: <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />,
  close: <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" />,
  search: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </g>
  ),
  chevronUp: <path d="M5 15l7-7 7 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  headset: (
    <g fill="currentColor">
      <path d="M12 3a8 8 0 0 0-8 8v3.5A2.5 2.5 0 0 0 6.5 17H8v-6H6a6 6 0 0 1 12 0h-2v6h1.2a4 4 0 0 1-3.2 2H12v2h2a6 6 0 0 0 5.6-4.1A2.5 2.5 0 0 0 20 14.5V11a8 8 0 0 0-8-8Z" />
      <circle cx="10" cy="12.5" r="1" fill="#1b2040" />
      <circle cx="14" cy="12.5" r="1" fill="#1b2040" />
    </g>
  ),
  megaphone: <path fill="currentColor" d="M3 10v4a1 1 0 0 0 1 1h2l4 5h2l-2-5h1l8 4V5l-8 4H4a1 1 0 0 0-1 1Z" />,
  hot: (
    <g fill="currentColor">
      <path d="M12 2c1 2 3 3 3 5.5a3 3 0 0 1-6 0c0-1 .4-1.6.9-2.2C10 6.5 11 7 11.5 7 11 5 12 3.5 12 2Z" />
      <path d="M7 10h10a5 5 0 0 1 4.9 5.9l-.5 2.8A2.8 2.8 0 0 1 16.6 20L14 17h-4l-2.6 3a2.8 2.8 0 0 1-4.8-1.3l-.5-2.8A5 5 0 0 1 7 10Zm0 2.5v1.5H5.5v1.5H7V17h1.5v-1.5H10V14H8.5v-1.5H7Zm9.5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
    </g>
  ),
  sports: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path fill="currentColor" d="M12 7.5l3.3 2.4-1.3 3.9h-4L8.7 9.9 12 7.5Z" />
      <path d="M12 7.5V3.5M15.3 9.9l3.9-1.2M14 13.8l2.4 3.3M10 13.8l-2.4 3.3M8.7 9.9 4.8 8.7" />
    </g>
  ),
  casino: <path fill="currentColor" d="M12 2c3 3.5 8 6.5 8 11a4 4 0 0 1-6.3 3.3L15 21H9l1.3-4.7A4 4 0 0 1 4 13c0-4.5 5-7.5 8-11Z" />,
  slot: <path fill="currentColor" d="M5 3h14v4l-6.5 14H7.2l6.3-13.5H9.5V10H5V3Z" />,
  crash: (
    <g fill="currentColor">
      <path d="M12 2c2.8 2 4 5 4 8.5V15H8v-4.5C8 7 9.2 4 12 2Zm0 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
      <path d="M8 12.5 5 15v4l3-2v-4.5Zm8 0V17l3 2v-4l-3-2.5ZM10 16h4l-.5 4h-3l-.5-4Z" />
    </g>
  ),
  table: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2.5" y="6" width="19" height="12" rx="6" />
      <rect x="6.5" y="9.5" width="11" height="5" rx="2.5" fill="currentColor" />
    </g>
  ),
  fishing: <path fill="currentColor" d="M2 8l4 4-4 4 1 2 5-3.5c2 2.5 5 3.5 8 3.5 3 0 5-2.5 6-6-1-3.5-3-6-6-6-3 0-6 1-8 3.5L3 6 2 8Zm15 2.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z" />,
  arcade: (
    <g fill="currentColor">
      <circle cx="12" cy="4.5" r="2.5" />
      <path d="M11 7h2v6h-2z" />
      <path d="M3 15.5 12 12l9 3.5v2L12 21l-9-3.5v-2Zm4.5 0a1 .6 0 1 0 0 1.2 1 .6 0 0 0 0-1.2Z" />
    </g>
  ),
  lottery: (
    <g>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <circle cx="12" cy="12" r="5.5" fill="#1b2040" />
      <text x="12" y="15.4" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor">8</text>
    </g>
  ),
  gift: <path fill="currentColor" d="M3 8h18v4H3V8Zm1 5h7v8H4v-8Zm9 0h7v8h-7v-8ZM12 8c-1-3-4-5-6-3.5S7 8 12 8Zm0 0c1-3 4-5 6-3.5S17 8 12 8Z" />,
  vip: <path fill="currentColor" d="m12 2 2.4 2.6 3.4-.8.6 3.4 3.2 1.5-1.4 3.3 1.4 3.3-3.2 1.5-.6 3.4-3.4-.8L12 22l-2.4-2.6-3.4.8-.6-3.4-3.2-1.5L3.8 12 2.4 8.7l3.2-1.5.6-3.4 3.4.8L12 2Zm0 5.5-1.3 2.9-3.1.3 2.4 2-.7 3.1 2.7-1.6 2.7 1.6-.7-3.1 2.4-2-3.1-.3L12 7.5Z" />,
  download: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M12 7v7m-3.5-3 3.5 3.5 3.5-3.5M7.5 17h9" />
    </g>
  ),
  affiliates: (
    <g fill="currentColor">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="3.5" r="2" />
      <circle cx="12" cy="20.5" r="2" />
      <circle cx="4" cy="8" r="2" />
      <circle cx="20" cy="8" r="2" />
      <circle cx="4" cy="16" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M11.2 5h1.6v14h-1.6zM4.5 7.2l15 8.2-.8 1.4-15-8.2zm15-.1.8 1.4-15 8.2-.8-1.4z" />
    </g>
  ),
  handshake: <path fill="currentColor" d="M1 7h4l1 9H2L1 7Zm18 0h4l-1 9h-4l1-9ZM7 8l4-2 2 1-3 2.5c-.7.6-.3 1.5.5 1.5L14 9l4.2 5.7-1.2 1.3-1-.9-.9 1-1-.9-1 1-1-.9-1.1 1.2L7 15.5 6.5 9 7 8Zm7-2 4.5 1.5-1 6L14 8.5 14 6Z" />,
  trophy: <path fill="currentColor" d="M7 3h10v2h4v2a5 5 0 0 1-4.3 5A5 5 0 0 1 13 15v3h3v3H8v-3h3v-3a5 5 0 0 1-3.7-3A5 5 0 0 1 3 7V5h4V3Zm0 4H5a3 3 0 0 0 2 2.8V7Zm10 0v2.8A3 3 0 0 0 19 7h-2Z" />,
  phone: <path fill="currentColor" d="M6.6 2.5 9.5 6c.4.5.4 1.2 0 1.7L8 9.5c1 2.4 3.1 4.5 5.5 5.5l1.8-1.5c.5-.4 1.2-.4 1.7 0l3.5 2.9c.5.4.6 1.2.1 1.7l-1.8 2.2c-.6.7-1.6 1-2.5.7C9.5 19 5 14.5 3 7.7c-.3-.9 0-1.9.7-2.5l2.2-1.8c.5-.4 1.2-.4 1.7.1Z" />,
  telegram: (
    <g>
      <circle cx="12" cy="12" r="11" fill="#29a9eb" />
      <path fill="#fff" d="m5.5 11.6 11.4-4.4c.5-.2 1 .1.8.9l-1.9 9.1c-.1.6-.5.8-1 .5l-2.9-2.1-1.4 1.3c-.2.2-.3.3-.6.3l.2-3 5.4-4.9c.2-.2 0-.3-.3-.1l-6.7 4.2-2.9-.9c-.6-.2-.6-.6.1-.9Z" />
    </g>
  ),
  mail: <path fill="currentColor" d="M2 5h20v14H2V5Zm2 2v.5l8 5.5 8-5.5V7l-8 5-8-5Z" />,
  home: <path fill="currentColor" d="M12 3 2 11.5h3V21h5v-6h4v6h5v-9.5h3L12 3Z" />,
  login: (
    <g fill="currentColor">
      <path d="M13 2h7v20h-7l-5-2V4l5-2Zm-1.5 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
      <path d="M2 11h4V8.5l4 3.5-4 3.5V13H2v-2Z" />
    </g>
  ),
  userPlus: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="10" cy="8" r="4" />
      <path d="M3 20a7 7 0 0 1 10-6.3M18 14v6m-3-3h6" />
    </g>
  ),
  android: <path fill="currentColor" d="M7 9h10v8a1 1 0 0 1-1 1h-1v3a1.3 1.3 0 0 1-2.5 0v-3h-1v3A1.3 1.3 0 0 1 9 21v-3H8a1 1 0 0 1-1-1V9Zm-2.8 0a1.3 1.3 0 0 1 2.6 0v5a1.3 1.3 0 0 1-2.6 0V9Zm13 0a1.3 1.3 0 0 1 2.6 0v5a1.3 1.3 0 0 1-2.6 0V9ZM7 8a5 5 0 0 1 2.6-4.3l-.9-1.5.5-.3 1 1.6a5.3 5.3 0 0 1 3.7 0l1-1.6.5.3-.9 1.5A5 5 0 0 1 17 8H7Zm2.6-2.2a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2Zm4.8 0a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2Z" />,
  gamcare: (
    <g fill="currentColor">
      <path d="M12 1.5a8 8 0 1 0 7.6 10.5h-3.4a4.8 4.8 0 1 1-.9-5.4l2.3-2.3A8 8 0 0 0 12 1.5Z" />
      <path d="M12.4 8.3h7.6v3.1h-7.6z" />
      <text x="12" y="23" fontSize="4.2" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
        GAMCARE
      </text>
    </g>
  ),
  age18: (
    <g fill="none" stroke="currentColor">
      <path d="M19.5 7.5A9.5 9.5 0 1 0 21.5 12" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 2.5v5m-2.5-2.5h5" strokeWidth="1.6" strokeLinecap="round" />
      <text x="11.5" y="15.5" fontSize="9" fontWeight="700" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="sans-serif">
        18
      </text>
    </g>
  ),
  facebook: <path fill="currentColor" d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4A22 22 0 0 0 14.3 4c-2.4 0-4 1.5-4 4.1v2.7H7.6V14h2.7v8h3.2Z" />,
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </g>
  ),
  youtube: (
    <g>
      <rect x="2" y="5" width="20" height="14" rx="4.5" fill="currentColor" />
      <path d="m10 9 5.5 3-5.5 3V9Z" fill="#ff0000" />
    </g>
  ),
  telegramPlane: <path fill="currentColor" d="m3 11.3 16.5-6.4c.8-.3 1.4.2 1.2 1.3l-2.8 13.2c-.2.9-.8 1.1-1.5.7l-4.2-3.1-2 2c-.2.2-.4.4-.9.4l.3-4.3 7.8-7c.3-.3 0-.5-.5-.2l-9.6 6-4.1-1.3c-.9-.3-.9-.9.1-1.3Z" />,
};

export default function Icon({ name, className = "size-6", title }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
