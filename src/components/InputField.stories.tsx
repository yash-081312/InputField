import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input component with validation states, multiple variants, and optional features like clear button and password toggle.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'ghost'],
      description: 'The visual variant of the input field',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input field',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    invalid: {
      control: { type: 'boolean' },
      description: 'Whether the input is in an invalid state',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the input is in a loading state',
    },
    showClearButton: {
      control: { type: 'boolean' },
      description: 'Whether to show a clear button when the input has a value',
    },
    showPasswordToggle: {
      control: { type: 'boolean' },
      description: 'Whether to show a password toggle button (only for password type)',
    },
    label: {
      control: { type: 'text' },
      description: 'The label text for the input field',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'The placeholder text for the input field',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the input',
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Error message displayed below the input',
    },
    value: {
      control: { type: 'text' },
      description: 'The current value of the input',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when the input value changes',
    },
  },
  args: {
    placeholder: 'Enter your text here...',
    size: 'md',
    variant: 'outlined',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Input Field
export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email address',
  },
};

// Input with Helper Text
export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'Username must be at least 3 characters long',
  },
};

// Input with Error
export const WithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email address',
    errorMessage: 'Please enter a valid email address',
    invalid: true,
  },
};

// Input with Clear Button
export const WithClearButton: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search for something...',
    showClearButton: true,
    value: 'Sample search term',
  },
};

// Password Input with Toggle
export const PasswordWithToggle: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    showPasswordToggle: true,
    value: 'mypassword123',
  },
};

// Loading State
export const Loading: Story = {
  args: {
    label: 'Loading Input',
    placeholder: 'This input is loading...',
    loading: true,
    value: 'Loading value',
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    value: 'Disabled value',
  },
};

// Required Field
export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
  },
};

// Size Variants
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <InputField
        label="Small Input"
        placeholder="Small size"
        size="sm"
      />
      <InputField
        label="Medium Input"
        placeholder="Medium size"
        size="md"
      />
      <InputField
        label="Large Input"
        placeholder="Large size"
        size="lg"
      />
    </div>
  ),
};

// Variant Examples
export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <InputField
        label="Filled Variant"
        placeholder="Filled input"
        variant="filled"
      />
      <InputField
        label="Outlined Variant"
        placeholder="Outlined input"
        variant="outlined"
      />
      <InputField
        label="Ghost Variant"
        placeholder="Ghost input"
        variant="ghost"
      />
    </div>
  ),
};

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      
      // Simple validation
      if (newValue.length > 0 && newValue.length < 3) {
        setError('Input must be at least 3 characters long');
      } else {
        setError('');
      }
    };

    const handleClear = () => {
      setValue('');
      setError('');
    };

    return (
      <div className="space-y-4 w-full max-w-md">
        <InputField
          label="Interactive Input"
          placeholder="Type something (min 3 characters)"
          value={value}
          onChange={handleChange}
          errorMessage={error}
          showClearButton={true}
          onClear={handleClear}
          helperText="This input validates as you type"
        />
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Current value: "{value}"
        </div>
      </div>
    );
  },
};

// All Features Combined
export const AllFeatures: Story = {
  render: () => {
    const [value, setValue] = useState('sample@email.com');
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="space-y-6 w-full max-w-md">
        <InputField
          label="Email Address"
          placeholder="Enter your email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText="We'll never share your email with anyone else"
          showClearButton={true}
          required={true}
        />
        
        <InputField
          label="Password"
          placeholder="Enter your password"
          type="password"
          showPasswordToggle={true}
          helperText="Password must be at least 8 characters"
          required={true}
        />
        
        <InputField
          label="Loading Field"
          placeholder="This field is loading..."
          loading={true}
          value="Loading..."
        />
        
        <InputField
          label="Disabled Field"
          placeholder="This field is disabled"
          disabled={true}
          value="Disabled value"
        />
      </div>
    );
  },
};

// Dark Mode Example
export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <div className="space-y-4 w-full max-w-md p-6 bg-gray-900 rounded-lg">
      <InputField
        label="Dark Mode Input"
        placeholder="This input works in dark mode"
        variant="outlined"
        helperText="Notice how the colors adapt to dark mode"
      />
    </div>
  ),
};
