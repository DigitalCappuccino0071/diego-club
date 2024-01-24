import Link from 'next/link'
import React from 'react'

const SectionButton = ({title, linkUrl}) => {
  return (
   <>
   <Link
      href={`${linkUrl}`}
      className="  border-2 border-primary rounded-full text-primary py-3 px-8 w-fit"
    >
      {title}
    </Link>
   </>
  )
}

export default SectionButton