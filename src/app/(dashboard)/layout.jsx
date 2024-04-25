import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import { getAllWorkSpaceService } from '@/service/workspace.service';
import React from 'react'

const DashBoardLayout = async ({children}) => {
  const workSpaceData = await getAllWorkSpaceService();
  return (
    <div>
      <div className="w-[17%] float-left">
        <SidebarComponent workSpaceData={workSpaceData}/>
      </div>
      <div className="ml-[2%] w-[79%] float-left relative">
        <NavbarComponent />
        {children}
      </div>
    </div>
  )
}

export default DashBoardLayout