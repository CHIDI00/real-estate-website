import { createGlobalStyle } from "styled-components";
import { device } from "../ui/devices";
// import url('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css')

// import url('https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&family=Roboto:wght@400;500;700;900&display=swap');

const GlobalStyle = createGlobalStyle`
:root {
  /* Indigo */
  --color-brand-5: #fdfafa;
  --color-brand-10: #e2dddd;
  --color-brand-20: #bcbbbb;
  --color-brand-50: #8b8989;
  --color-brand-60: #585858;
  --color-brand-70: #363535;
  --color-brand-80:rgb(6, 4, 27);
  --color-brand-90: #03020e;

  /* Primary */
  --color-primary-100: #849cff;
  --color-primary-200: #335bff;
  --color-primary-300: #0f3eff;
  --color-primary-400: #0028ca;
  /* Primary */
  --color-primary1-100: #E6E2F8;
  --color-primary1-200: #CEC4F6;
  --color-primary1-300: #B2A2F9;
  --color-primary1-400: #9178FA;
  --color-primary1-500: #7152F3;
  --color-primary1-600: #5D3DE7;
  --color-primary1-700: #4F31D0;
  --color-primary1-800: #3517B4;
  --color-primary1-900: #250C92;

  /* Secondary */
  --color-secondary-100: #E1F1BC;
  --color-secondary-200: #CEE993;
  --color-secondary-300: #BCDE6B;
  --color-secondary-400: #AFD751;
  --color-secondary-500: #A3D139;
  --color-secondary-600: #97BD33;
  --color-secondary-700: #88A52A;
  --color-secondary-800: #798D21;
  --color-secondary-900: #626615;

  /* Tertiary */
  --color-tertiary-100: #F0B0D9;
  --color-tertiary-200: #E67BC2;
  --color-tertiary-300: #D846AB;
  --color-tertiary-400: #CD0D9B;
  --color-tertiary-500: #B21589;
  --color-tertiary-600: #AF0A87;
  --color-tertiary-700: #9B0982;
  --color-tertiary-800: #8A087C;
  --color-tertiary-900: #6C0772;
  
  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-450: #A2A1A8;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  /* Gradient */
  --color-red-1: #fee2e2;
  --color-red-2: #b91c1c;
  --color-red-3: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 50px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Parkinsans", sans-serif;
  color: var(--color-grey-0);
  /* background-color: var(--color-brand-90); */
  background-color: var(--color-grey-200);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  padding: 1rem 8rem;

    @media screen and (${device.mobileL}) {
      /* height: 100vh; */
      padding: 2rem;
    }

}

::-webkit-scrollbar{
  display: none;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

/*
FOR DARK MODE

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
*/
`;

export default GlobalStyle;
