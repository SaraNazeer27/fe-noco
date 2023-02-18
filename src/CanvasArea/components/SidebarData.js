import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { SiMaterialdesignicons } from "react-icons/si";
import { FaNetworkWired, FaElementor } from "react-icons/fa";
import { ImDatabase } from "react-icons/im";
import { BsBorderStyle } from "react-icons/bs";
import { RiPlugFill } from "react-icons/ri";

export const SidebarData = [
  {
    title: 'Design',
    path: '/Design',
    icon: <SiMaterialdesignicons />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Selection Elements',
        path: '/Design/Selection Elements',
        icon: <FaElementor />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
              title: "Home",
              icon: "bi-house-fill",
              "path": "/"
          }
        ]
      },
      {
        title: 'Input Elements',
        path: '/Design/Input Elements',
        icon: <FaElementor />
      },
      {
        title: 'Layout Elements',
        path: '/Design/Layout Elements',
        icon: <FaElementor />
      }
    ]
  },
  {
    title: 'Workflow',
    path: '/Workflow',
    icon: <FaNetworkWired />,    
  },
  {
    title: 'Data',
    path: '/Data',
    icon: <ImDatabase/>
   
  },
  {
    title: 'Styles',
    path: '/Styles',
    icon: <BsBorderStyle />
  },
  {
    title: 'Plugin',
    path: '/plugin',
    icon: <RiPlugFill />,
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
