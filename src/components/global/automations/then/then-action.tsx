// import { useListener } from '@/hooks/use-automations'
import React from 'react'
import TriggerButton from '../trigger-button'
// import { AUTOMATION_LISTENERS } from '@/constants/automation'
// import { SubscriptionPlan } from '../../subscription-plan'
// import { cn } from '@/lib/utils'
// import { Textarea } from '@/components/ui/textarea'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import Loader from '../../loader'

type Props = {
  id: string
}

const ThenAction = ( {id}: Props) => {
  return (
    <TriggerButton label="Then">
      <div className="flex flex-col gap-y-2 ">
      </div>
    </TriggerButton>
  )
}

export default ThenAction