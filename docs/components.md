# Component Documentation

## Overview

This document provides documentation for the reusable components in the Krishi Shield application.

## Button Component

A customizable button with animation support.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Content to display inside the button |
| onClick | Function | - | Click handler |
| variant | 'primary' \| 'secondary' | 'primary' | Button style variant |
| className | string | '' | Additional CSS classes |
| type | 'button' \| 'submit' \| 'reset' | 'button' | HTML button type |
| disabled | boolean | false | Whether the button is disabled |
| ariaLabel | string | - | Accessibility label |

### Usage

```tsx
import Button from '@/app/common/Button';

// Primary button
<Button onClick={handleClick}>Click me</Button>

// Secondary button
<Button variant="secondary" onClick={handleClick}>Secondary</Button>

// Disabled button
<Button disabled>Disabled</Button>
```

## Card Component

A card component with optional icon and animation support.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | Card title |
| description | string | - | Card description |
| icon | string | - | Path to icon image |
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Additional content |

### Usage

```tsx
import Card from '@/app/common/Card';

// Basic card
<Card 
  title="Card Title" 
  description="Card description"
/>

// Card with icon
<Card 
  title="Card Title" 
  description="Card description"
  icon="/path/to/icon.png"
/>
```

## LoadingSkeleton Component

A loading skeleton for better UX during data fetching.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | 'card' \| 'list' \| 'text' \| 'dashboard' | 'card' | Skeleton type |
| count | number | 1 | Number of items for list type |

### Usage

```tsx
import LoadingSkeleton from '@/app/common/LoadingSkeleton';

// Card skeleton
<LoadingSkeleton type="card" />

// List skeleton with 5 items
<LoadingSkeleton type="list" count={5} />
```

## ErrorBoundary Component

Catches JavaScript errors and displays fallback UI.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Protected content |
| fallback | ReactNode | - | Custom fallback UI |

### Usage

```tsx
import ErrorBoundary from '@/components/ErrorBoundary';

<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

## AuthContext

Provides authentication state and functions throughout the app.

### Context Value

| Property | Type | Description |
|----------|------|-------------|
| user | User \| null | Current user object |
| login | Function | Login function |
| logout | Function | Logout function |
| loading | boolean | Authentication loading state |

### Usage

```tsx
import { useAuth } from '@/contexts/AuthContext';

const MyComponent = () => {
  const { user, login, logout, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login('email', 'password')}>Login</button>
      )}
    </div>
  );
};
```