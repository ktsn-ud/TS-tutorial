// tutorial/part8.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserProfile } from './part8';

describe('Part 8: Introduction to JSX', () => {

  test('renders user name and age correctly', () => {
    render(<UserProfile name="Alice" age={28} />);

    // `screen.getByRole` を使って、見出し(h1)を取得し、その内容を検証
    expect(screen.getByRole('heading')).toHaveTextContent('Alice');

    // `screen.getByText` を使って、特定のテキストを持つ要素を検索
    expect(screen.getByText('Age: 28')).toBeInTheDocument();
  });

  test('renders favorite food when provided', () => {
    render(<UserProfile name="Bob" age={32} favoriteFood="Sushi" />);

    expect(screen.getByText('Favorite: Sushi')).toBeInTheDocument();
  });

  test('does not render favorite food when not provided', () => {
    render(<UserProfile name="Carol" age={40} />);

    // `queryByText` は、要素が見つからない場合にnullを返す（エラーにならない）
    const foodElement = screen.queryByText(/Favorite:/);
    expect(foodElement).not.toBeInTheDocument();
  });

});
