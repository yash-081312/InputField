# UI Components Library

A modern React component library built with TypeScript, TailwindCSS, and Storybook. This library provides flexible, accessible, and customizable UI components for React applications.

## 🚀 Features

- **TypeScript**: Full type safety and IntelliSense support
- **TailwindCSS**: Utility-first CSS framework for styling
- **Storybook**: Interactive component documentation and testing
- **Accessibility**: ARIA attributes and keyboard navigation support
- **Dark Mode**: Built-in support for light and dark themes
- **Responsive**: Mobile-first design approach
- **Customizable**: Extensive theming and variant options

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

### Start Development Server
```bash
npm run dev
```

### Start Storybook
```bash
npm run storybook
```

### Build Library
```bash
npm run build
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## 🎨 Components

### InputField

A flexible input component with validation states, multiple variants, and optional features.

#### Features

- ✅ Text input with label, placeholder, helper text, error message
- ✅ States: disabled, invalid, loading
- ✅ Variants: filled, outlined, ghost
- ✅ Sizes: small, medium, large
- ✅ Optional: clear button, password toggle
- ✅ Support for light & dark theme
- ✅ Full accessibility support
- ✅ TypeScript support

#### Props

```typescript
interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showClearButton?: boolean;
  showPasswordToggle?: boolean;
  onClear?: () => void;
}
```

#### Usage Examples

```tsx
import { InputField } from './components/InputField';

// Basic usage
<InputField
  label="Email Address"
  placeholder="Enter your email"
  onChange={(e) => console.log(e.target.value)}
/>

// With validation
<InputField
  label="Password"
  type="password"
  showPasswordToggle={true}
  errorMessage="Password is required"
  invalid={true}
/>

// With clear button
<InputField
  label="Search"
  showClearButton={true}
  value={searchTerm}
  onChange={handleSearch}
/>

// Loading state
<InputField
  label="Loading Field"
  loading={true}
  value="Loading..."
/>
```

#### Variants

- **Filled**: Background color with subtle border
- **Outlined**: Transparent background with border
- **Ghost**: Minimal styling with bottom border only

#### Sizes

- **Small (sm)**: Compact size for dense layouts
- **Medium (md)**: Default size for most use cases
- **Large (lg)**: Larger size for emphasis or touch interfaces

#### States

- **Default**: Normal interactive state
- **Disabled**: Non-interactive state with reduced opacity
- **Invalid**: Error state with red styling
- **Loading**: Shows spinner and disables interaction

#### Optional Features

- **Clear Button**: Shows when input has value and `showClearButton` is true
- **Password Toggle**: Shows eye icon for password fields when `showPasswordToggle` is true
- **Required Indicator**: Automatically shows asterisk for required fields

## 🎨 Theming

The library uses TailwindCSS with a custom color palette and supports both light and dark modes. Colors automatically adapt based on the `dark` class on the HTML element.

### Custom Colors

```css
/* Primary colors */
--color-primary-50: #eff6ff;
--color-primary-500: #3b82f6;
--color-primary-900: #1e3a8a;

/* Gray scale */
--color-gray-50: #f9fafb;
--color-gray-500: #6b7280;
--color-gray-900: #111827;
```

## ♿ Accessibility

All components follow WCAG 2.1 guidelines and include:

- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance

## 📚 Storybook

Storybook provides interactive documentation for all components. Each component includes:

- Multiple usage examples
- Interactive controls
- Accessibility testing
- Responsive design testing
- Dark mode examples

### Running Storybook

```bash
npm run storybook
```

Visit `http://localhost:6006` to view the component documentation.

## 🏗️ Project Structure

```
├── src/
│   ├── components/
│   │   ├── InputField.tsx
│   │   └── InputField.stories.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── index.ts
│   └── index.css
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and stories
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🆘 Support

For questions and support, please open an issue on GitHub.
