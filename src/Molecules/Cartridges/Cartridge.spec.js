import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import Cartridge from './Cartridge'

describe('Cartridge', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Cartridge />)

    expect(tree).toMatchSnapshot()
  })
})
