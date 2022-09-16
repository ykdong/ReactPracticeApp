import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" anima="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cocktaiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
  )
}

render(<App />,  document.getElementById("root"));
