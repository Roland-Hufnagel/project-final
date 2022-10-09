import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *:before, *:after{
    box-sizing: border-box;
    margin: 0;
}

/* abril-fatface-regular - latin */
@font-face {
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/abril-fatface-v19-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/abril-fatface-v19-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* kalam-regular - latin */
@font-face {
  font-family: 'Kalam';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/kalam-v16-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/kalam-v16-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* noto-sans-regular - latin */
@font-face {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/noto-sans-v27-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/noto-sans-v27-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
body{
    font-family: "Noto Sans";
}


`;
export { GlobalStyle };
