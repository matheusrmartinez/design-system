import { styled } from './styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$green500',
  borderRadius: '$md',
  padding: '$3 $4',
  border: 0,
  color: '$white',
  fontWeight: '$bold',

  '&:hover': {
    backgroundColor: '$green3 00',
  },

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export const App = () => {
  return <Button>Hello World</Button>
}

export type ButtonProps = ComponentProps<typeof Button>
