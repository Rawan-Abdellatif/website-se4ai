import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import { MdKeyboardArrowDown, MdOutlineArrowForwardIos } from "react-icons/md";
import { Link} from "react-router-dom";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";
import { IoIosArrowDown } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

const ProgramSidebarMedia = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  const [activeLink, setActiveLink] = useState("");
  const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };


  const toggleSidebar = () => {
    toggleDarkMode();
    setIsOpen(!isOpen);
  };

  const handleToggle = () => {
    toggleDarkMode();
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setActiveLink(link);
    toggleSidebar(); // Close the sidebar when a link is clicked
  };
  

  
  return (
<Container isDarkMode={isDarkMode}>
<SidebarButton isDarkMode={isDarkMode} onClick={toggleSidebar}>
        <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M4 7h22M4 15h22M4 23h22"
          />
        </svg>
      </SidebarButton>
      <Nav1 isDarkMode={isDarkMode} className="logo-nav">
          <a href="/">
            <img src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
          </a>
          <Creat1>
          <a href="/">CREATE SE4AI</a></Creat1>
          </Nav1>



      <SidebarContainer isDarkMode={isDarkMode} isOpen={isOpen}>
        <NavMenu isDarkMode={isDarkMode}>
        <Nav isDarkMode={isDarkMode} className="logo-nav">
          <a href="/">
            <img src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
          </a>
          <Creat>
          <a href="/">CREATE SE4AI</a></Creat>
          </Nav>
          <SwitchLabel>
            <SwitchInput
              type="checkbox"
              checked={isDarkMode}
              onChange={handleToggle}
            />
            <Slider
              className={isDarkMode ? "slider round active" : "slider round"}
              checked={isDarkMode}
            > <div className="circle-wrapper">
            </div></Slider>
          </SwitchLabel>
          <CloseButton
            isDarkMode={isDarkMode}
            onClick={toggleSidebar}
          >
            <TfiClose />
          </CloseButton>
        </NavMenu>
        <Group isDarkMode={isDarkMode}>
        <SidebarHeading
                    className="first-heading" // Add a unique class for the first item

          isDarkMode={isDarkMode}
          selected={selectedLink === "/"}
          isActive={activeLink === "/"}

        >
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}

          >
      
      ← Back to main menu
          </Link>
        </SidebarHeading>
         <SidebarHeading
          isDarkMode={isDarkMode}
          selected={selectedLink === "/intro"}
          isActive={activeLink === "/intro"}
     
        >
          <Link
            to="/intro"
            onClick={() => handleLinkClick("/intro")}
            isDarkMode={isDarkMode}
            
          >
            Program Overview
          </Link>
        </SidebarHeading>
        <SidebarHeading
          isDarkMode={isDarkMode}
          selected={selectedLink === "/GEMinAI"}
          isActive={activeLink === "/GEMinAI"}
      
        >
          <Link
            to="/GEMinAI"
            onClick={() => handleLinkClick("/GEMinAI")}
            isDarkMode={isDarkMode}
            
          >
       GEMinAI Program
          </Link>
        </SidebarHeading>

        <SidebarHeading
          isDarkMode={isDarkMode}
          onClick={toggleLinks}
          selected={selectedLink.includes("/training-program")}
          style={{ marginTop: '-15px' }}
          >
          Training Program
          {showLinks ? (
            <Icon >
              <IoIosArrowDown  style={{ fontWeight: '900'}}
 />
            </Icon>
          ) : (
            <Icon>
              <MdOutlineArrowForwardIos  style={{ fontWeight: '900' }}/>
            </Icon>
          )}
        </SidebarHeading>
        {showLinks && (
          <>
            <SidebarLink
            className="first"
              isDarkMode={isDarkMode}
              to="/training-program/objectives"
              selected={selectedLink === "/training-program/objectives"}
              onClick={() => handleLinkClick("/training-program/objectives")}
              // style={{ paddingTop: '-35px' }}

            >
              Program Objectives
            </SidebarLink>
            <SidebarLink
             className="second"
              isDarkMode={isDarkMode}
              to="/training-program/components"
              selected={selectedLink === "/training-program/components"}
              onClick={() => handleLinkClick("/training-program/components")}
            >
              Program Components
            </SidebarLink>
          </>
        )}
        </Group>
 </SidebarContainer>

</Container>
  );
};

export default ProgramSidebarMedia;

const Container = styled.div`
  display: flex;
  width:100%;
  height:100%; 

`;
const Creat=styled.div`
/* border:2px solid yellow; */
width:110px;
    font-weight: bold;/* margin-left:10px; */
font-size:16px ; 
text-overflow:ellipsis;
margin-right:-5px;
`



const SidebarContainer = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")};
  /* padding-bottom: 100%; */
  display: ${(props) => (props.isOpen ? "block" : "none")};
  overflow-x: hidden;
  transition: 0.5s;
  height: 100%;
  @media (max-width: 995px) {
    position: absolute;
    z-index: 1;
    width: ${(props) => (props.isOpen ? "324px" : "0")};
    margin-left: -5px;
    padding-left: 10px;
  }
`;


const CloseButton = styled.button`
  font-size: 24px;
  cursor: pointer;
margin-left:35px;
/* float:right; */
border:none;
color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};

background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")};
`;

const SidebarLink = styled(Link)`
  display: block;
  text-align: left;
  /* border:2px solid orange; */
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight:500;
margin-left:15px;
margin-top:-5px;
width:80%;/* margin-top:-3px; */
border-radius:5px;
  font-size:16px;
padding:6px 16px; 
 text-decoration:none;
  color: ${({ selected, isDarkMode }) =>
    selected && isDarkMode ? "#bb5a7d" : selected ? "#bb5a7d" : "gray"};
  /* background-color: ${(props) =>
    props.isActive  ? "#BB5A7D" : props.isSelected ? "#BB5A7D" : "transparent"}; */
  transition: background-color 0.3s, color 0.3s;

  background-color: ${({ selected, isDarkMode }) =>
    selected && isDarkMode ? "#ffffff0d" : selected ? "#e8e8e8" : "transparent"};

  &:hover,
  &.active,
  a:active {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#282828" : "#e8e8e8"};
    color: #bb5a7d;
  }
  &.first  {
margin-top:-10px;
  }
  &.second  {
margin-top:0px;
  }
`;


const NavMenu = styled.ul`
  display: flex;
  display:flex;
  list-style: none;
height:57px;
border-bottom: ${(props) => (props.isDarkMode ? "1px solid #1c1e21" : "1px solid #eef0f2")};
cursor: pointer;
/* padding-left:-170px; */
/* border:2px solid blue; */
`;

const Nav = styled.li`
 display: flex;
 cursor: pointer;
/* border:2px solid orange; */
margin-left:-30px; 
margin-right:22px; 
font-weight:500; 
align-items:center;
img {
padding-top:0px;    height: 32px;
 cursor: pointer;
margin-right:10px;
/* border:2px solid orange ;  */
width:32px; 
margin-top:1px;
 }
 a {
   color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
   text-decoration: none;
   font-family:   "-apple-system", "Segoe UI", sans-serif;
  font-size: 16px;
 /* margin-top: -2px;  */
 /* padding-left:-20px; */
/* padding-left:-10px; */
/* width:80px; */
&.selected {
 color: #BB5A7D;
   }
 &:hover {
     color: #BB5A7D;
   }
   /* @media (max-width: 995px) {
    display: none; 
  } */
   
  }




`;
const SwitchLabel = styled.label`
  position: relative;
  /* margin-right:-10px; */
/* border:2px solid orange; */
  display: inline-block;
  width: 50px;
  height: 24px;
  margin-top:17px;
  margin-left:-5px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0px;
  height:0px;
  
 

  &:checked + .slider {
    background-color: #404040;
  }

  &:checked + .slider:before {
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:#4d4d4d;
  transition: 0.2s;
  border-radius: 33px;
  
    .circle-wrapper {
    position: absolute;
    height: 20px;
    width: 18px;
    left: ${(props) => (props.checked ? "2px" : "2px")};
    bottom: 3px;
    top: 2px;
    /* background-color: ${(props) => (props.checked ? "white" : "white")}; */
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
/* border:2px solid blue; */
    /* Add box-shadow for hover effect */
    &:hover {
      box-shadow: 2px 2px 2px 2px #bb5a7d;
      box-shadow: ${(props) => (props.checked ? "0px 0px 3px 3px #bb5a7d" : "2px 2px 2px 2px #bb5a7d")};
      -webkit-box-shadow:0px 0px 3px 3px #bb5a7d;
    }
    transform: translateX(${(props) => (props.checked ? "26px" : "0px")});
  }
  &:before {
    /* Add a shadow to the slider when the label is hovered */

    position: absolute;
    content: "${(props) => (props.checked ? "" : "")}";
  
    height: 20px;
    width: 18px;
    left: ${(props) => (props.checked ? "2px" : "2px")};
    bottom: 4px;
    top:2px;
    background-color: ${(props) => (props.checked ? " white" : " white")};
    transition: 0.2s;
    border-radius:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: ${(props) => (props.checked ? "white" : "black")};

  }

  &:after {
    position: absolute;
    content: "${(props) => (props.checked ? "🌜" : "🌞")}";
    color: ${(props) => (props.isDarkMode ? "white" : "black")};
    font-size: 16px;
    left: ${(props) => (props.checked ? "1px" : "23px")};
    bottom: 1px;
   
  }

  &.active {
    background-color: #4d4d4d;  
  }
   /* Add styles for checked state */

`

const SidebarHeading = styled.h2`
   color: ${(props) =>
    props.isSelected ? "#DADDE1" : props.isDarkMode ? "#DADDE1" : "gray"};  font-size: 15px;
  display: block;
  text-align: left;
font-size:16px; 
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight:500;
width:87%;/* margin-top:-3px; */
border-radius:5px;
padding:6px 16px; 
 text-decoration:none;

 background-color: ${({ selected, isDarkMode }) =>
    selected && isDarkMode ? "#ffffff0d" : selected ? "#e8e8e8" : "transparent"};
margin-top:2px;
  &:hover,
  &:active,
  &.active {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#383838" : "#e8e8e8"};
    color: #bb5a7d;
  }

  &.first-heading a {
    font-weight:700;
    font-size:15px;
  margin-left:15px;
  margin-top:-25px;
    color: ${({ selected, isDarkMode }) =>
      selected ? "#bb5a7d" : isDarkMode ? "white" : "black"};
  }
  &.first-heading{ 
    margin-top:-15px;
    width:100%;
    margin-left:-15px;
    
     background-color: ${(props) =>
    props.isDarkMode ?  "#ffffff0d" : "#f1f2f5"};}


  a {
    color: ${({ selected, isDarkMode }) =>
      selected ? "#bb5a7d" : isDarkMode ? "white" : "gray"};
    text-decoration: none;
  }

  a:hover,
  &.active {
    color: #bb5a7d;
    &:hover,
  &.active,
  a:active {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#383838" : "#e8e8e8"};
    color: #bb5a7d;
  }}
`;





const Icon = styled.span`
  margin-top: 5px;
font-weight:bolder;
  margin-left: 135px;
  font-size: 18px;
/* width:1px;
height:0px;  */
 /* border:1px solid orange; */
 color:#8d949e;
`;


  const SidebarButton = styled.button`
  /* border: 1px solid green; */
  width: 50px;
  font-size: 15px;
  cursor: pointer;
  border: none;
  margin-top:29px;
  background-color: ${(props) => (props.isDarkMode ? "#242526" : "white")};
  color: ${(props) => (props.isDarkMode ? "white" : "#193c47")};
  margin-left:6px;
  width:50px;
  /* border:2px solid red; */

  @media (min-width: 995px) {
    display: none;
    border: none;
    margin-right: 15px;
    padding-right: 20px;
  }
`;const Nav1 = styled.li`

display: flex;
 cursor: pointer;
margin-left:-1.5px ;
margin-top: -5px ; 
margin-right:22px; 
font-weight:500; 
align-items:center;
img {
padding-top:0px;    height: 32px;
 cursor: pointer;
margin-right:10px;
/* border:2px solid orange ;  */
width:32px; 
margin-top:42px;
 }
 a {
   color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
   text-decoration: none;
   font-family:   "-apple-system", "Segoe UI", sans-serif;
  font-size: 16px;
 margin-top: -2px; 
 /* padding-left:-20px; */
/* padding-left:-10px; */
/* width:80px; */
&.selected {
 color: #BB5A7D;
   }
 &:hover {
     color: #BB5A7D;
   }
   @media (min-width: 995px) {
    display: none; 
  }
   
 }`
 const Creat1 = styled.div`
 width: 110px;
 font-weight: bold;
 font-size: 16px;
 text-overflow: ellipsis;
 /* margin-right: -10px; */
 margin-top:35px;
margin-left:-5px;`;

const Group=styled.div`
/* width:100% ; */
/* border:2px solid orange; */
margin-top:-12px;
margin-left:3px;`