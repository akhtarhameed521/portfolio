interface contentTypes{
    title: string
  }

import React from 'react'

export default function SectionHeader({title} : contentTypes ) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="text-[15px] font-semibold text-nowrap ">{title}</h2>
      <hr className="h-[2px] w-full bg-black" />
    </div>
  )
}
