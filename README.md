# akousist-ui

## Using the Library

Import Components and Styles In your project, you can use the library components and styles like this:

package.json

```json
"akousist-ui": "git+https://github.com/akousist/DRQ-AKS-UI.git",
```

code

```js
import { Button } from 'akousist-ui';
import 'akousist-ui/dist/index.css';
```

## Updating the Library Version

### **Step 1: Commit all updates**

Before releasing a new version, ensure all changes are committed.

### **Step 2: Release a new version**

Use the following command to create a new release and generate a changelog:

```bash
yarn release
```

### **Step 3: Upgrade the library in your project**

Update the library to the latest version in your project:

```bash
yarn upgrade akousist-ui
```
