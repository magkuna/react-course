import React from 'react'

import Calculator from '../../components/Calculator'

const numbers = [
  { a: 5, b: 10 },
  { a: 7, b: 12 },
  { a: 3, b: 11 },
  { a: 0, b: 1 },
]

const Calculators = (props) => (
  <div>
    {
      numbers.map(
        element => (
          <Calculator
            a={element.a}
            b={element.b}
          />
        )
      )
    }
  </div>
)

export default Calculators