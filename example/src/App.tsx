import React from 'react';

import { Button } from 'akousist-ui';
import { ExampleComponent } from 'akousist-ui';
import 'akousist-ui/dist/index.css';

const App = () => {
  return (
    <>
      <Button>Button</Button>
      <ExampleComponent text="Create React Library Example 😄" />
    </>
  );
};

export default App;
