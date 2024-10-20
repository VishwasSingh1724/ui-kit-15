

# UI-Kit-15

A comprehensive UI component library that provides a wide variety of components for building modern React applications. With a focus on both UI elements and 3D graphics, `ui-kit-15` includes basic components like buttons, inputs, and alerts, as well as advanced 3D components using `react-three-fiber`. This package is perfect for developers who want an easy-to-use and visually appealing UI library with 3D capabilities.

## Features

- **Basic UI Components**: Buttons, Dropdowns, Alerts, Inputs, Tabs, etc.
- **Advanced 3D Elements**: SpinningCube, WaveDeformedPlane, ColorSphere, RotatingEarth, and more.
- **Dark Mode Support**: Easily toggle between light and dark themes.
- **Interactive UI Elements**: Accordion, Tooltip, Modal, and more.
- **3D Graphics with React Three Fiber**: Provides stunning 3D components for your application.

## Installation

You can install `ui-kit-15` using npm:

```bash
npm install ui-kit-15
```

## Usage Examples

Here are examples of how to use each component from the library.

### 1. **Button**

```jsx
import React from 'react';
import { Button } from 'ui-kit-15';

const App = () => (
  <Button onClick={() => alert('Button clicked!')} variant="primary">
    Click Me
  </Button>
);

export default App;
```

### 2. **Scene3D**

```jsx
import React from 'react';
import { Scene3D } from 'ui-kit-15';

const App = () => (
  <div>
    <h1>3D Scene</h1>
    <Scene3D />
  </div>
);

export default App;
```

### 3. **Modal**

```jsx
import React, { useState } from 'react';
import { Modal, Button } from 'ui-kit-15';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="My Modal">
        <p>This is a modal content.</p>
      </Modal>
    </div>
  );
};

export default App;
```

### 4. **Tooltip**

```jsx
import React from 'react';
import { Tooltip } from 'ui-kit-15';

const App = () => (
  <Tooltip content="Tooltip info">
    <button>Hover over me</button>
  </Tooltip>
);

export default App;
```

### 5. **Table**

```jsx
import React from 'react';
import { Table } from 'ui-kit-15';

const data = [
  { name: 'John', age: 25, city: 'New York' },
  { name: 'Jane', age: 22, city: 'London' },
];

const App = () => (
  <Table data={data} columns={['name', 'age', 'city']} />
);

export default App;
```

### 6. **DarkModeToggle**

```jsx
import React from 'react';
import { DarkModeToggle } from 'ui-kit-15';

const App = () => (
  <div>
    <DarkModeToggle />
  </div>
);

export default App;
```

### 7. **LoadingSpinnerWithStyle**

```jsx
import React from 'react';
import { LoadingSpinnerWithStyle } from 'ui-kit-15';

const App = () => (
  <LoadingSpinnerWithStyle size={50} color="blue" />
);

export default App;
```

### 8. **SpinningCube**

```jsx
import React from 'react';
import { SpinningCube } from 'ui-kit-15';

const App = () => (
  <SpinningCube size={2} color="orange" />
);

export default App;
```

### 9. **Card**

```jsx
import React from 'react';
import { Card } from 'ui-kit-15';

const App = () => (
  <Card title="Card Title" content="Card content here" footer="Card footer" />
);

export default App;
```

### 10. **Dropdown**

```jsx
import React from 'react';
import { Dropdown } from 'ui-kit-15';

const App = () => {
  const handleSelect = (value) => alert(`Selected: ${value}`);

  return (
    <Dropdown label="Select an option" options={['Option 1', 'Option 2']} onSelect={handleSelect} />
  );
};

export default App;
```

### 11. **Accordion**

```jsx
import React from 'react';
import { Accordion } from 'ui-kit-15';

const items = [
  { title: 'Item 1', content: 'Content for item 1' },
  { title: 'Item 2', content: 'Content for item 2' },
];

const App = () => <Accordion items={items} />;

export default App;
```

### 12. **Tabs**

```jsx
import React from 'react';
import { Tabs } from 'ui-kit-15';

const tabs = [
  { id: 'tab1', title: 'Tab 1', content: 'Content for Tab 1' },
  { id: 'tab2', title: 'Tab 2', content: 'Content for Tab 2' },
];

const App = () => <Tabs tabs={tabs} />;

export default App;
```

### 13. **Input**

```jsx
import React from 'react';
import { Input } from 'ui-kit-15';

const App = () => <Input type="text" placeholder="Enter text here" />;

export default App;
```

### 14. **Badge**

```jsx
import React from 'react';
import { Badge } from 'ui-kit-15';

const App = () => <Badge text="New" variant="primary" />;

export default App;
```

### 15. **Alert**

```jsx
import React from 'react';
import { Alert } from 'ui-kit-15';

const App = () => (
  <Alert message="This is an alert message" type="warning" onClose={() => alert('Closed')} />
);

export default App;
```

### 18. **ColorSphere**

```jsx
import React from 'react';
import { ColorSphere } from 'ui-kit-15';

const App = () => <ColorSphere />;

export default App;
```

### 19. **RotatingEarth**

```jsx
import React from 'react';
import { RotatingEarth } from 'ui-kit-15';

const App = () => <RotatingEarth />;

export default App;
```


## License

This project is licensed under the ISC License.

---

### Feel free to customize the README as needed for your project, and let me know if you need further enhancements!