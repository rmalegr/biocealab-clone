import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Home() {
  return (
    <div>
      <UserButton afterSwitchSessionUrl='/sign-in' />

    </div>
  )
}

export default Home