import React from 'react';
import { Checkbox } from '@nicecode/meta';
import type { CheckboxChangeEvent } from '@nicecode/meta';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const App: React.FC = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>;

export default App;
