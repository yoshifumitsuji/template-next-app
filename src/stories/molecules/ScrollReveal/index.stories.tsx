import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ScrollReveal } from 'src/components/molecules/ScrollReveal'

export default {
  component: ScrollReveal,
} as ComponentMeta<typeof ScrollReveal>

export const Default: ComponentStoryObj<typeof ScrollReveal> = {
  args: {
    scale: 5,
    children: <div style={{ width: '500px', height: '500px', background: '#000' }} />,
  },
  decorators: [
    (Story) => (
      <div style={{ height: '3000px' }}>
        <p>Please scroll</p>
        <div style={{ position: 'absolute', top: '1500px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
}
