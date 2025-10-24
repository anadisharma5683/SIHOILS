# Testing Documentation

## Overview

The Krishi Shield application uses Jest and React Testing Library for testing. This document explains the testing setup and provides examples.

## Test Setup

### Dependencies

- `jest`: Test runner
- `@testing-library/react`: React testing utilities
- `@testing-library/jest-dom`: Custom jest matchers
- `@testing-library/user-event`: User interaction simulation
- `jest-environment-jsdom`: DOM environment for tests
- `@types/jest`: TypeScript definitions for Jest

### Configuration Files

1. `jest.config.js`: Jest configuration
2. `jest.setup.js`: Test setup file

### Jest Configuration

Key configuration options:

- `testEnvironment: 'jsdom'`: Browser-like environment
- `setupFilesAfterEnv`: Setup file execution
- `moduleNameMapping`: Path aliases
- `transform`: File transformation (uses Next.js babel preset)

## Writing Tests

### Component Tests

Components should be tested for:

1. Rendering with props
2. User interactions
3. State changes
4. Conditional rendering

Example test structure:

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Component from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component prop="value" />);
    expect(screen.getByText('Expected text')).toBeInTheDocument();
  });

  it('handles user interaction', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    
    render(<Component onClick={handleClick} />);
    await user.click(screen.getByRole('button'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Context Tests

Context providers should be tested with wrapper components:

```tsx
import { render, screen } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';

const TestComponent = () => {
  const { user } = useAuth();
  return <div>{user ? user.name : 'No user'}</div>;
};

it('provides context value', () => {
  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  );
  
  expect(screen.getByText('No user')).toBeInTheDocument();
});
```

## Running Tests

### Commands

- `npm run test`: Run all tests
- `npm run test -- --watch`: Run tests in watch mode
- `npm run test -- --coverage`: Run tests with coverage report

### Test File Naming

Test files should be named with `.test.tsx` or `.test.ts` extension and placed next to the component they test.

## Best Practices

1. **Test behavior, not implementation**: Focus on what the component does rather than how it does it
2. **Use semantic queries**: Prefer `getByRole`, `getByLabelText`, etc. over `getByTestId`
3. **Mock external dependencies**: Use mocks for API calls, context providers, etc.
4. **Test edge cases**: Include tests for error states and boundary conditions
5. **Keep tests isolated**: Each test should be independent of others
6. **Use descriptive test names**: Test names should clearly describe what is being tested

## Coverage

The testing setup is configured to collect coverage from all source files except layout files. Aim for:
- Component coverage: 80%+
- Critical path coverage: 100%
- Utility function coverage: 100%

## Continuous Integration

Tests should be run as part of the CI pipeline to ensure code quality and prevent regressions.