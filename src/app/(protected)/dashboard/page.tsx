// import React from "react";
// type Props = {}

// const Page = async(props: Props) => {
//     //Server Action Onboard the user
//     //200||201 dash/a12332234
    
//     return <div>Page</div>;
// };

// export default Page

import { onBoardUser } from '@/actions/user'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {
  const user = await onBoardUser()
  if (user.status === 200 || user.status === 201) {
    return redirect(`dashboard/${user.data?.firstname}${user.data?.lastname}`)
  }

  return redirect('/sign-in')
}

export default Page