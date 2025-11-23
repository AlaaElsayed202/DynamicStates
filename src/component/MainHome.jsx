import React from 'react'
import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'

export default function MainHome()
 {
  return (
    <div className="bg-blue-900 text-white py-4 shadow-lg">
  <nav className="flex justify-center gap-10 text-xl font-semibold">
  <NavLink
          to="/counter"
          className={({ isActive }) =>
            isActive ? "text-yellow-300 " : "hover:text-yellow-300"
          }
        >
          Counter
        </NavLink>

        <NavLink
          to="/changName"
          className={({ isActive }) =>
            isActive ? "text-yellow-300 " : "hover:text-yellow-300"
          }
        >
          Change User Name
        </NavLink>

        <NavLink
          to="/FanState"
          className={({ isActive }) =>
            isActive ? "text-yellow-300 " : "hover:text-yellow-300"
          }
        >
          Fan State
        </NavLink>
      </nav>
</div>

  )
}
