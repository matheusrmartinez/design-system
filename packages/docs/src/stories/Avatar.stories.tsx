import { Avatar, AvatarProps } from '@matheus-dev-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/matheusrmartinez.png',
    alt: 'Matheus Martinez',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
