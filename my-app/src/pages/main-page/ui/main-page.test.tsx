import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MainPage } from './main-page'
import { MemoryRouter } from 'react-router-dom'

describe('MainPage', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    )

    expect(screen.getByText('Main Page')).toBeInTheDocument()
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })
})