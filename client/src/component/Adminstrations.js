// This is the Adminstration part in Team  Page
import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
//import  icons
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
//import images
import LoriAkiyamaImage from "../component/team/photos/Lori-Akiyama.jpg";
import { Grid } from "@mui/material";

// const Adminstrations = () => {
//   const { isDarkMode } = useContext(DarkModeContext);

//   return (
//     <MiniContainer isDarkMode={isDarkMode}>
//       <Img src={LoriAkiyamaImage} alt="Lori Akiyama" />{" "}
//       <Name>Lori Akiyama</Name>
//       <Job>Program Coordinator</Job>
//       <University>Concordia University</University>
//       <Links>
//         {" "}
//         <SocialMedia isDarkMode={isDarkMode}>
//           <li>
//             <a href="https://www.linkedin.com/in/loriakiyama" target="blank">
//               <SmallIcon isDarkMode={isDarkMode}>
//                 <AiFillLinkedin />
//               </SmallIcon>
//             </a>
//           </li>
//           <li>
//             <a href="mailto:lori.akiyama@concordia.ca ">
//               <SmallIcon isDarkMode={isDarkMode}>
//                 <MdEmail />
//               </SmallIcon>
//             </a>
//           </li>
//         </SocialMedia>
//       </Links>
//     </MiniContainer>
//   );
// };

// export default Adminstrations;

// const Img = styled.img`
//        width: 100%;
//   height: 300px;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px; 
//   @media (max-width: 995px) {

//     height: 350px;
// /* margin-left:-0px;   width: 350px;  height: 320px; */

//  }
// `;
// const MiniContainer = styled.div`
//  margin-top: 20px; /* Change this value to decrease the margin */
//   border-radius: 10px;
//   border: ${(props) =>
//     props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"};
//   background-color: ${(props) => (props.isDarkMode ? "#404040" : "white")};
//   color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
//   /* ... other styles ... */
//   /* margin-left: -5px;  */
// width:315px;  /* width:100vw; */
// /* border:5px solid orange;  */
// @media (max-width: 995px) {
//     flex-direction:column;
// width:90vw;
// margin-left:1px; 

//  }
// `;

// const Name = styled.div`
//   font-weight: bold;
//   font-size: 20px;
//   margin-top: 20px;
//   margin-left: 15px;
// `;

// const Job = styled.div`
//   background-color: #bb5a7d;
//   color: white;
//   border-radius: 5px;
//   width: 80px;
//   text-align: center;
//   font-weight: bold;
//   padding: 2px 4px;
//   margin-left: 15px;
//   width: 170px;
// `;

// const University = styled.div`
//   margin-left: 15px;
// `;

// const Links = styled.div`
//   color: #404040;
//   font-weight: bold;
//   padding-right: 40px;

//   ul {
//     list-style: none;
//     margin: 0;
//     padding: 0;
//     color: #404040;
//   }
//   /* li {
//     width: 80px;
//   } */
// `;

// const SocialMedia = styled.div`
//   padding-top: 10px;
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   list-style: none;
//   height: 50px;
//   margin-left: 15px;
//   color: ${(props) => (props.isDarkMode ? "white" : "#585858")};

//   a {
//     display: flex;
//     /* align-items: center; */
//     text-align: center;
//     text-decoration: none;
//     color: #404040;
//     padding: 5px 5px;
//     transition: background-color 0.3s;
//     border-radius: 5px;
//     /* margin-right: 5px; */
//   }

//   a:hover {
//     background-color: #e8e8e8;
//   }
// `;

// const SmallIcon = styled.span`
//   font-size: 20px;
//   color: ${(props) => (props.isDarkMode ? "white" : "#585858")};
//   font-weight: bold;
//   margin-right: 7px;
// `;

const Adminstration=()=>{
  const { isDarkMode } = useContext(DarkModeContext);
  return(
<Container>
<Grid item lg={12} xl={12}    
></Grid>

<Main>


<Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={LoriAkiyamaImage} alt="Lori Akiyama"/></CardImage>
    <CardBody><h3>Lori Akiyama<span>Program Coordinator</span></h3>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    
<li >
<a href="https://www.linkedin.com/in/loriakiyama" target="blank">

  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
    
    <li>
      <a target="_blank" href="mailto:lori.akiyama@concordia.ca ">
        <svg aria-hidden="true"
        width="1em"
         focusable="false"
          data-prefix="fas"
           data-icon="envelope"
            class="svg-inline--fa fa-envelope fa-w-16 " 
            role="img" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"><path fill="currentColor"
             d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 
             48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg></a></li>
</ul></CardFooter>
    </SmallDiv></Div>
  
  </Main>


</Container>
)
}
export default Adminstration
const Container=styled.div`
margin-left:0px;


`

const Div=styled.div`
max-width: 25%;
text-align: left;
margin-top:15px;
/* margin-left:-165px; */
margin-right:2rem;
/* flex:0 0 100%; */
@media (max-width: 1000px) {

  max-width:358.4px;
}



`
const SmallDiv=styled.div`
border:${(props) => (props.isDarkMode ? "": "2px solid #eef0f2")};

width:298px; 
/* height:438.2px; */
background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
border-radius:20px;
box-shadow:0 1 2 0 rgb(0 0 0 1);
/* margin-top:20px;
margin-left:100px;  */
display:flex; 
flex-wrap:wrap;
@media (max-width: 1000px) {
    margin-right: 0; /* Remove right margin for mobile screens */
  width:358.4px;
}
`
const CardImage=styled.div`
@media (max-width: 1000px) {
  width:358.4px;
}
  border-radius:20px;`
const CardBody=styled.div`
  padding:0.25rem 1rem;

h3{
  font-size:1.25rem;
  font-weight:700px;
  margin-bottom :0;
}   
span{ 
  /* margin-left:7px; */
  display: inline-block;
  background-color:#bb5a7d;
  border:1px solid #bb5a7d;
  border-radius:0.4rem;
  color:#fff;
  font-size:75%;
  font-weight:700;
  padding:calc( 1rem *0.25) calc( 1rem *0.5);
  line-height: 1;
  margin-left:2px;
}   
padding-bottom: 0;
`
const CardFooter=styled.div` 
font-weight:700;
  margin-top: auto;
  padding:0.25rem 1rem;
ul{
  /* border:2px solid green; */
  margin-left:-0.75rem;
  padding-left:0.15rem;

}
li{
  border-radius: 0.5rem;
  /* border:2px solid yellow; */

    cursor: pointer;
    display: inline-block;
    margin-left:0rem;
    padding: 0.25rem 1rem;
    :hover {
 
    background-color: ${(props) => (props.isDarkMode ? "#484848" : "#f1f2f5")};

    border-radius: 0.5rem;
  }
}
a {
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
text-decoration:none;
  /* margin-left:-30px; */
 
}`
const Image =styled.img`
width:298px; 
height:298px; 
border-top-right-radius :15px; 
border-top-left-radius:15px;
@media (max-width: 1000px) {
 width:358.4px;
 height:358.4px;
 /* width:100%; */
 }
`

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  /* width:100%; */
  margin-bottom:80px;

  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;