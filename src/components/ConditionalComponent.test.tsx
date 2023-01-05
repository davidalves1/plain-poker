import ConditionalComponent from './ConditionalComponent';
import { render, screen } from '@testing-library/react';

const mountComponent = (condition: boolean) =>
  render(
    <ConditionalComponent condition={condition} fallback={<span data-testid="fallback">Fallback</span>}>
      <span data-testid="testComponent">Test</span>
    </ConditionalComponent>,
  );

describe('ConditionalComponent', () => {
  it('should render the children if condition is true', () => {
    mountComponent(true);

    const span = screen.getByTestId('testComponent');

    expect(span).toBeInTheDocument();
  });

  it('should render the fallback when the condition is not satisfied and fallback is defined', () => {
    mountComponent(false);

    const fallback = screen.getByTestId('fallback');

    expect(fallback).toBeInTheDocument();
  });
});
