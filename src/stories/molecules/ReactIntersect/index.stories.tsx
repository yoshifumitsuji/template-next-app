import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ReactIntersect } from 'src/components/molecules/ReactIntersect'

export default {
  component: ReactIntersect,
} as ComponentMeta<typeof ReactIntersect>

export const Default: ComponentStoryObj<typeof ReactIntersect> = {
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
