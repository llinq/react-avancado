import Main from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Main> = {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  },
  argTypes: {
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    }
  }
}

export default meta

type Story = StoryObj<typeof Main>

export const Basic: Story = {
  args: {
    title: 'React Avançado!',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  },
  render: (args) => <Main {...args} />
}

export const Default: Story = {
  render: (args) => <Main {...args} />
}
