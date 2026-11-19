import React from 'react';

const letterO = 'M1257 273C1146 273 1082 326 1082 424S1146 575 1257 575s175-54 175-151-64-151-175-151Zm-29 70h116v105c0 36-19 57-58 57h-58c-39 0-58-21-58-57v-47c0-37 19-58 58-58Z';

function CursorO() {
  return <>
    <path fillRule="evenodd" d={letterO}/>
    <path className="alfon-cursor" d="M1318 343h26v71h-26z"/>
  </>;
}

export function BrandMark() {
  return <svg className="alfon-mark" viewBox="1048 216 418 418" fill="currentColor" aria-hidden="true" focusable="false"><CursorO/></svg>;
}

export function Wordmark() {
  return <svg className="alfon-wordmark" viewBox="387 159 1390 422" fill="currentColor" aria-hidden="true" focusable="false">
    <path fillRule="evenodd" d="M428 298c47-17 100-25 154-25 95 0 154 37 154 114v182h-78v-33c-33 26-72 39-120 39-90 0-147-36-147-93 0-62 60-97 155-97h106c-2-31-28-46-87-46-49 0-95 11-137 30Zm224 148H550c-44 0-69 12-69 32s25 29 70 29c60 0 96-20 101-61Z"/>
    <path d="M759 218h146c19-38 61-56 116-56h74v64h-48c-37 0-62 15-62 52h110v65H985v226h-85V266h-55v303h-86Z"/>
    <CursorO/>
    <path d="M1448 278h74v31c26-24 64-36 103-36 88 0 146 55 146 135v161h-89V415c0-45-27-72-74-72-43 0-77 24-77 71v155h-83Z"/>
  </svg>;
}
