import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import { Container } from './styles';

export default class Header extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, onToggleTheme }) => (
          <Container>
             <h1>JStack's Blog</h1>
             <button type="button" onClick={onToggleTheme}>
               {theme === "dark" ? '🌞' : '🌚'}
             </button>
           </Container>
        )}
      </ThemeContext.Consumer>
    )
  }
}

// export default function Header() {
//   const { theme, onToggleTheme } = useContext(ThemeContext);

//   return (
//     <Container>
//       <h1>JStack's Blog</h1>
//       <button type="button" onClick={onToggleTheme}>
//         {theme === "dark" ? '🌞' : '🌚'}
//       </button>
//     </Container>
//   );
// }