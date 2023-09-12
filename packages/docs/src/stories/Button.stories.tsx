import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@viniciussls-ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta

export const Primary: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}

export const Secondary: StoryObj<ButtonProps> = {}
