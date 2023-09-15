import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@viniciussls-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, deleniti. Consequuntur, libero? Porro aperiam nobis, modi culpa quibusdam incidunt aliquam, iusto delectus, eligendi similique reprehenderit harum accusantium deserunt quo velit.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão',
      },
    },
  },
}
