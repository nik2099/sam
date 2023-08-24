import React, { Fragment } from 'react';
import Link from 'next/link';
import { LI, UL, H6 } from '../../../AbstractElements';
import { MENUITEMS } from './Menu';
import { useUser } from "../../../../context/user";

const SidebarMenuItems = ({ setMainMenu, sidebartoogle, setNavActive }) => {
  // eslint-disable-next-line
  const { user } = useUser({});

  const toggletNavActive = (item) => {

    if (!item.active) {
      MENUITEMS.map((a) => {
        a.Items.filter((Items) => {
          if (a.Items.includes(item)) Items.active = false;
          if (!Items.children) return false;
          Items.children.forEach((b) => {
            if (Items.children.includes(item)) {
              b.active = false;
            }
            if (!b.children) return false;
            b.children.forEach((c) => {
              if (b.children.includes(item)) {
                c.active = false;
              }
            });
          });
          return Items;
        });
        return a;
      });
    }
    item.active = !item.active;
    setMainMenu({ mainmenu: MENUITEMS });
  };


  return (
    <Fragment>
    <UL attrUL={{ className: 'nav-menu custom-scrollbar' }}>
      <LI attrLI={{ className: 'back-btn' }}>
        <div className="mobile-back text-end"><span>Back</span><i className="fa fa-angle-right ps-2"></i></div>
      </LI>
      
   
         {MENUITEMS.map((Item, i) => (
           < Fragment key={i} >
             <LI attrLI={{ className: 'sidebar-main-title' }} >
               <div>
                 <H6>{Item.menutitle}</H6>
               </div>
             </LI>
             {Item.Items.map((menuItem, i) => (
               <LI attrLI={{ className: 'dropdown' }} key={i}>
                 <Link href={menuItem.path} >
                   <a 
                     id="nav-link"
                     className={`nav-link menu-title ${menuItem.active ? 'active' : ''}`}
                     >
                     {menuItem.icon !== undefined && <menuItem.icon />}
                     <span>{menuItem.title}</span>
                     <div className="according-menu">
                      
                         <i className="fa fa-angle-right"></i>
                      
                     </div>
                   </a>
                   </Link>
               
               </LI>
             ))}
           </Fragment>
         ))
         }
       
    </UL>
  </Fragment>
  );
};
export default SidebarMenuItems;
