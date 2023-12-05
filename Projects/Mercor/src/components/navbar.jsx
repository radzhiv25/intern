// import React from 'react'

export const Navbar = () => {
  return (
    <nav className="p-5 text-white flex justify-between items-center">
      <img src="https://mercor.io/logo.png" alt="" className="h-8 w-auto"/>
      <ul className="flex gap-10 font-bold text-sm">
        <li>Partners</li>
        <li>Teams</li>
        <li>Product</li>
        <li>Candidates</li>
      </ul>
      <button className="font-bold text-sm">Apply to work</button>
    </nav>
  )
}
