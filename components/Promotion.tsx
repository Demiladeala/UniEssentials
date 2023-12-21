"use client"
import React, { useState, useEffect } from "react"


type Props = {}

const Promotioncomp = (props: Props) => {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 3)

    useEffect(() => {
        const timerInterval = setInterval(() => {
          const currentTime = new Date()
          const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)
    
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
    
          setTime({ days, hours, minutes, seconds })
    
          if (timeDifference === 0) {
            clearInterval(timerInterval)
            // You can add code here to handle what happens when the target date is reached.
          }
        }, 1000)
    
        return () => {
          clearInterval(timerInterval) // Cleanup the interval when the component unmounts.
        }
      }, [targetDate])


  return (
    <section className="px-7">
      <div className="">
        <h3 className="text-lg font-semibold lg:text-2xl">Deals of the Month</h3>
        <div className="w-full flex gap-8 flex-col lg:flex-row max-lg:mt-5 mt-7 ">
        <p className="text-lg md:text-xl lg:basis-[50%] ">
          Get ready for a shopping experience like never before with our Deals of the Month! Every
          purchase comes with exclusive perks and offers, making this month a celebration of savvy
          choices and amazing deals. Don't miss out! 🎁🛒
        </p>

        <ul className="grid grid-cols-2 gap-[20px] lg:basis-[50%]">
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
        </div>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
    <li className="rounded-[10px] border border-gray-300 p-[16px] min-w-[100px] w-full text-center">
      <h4 className="font-semibold text-lg lg:text-2xl">{value}</h4>
      <p>{label}</p>
    </li>
  )

export default Promotioncomp