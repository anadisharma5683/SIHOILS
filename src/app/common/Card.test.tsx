import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders correctly with title and description', () => {
    render(
      <Card 
        title="Test Card" 
        description="This is a test card" 
      />
    );
    
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('This is a test card')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(
      <Card 
        title="Test Card" 
        description="This is a test card" 
        icon="/test-icon.png"
      />
    );
    
    // The icon is rendered as an img element with Next.js Image component
    const icon = screen.getByAltText('Test Card icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src');
  });

  it('renders children when provided', () => {
    render(
      <Card 
        title="Test Card" 
        description="This is a test card"
      >
        <div data-testid="child-content">Child content</div>
      </Card>
    );
    
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
  });
});