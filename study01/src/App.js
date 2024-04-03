import React, { useState } from 'react';

const App = () => {
  const [input, setinput] = useState("")
  const onChange = (e) => setinput(e.target.value)
  return (
    <>  
      <input 
        onChange={onChange}
        placeholder="Input"
        value={input}
      />
      {input}  
    </>
  );
};

export default App;