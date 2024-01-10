import { expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ColorDropdown from '@/app/components/ColorDropdown' 

describe('ColorDropdown', () => {
  it('renders all color inputs', () => {
    render(<ColorDropdown />)
    expect(screen.getByDisplayValue('red')).toBeDefined()
    expect(screen.getByDisplayValue('orange')).toBeDefined()
    expect(screen.getByDisplayValue('amber')).toBeDefined()
    expect(screen.getByDisplayValue('yellow')).toBeDefined()
    expect(screen.getByDisplayValue('lime')).toBeDefined()
    expect(screen.getByDisplayValue('green')).toBeDefined()
    expect(screen.getByDisplayValue('emerald')).toBeDefined()
    expect(screen.getByDisplayValue('teal')).toBeDefined()
    expect(screen.getByDisplayValue('cyan')).toBeDefined()
    expect(screen.getByDisplayValue('sky')).toBeDefined()
    expect(screen.getByDisplayValue('blue')).toBeDefined()
    expect(screen.getByDisplayValue('indigo')).toBeDefined()
    expect(screen.getByDisplayValue('violet')).toBeDefined()
    expect(screen.getByDisplayValue('purple')).toBeDefined()
    expect(screen.getByDisplayValue('fuchsia')).toBeDefined()
    expect(screen.getByDisplayValue('pink')).toBeDefined()
    expect(screen.getByDisplayValue('rose')).toBeDefined()
  })
})