import './App.css';
import Wrapper from './Component/Wrapper';
import Screen from './Component/Screen';
import ButtonBox from './Component/ButtonBox';
import Button from './Component/Button';
import CalcProvider from './context/CalContext';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];

function App() {
  return (
    <CalcProvider>
    <Wrapper>
      <Screen />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => (
          <Button
            value={btn}
            key={i}
          />
        ))}
      </ButtonBox>
    </Wrapper>
    </CalcProvider>
  );
}

export default App;
