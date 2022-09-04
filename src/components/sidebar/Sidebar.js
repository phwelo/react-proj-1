import React, {useState} from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaMusic, FaSearch, FaHeart,FaListUl } from "react-icons/fa";

function Sidebar() {


  const displayModal = () =>{
    alert('should we display search as modal?')
  }

  const [collapsed, setCollapsed] = useState(true)
  const toggleCollapsed = () => setCollapsed(value => !value);

  return (
    <ProSidebar collapsed={collapsed}>
      <Menu iconShape="square">
        <MenuItem icon={<FaMusic />}>
          <a href="/api/v1/songs">
            Songs
          </a>
        </MenuItem>
        <MenuItem icon={<FaSearch />} onClick={()=> displayModal()}>
          Search
        </MenuItem>
        <SubMenu title="Dev Links" icon={<FaHeart />}>
          <MenuItem>
            <a
              href="https://github.com/santomegonzalo/react-electron-titlebar"
              target="_blank"
              rel="noopener noreferrer"
            >
              seems like a nice title bar
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="https://www.npmjs.com/package/react-pro-sidebar"
              target="_blank"
              rel="noopener noreferrer"
            >
              sidebar idea
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="https://fortunar.github.io/react-sidemenu/#item3"
              target="_blank"
              rel="noopener noreferrer"
            >
              if flexibility is needed in sidebar
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="https://uptick.github.io/react-keyed-file-browser/"
              target="_blank"
              rel="noopener noreferrer"
            >
              file browser widget
            </a>
          </MenuItem>
          <MenuItem>
            <a href="https://react-ui.io/components/popover"
            target="_blank"
            rel="noopener noreferrer"
            >
              popover can be used to display chord fingerings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="https://uptick.github.io/react-keyed-file-browser/"
              target="_blank"
              rel="noopener noreferrer"
            >
              file browser widget
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="https://github.com/aliustaoglu/react-js-guitar-chords#readme"
              target="_blank"
              rel="noopener noreferrer"
            >
              get chord fingerings
            </a>
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<FaListUl />} onClick={()=>{setCollapsed(prevCollapsed => !prevCollapsed)}}>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default Sidebar;
