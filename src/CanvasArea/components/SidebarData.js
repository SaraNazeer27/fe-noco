import React from 'react';
import * as RiIcons from 'react-icons/ri';
import { SiMaterialdesignicons } from "react-icons/si";
import { FaNetworkWired, FaElementor } from "react-icons/fa";
import { ImDatabase } from "react-icons/im";
import { BsBorderStyle } from "react-icons/bs";
 

export const SidebarData = [
  {
    title: 'Design',
    
    icon: <SiMaterialdesignicons />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Selection Elements',
     
        icon: <FaElementor />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subsubNav: [
          {
            title: 'Submenu Item 1',
            path: '/submenu-item-1',
            icon: <FaElementor />,
          },
          {
            title: 'Submenu Item 2',
             
            icon: <FaElementor />,
          },
              
          
        ]
      },
      {
        title: 'Input Elements',
        
        icon: <FaElementor />
      },
      {
        title: 'Layout Elements',
        icon: <FaElementor />
      }
    ]
  },
  {
    title: 'Workflow', 
    icon: <FaNetworkWired />,    
  },
  {
    title: 'Data', 
    icon: <ImDatabase/>
   
  },
  {
    title: 'Styles', 
    icon: <BsBorderStyle />
  }
  
];
