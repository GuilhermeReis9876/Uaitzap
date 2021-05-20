import { createGlobalStyle } from 'styled-components';
import theme from './theme';
 
const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap);
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
  font-family: Poppins, Segoe UI, Tahoma, Geneva, Verdana, sans-serif !important;
}

html {
  height: auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

#__next,
body {
  height: 100%;
  flex: 1 1;
  display: flex;
  flex-direction: column;
}

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: ${theme.palette.primary.main};
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
}

#nprogress .peg {
  display: block;
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main};
  opacity: 1;
  transform: rotate(3deg) translateY(-4px);
}
`;
 
export default GlobalStyle;

