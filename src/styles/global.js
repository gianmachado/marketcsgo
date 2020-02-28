import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

 #root {
  width:100%;
  margin: 0 auto;
  padding: 0 20px 50px;
}

button{
    cursor: pointer;
}

a{
    text-decoration:none;
}

body{
  background-color: #474747;
  -webkit-font-smoothing: antialiased !important;
}

body,input, button{
    font: 14px Roboto, sans-serif;
}
`;
