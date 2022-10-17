import { Text, TextProps } from '@dev-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, illo cum natus veniam nisi magnam quae aliquid optio quam ad exercitationem blanditiis recusandae qui soluta! Perspiciatis ipsum dignissimos quibusdam debitis.,',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
