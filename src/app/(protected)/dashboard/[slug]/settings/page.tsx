import Billing from '@/components/global/billing'
import React from 'react'

type Props = {}

const Page = (props: Props) => {

  return (
    <div className="flex flex-col gap-y-10">
        <Billing/>
    </div>
  )
}

export default Page