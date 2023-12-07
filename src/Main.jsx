import React from 'react'
import Rooms from './components/Rooms'
import Activities from './components/Activities'
import Budget from './components/Budget'
import { useGlobalContext } from "./context";
const Main = () => {
    const {
        showRooms,
        showBudget,
        showActivities,
      } = useGlobalContext();
  return (
    <main className="w-[50vw] md:w-[70vw] bg-[#f4e3dd]">
    <div className="mt-14">
      {showRooms && <Rooms />}
      {showActivities && <Activities />}
      {showBudget && <Budget />}
    </div>
  </main>
  )
}

export default Main