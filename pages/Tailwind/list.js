import React from "react"
import { useState, useEffect } from 'react'
import Layout from "../../components/layout/layout"
import Heading1 from "../../components/headings/heading1"
import Heading2 from "../../components/headings/heading2"
import Card1 from "../../components/Cards/card1"
import Main from "../../components/main"

export default function List1(users) {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            fetch('https://reqres.in/api/users')
              .then((res) => res.json())
              .then((data) => {
                setData(data.data)
                setLoading(false)
              })
        }, 100);
      }, [])
    
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <Main>

            <Heading1>List</Heading1>

            <Heading2>Example 2</Heading2>
            <Card1>
            
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 bg-white">
            {
                data.map((item, index) => (
                     <li className="p-3 cursor-pointer  hover:bg-gray-200 " key="">
                        <div className="flex items-center space-x-4">
                           <div className="flex-shrink-0">
                              <img className="w-8 h-8 rounded-full" src={item.avatar} alt="avatar" />
                           </div>
                           <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                 {item.first_name} {item.last_name}
                              </p>
                              <p className="text-sm text-gray-500 truncate">
                                 {item.email}
                              </p>
                           </div>
                           <div className="inline-flex items-center text-base font-thin text-gray-500 dark:text-white">
                              Active
                           </div>
                        </div>
                     </li>
               ))
            }
            </ul>
            
            </Card1>            


         </Main>
      );
}