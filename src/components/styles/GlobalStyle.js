import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;800;900&display=swap);

body {
  font-family: 'Montserrat', sans-serif;
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

:root {
  --primary-color: #2695eb;
  --secondary-color: #05d864;
}

/* BASE STYLES */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: 'Poppins', sans-serif;
  color: rgb(36, 36, 36);
}

h1 {
  font-size: 30px;
  font-weight: 500;
}

p {
  margin: 20px 0 10px;
  font-size: 1.1rem;
}



`;

export default GlobalStyle