import React from 'react'
import GutterDetails from './gutter-details'
import shipping from 'public/shipping.svg'
import dollar from 'public/dollar.svg'
import support from 'public/support.svg'
import payment from 'public/payment.svg'

const Guttercomp = () => {
  return (
    <div className='grid gap-7 grid-cols-1 md:grid-cols-2 px-7'>
        <GutterDetails src={shipping} name='Free Shipping' desc='Free shipping for orders above $150'/>
        <GutterDetails src={dollar} name='Money Guarantee' desc='Within 30 days for an exchange'/>
        <GutterDetails src={shipping} name='Online Support' desc='24 hours a day, 7 days a week'/>
        <GutterDetails src={shipping} name='Flexible Payment' desc='Pay with multiple credit cards'/>
    </div>
  )
}

export default Guttercomp