import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import Button from './Button.svelte';

describe('Button', () => {
  it('should compile successfully', () => {
    const { getByText } = render(Button);
    const button = getByText('CANCEL');

    expect(button).toBeInTheDocument();
  });

  it.each`
    style           | expected
    ${'color:red'}  | ${'red'}
    ${'color:blue'} | ${'blue'}
  `(
    'should display a button with $expected style when style is $style',
    ({ style, expected }) => {
      const { getByRole } = render(Button, { style });
      const button = getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button.style.color).toBe(expected);
    },
  );

  it.each`
    mode         | expected
    ${undefined} | ${'uk-button-default'}
    ${'primary'} | ${'uk-button-primary'}
    ${'danger'}  | ${'uk-button-danger'}
    ${'text'}    | ${'uk-button-text'}
    ${'link'}    | ${'uk-button-link'}
  `(
    'should display a button with $expected class when mode is $mode',
    ({ mode, expected }) => {
      const { getByRole } = render(Button, { mode });
      const button = getByRole('button');

      expect(button.classList.contains(expected)).toBe(true);
    },
  );
});
