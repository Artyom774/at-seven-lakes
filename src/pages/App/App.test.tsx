import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main page title', () => {
  render(<App />);
  // Проверяем наличие заголовка "О нас" (или другой уникальный текст)
  expect(screen.getByText(/О нас/i)).toBeInTheDocument();
});
