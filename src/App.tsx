import React from 'react';

const App: React.FC = () => {
  enum Color {Red, Green, Blue}
  let c: Color = Color.Red
  console.log(c)

  return (
    <div className="App">
      hello，typescript～
    </div>
  );
}

export default App;
