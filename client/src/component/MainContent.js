import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";

const MainContent = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container>
      <MainContainer>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={10} md={6} lg={6} xl={12}> 
           <Nserc>NSERC</Nserc>
            <HeroText>
       
          <svg
           xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496.008 496.008"
             class="logo_3-YD"
             width="200px"
             height="200px">
        
           <circle
            cx="248.004"
             cy="200" r="120"
              fill="#c36e8c">
              </circle>
<path d="M480.004 241.472V174.52c9.288-3.312 
16-12.112 16-22.528 0-13.232-10.768-24-24-24-2.752
 0-5.36.56-7.824 1.416l-35.848-44.816c2.288-3.656
  3.672-7.952 3.672-12.592 0-13.232-10.768-24-24-24-6.728
   0-12.792 2.8-17.16 7.272L327.78 26.168c.072-.728.224-1.424.224-2.168
    0-13.232-10.768-24-24-24-10.416 0-19.216 6.712-22.528
     16h-90.944C187.22 6.712 178.42 0 168.004 0c-13.232 
     0-24 10.768-24 24 0 .992.176 1.944.296 2.904l-39.68
      19.84C100.3 42.592 94.46 40 88.004 40c-13.232 0-24 10.768-24
       24 0 4.64 1.384 8.936 3.664 12.608L31.82 121.416c-2.464-.856-5.064-1.416-7.816-1.416-13.232 
       0-24 10.768-24 24 0 10.416 6.712 19.216 
       16 22.528v50.952c-9.288 3.304-16 12.104-16
        22.52 0 13.232 10.768 24 24 24 8.888 0
         16.568-4.912 20.72-12.104l43.672 
         7.944c1.848 11.4 11.688 20.16 23.608 20.16.328
          0 .624-.08.944-.096l15.264 38.16c-4.992 4.408-8.208
           10.768-8.208 17.936 0 13.232 10.768 24 24 24 8.048 0
            15.144-4.016 19.496-10.112l68.656 19.616c.616 9.744
             7.016 17.872 15.848 21.024v58.952c-9.288 3.312-16 
             12.112-16 22.528 0 13.232 10.768 24 24 24s24-10.768
              24-24c0-10.416-6.712-19.216-16-22.528v-58.952c9.288-3.312
               16-12.112 16-22.528 0-7.664-3.68-14.432-9.296-18.824l9.552-28.656
                71.784 23.928c.192 10.216 6.8 18.808 15.952 22.072v82.952c-9.288
                 3.312-16 12.112-16 22.528 0 13.232 10.768 24 24 24s24-10.768
                  24-24c0-10.416-6.712-19.216-16-22.528v-82.944c9.288-3.312 16-12.112
                  16-22.528 0-2.92-.6-5.688-1.56-8.28l61.384-51.152c3.584 2.128 7.72 
                  3.432 12.184 3.432 13.232 0 24-10.768 24-24 0-10.416-6.712-19.216-16-22.528zm-344.048
                   14.08c-.016-.96-.16-1.88-.288-2.808l65.624-34.024 20.296 65.384-85.632-28.552zM118.1 
                   232.88l-11.088-85.024 54.824-2.744a23.974 23.974 0 0021.216 14.784l13.432 43.288-68.136 
                   35.328a24.057 24.057 0 00-10.248-5.632zm-71.92-98c-.504-1.224-1.152-2.376-1.848-3.488L80.18
                    86.584c.928.32 1.84.664 2.808.872l5.912 45.288-42.72 2.136zm52.664-49.584c7.776-3.976 
                    13.16-11.984 13.16-21.296 0-.992-.176-1.944-.296-2.904l39.68-19.84c4.32 4.152 10.16
                     6.744 16.616 6.744 4.912 0 9.48-1.496 13.288-4.04l49.68 37.256-35.968 
                     33.568c-3.312-1.712-7.016-2.784-11-2.784-10.832 0-19.904 7.256-22.88 
                     17.136l-56.192 2.808-6.088-46.648zm183.184-51.72l-39.176 36.56L191.996
                      32h89.48c.192.528.328 1.064.552 1.576zm22.304 113.688l-64.376 
                      33.384-34.36-34.36c1.496-3.136 2.408-6.592 2.408-10.288 0-3.408-.736-6.632-2.016-9.568l37.984-35.456 
                      61.224 45.92c-.704 2.256-1.192 4.616-1.192 7.104 0 1.12.184 2.184.328 3.264zM192.004 
                      136c0 4.408-3.584 8-8 8s-8-3.592-8-8 3.584-8 8-8 8 3.592 8 8zm33.056 52.368l-14.152 
                      7.336-9.672-31.16 23.824 23.824zm-9.336 22.864l21.2-10.992 37.48 37.48c-1.488 3.128-2.4
                       6.584-2.4 10.28 0 7.672 3.68 14.432 9.296 18.824l-11.152 33.456-29.872-9.96-24.552-79.088zM296.004
                        256c-4.416 0-8-3.592-8-8s3.584-8 8-8 8 3.592 8 8c0 4.408-3.584 8-8 8zm0-32c-3.696 0-7.152.904-10.28
                         2.408l-33.896-33.896 59.84-31.032c4.288 4.016 10.008 6.52 16.336
                          6.52 4.464 0 8.6-1.304 12.184-3.44l36.424 
                          30.352-64.664 35.272c-4.256-3.8-9.8-6.184-15.944-6.184zM396.628
                           93c3.4 1.856 7.24 3 11.376 3
                            2.752 0 5.352-.56 7.816-1.416l35.848 44.816c-2.28 3.672-3.664 
                            7.96-3.664 12.6 0 1.288.184 2.536.384 3.768l-56.664 30.912-41.28-34.4c.96-2.592 1.56-5.36 1.56-8.28a23.88 23.88 0 00-1.84-9.184L396.628 93zm63.2 150.432l-54.888-45.744 51.128-27.888a23.752 23.752 0 007.944 4.72v66.952a24.07 24.07 0 00-4.184 1.96zM336.004 144c0 4.408-3.584 8-8 8s-8-3.592-8-8 3.584-8 8-8 8 3.592 8 8zm53.824 61.936l57.328 47.776-124.208-11.296 66.88-36.48zM480.004 152c0 4.408-3.584 8-8 8s-8-3.592-8-8 3.584-8 8-8 8 3.592 8 8zm-72-88c4.416 0 8 3.592 8 8s-3.584 8-8 8-8-3.592-8-8 3.584-8 8-8zm-23.784 5.832c-.064.728-.216 1.424-.216 2.168 0 3.256.664 6.352 1.84 9.184L339.372 123c-3.392-1.856-7.232-3-11.368-3-4.912 0-9.48 1.496-13.288 4.04l-58.864-44.152 37.16-34.68C296.316 46.936 300.02 48 304.004 48c6.728 0 12.8-2.8 17.16-7.272l63.056 29.104zM304.004 16c4.416 0 8 3.592 8 8s-3.584 8-8 8-8-3.592-8-8 3.584-8 8-8zm-136 0c4.416 0 8 3.592 8 8s-3.584 8-8 8-8-3.592-8-8 3.584-8 8-8zm-80 40c4.416 0 8 3.592 8 8s-3.584 8-8 8-8-3.592-8-8 3.584-8 8-8zm-64 80c4.416 0 8 3.592 8 8s-3.584 8-8 8-8-3.592-8-8 3.584-8 8-8zm0 112c-4.416 0-8-3.592-8-8s3.584-8 8-8 8 3.592 8 8-3.584 8-8 8zm8-30.528V166.52a23.94 23.94 0 0014.88-15.664l44.096-2.208 11.152 85.52c-4.592 2.08-8.344 5.584-10.848 9.92L47.62 236.16c-1.416-8.704-7.496-15.792-15.616-18.688zm72 38.528c0-4.408 3.584-8 8-8s8 3.592 8 8-3.584 8-8 8-8-3.592-8-8zm23.792 17.928a23.603 23.603 0 003.032-3.224l96.6 32.2 14.264 45.944c-1.984 1.488-3.744 3.24-5.184 5.256l-68.656-19.616C167.06 321.976 156.724 312 144.004 312c-.32 0-.624.08-.936.096l-15.272-38.168zM144.004 344c-4.416 0-8-3.592-8-8s3.584-8 8-8 8 3.592 8 8-3.584 8-8 8zm112 136c-4.416 0-8-3.592-8-8s3.584-8 8-8 8 3.592 8 8-3.584 8-8 8zm0-104c-4.416 0-8-3.592-8-8s3.584-8 8-8 8 3.592 8 8-3.584 8-8 8zm.272-34.112l-10.168-32.752 18.976 6.328-8.808 26.424zm40.176-69.936c9.456-.176 17.552-5.84 21.296-13.944l131.088 11.92c.208.8.448 1.584.728 2.352l-61.384 51.152c-3.584-2.128-7.712-3.432-12.176-3.432-7.664 0-14.432 3.68-18.824 9.296l-71.856-23.952 11.128-33.392zM376.004 480c-4.416 0-8-3.592-8-8s3.584-8 8-8 8 3.592 8 8-3.584 8-8 8zm0-128c-4.416 0-8-3.592-8-8s3.584-8 8-8 8 3.592 8 8-3.584 8-8 8zm96-80c-4.416
 0-8-3.592-8-8s3.584-8 8-8 8 3.592 8 8-3.584 8-8 8z" fill="#fff">
</path>          
          <g fill="#bb5a7d"></g>
          <path d="M16.004 0h16v16h-16zM16.004 32h16v16h-16zM32.004 16h16v16h-16zM.004 
          16h16v16h-16zM416.004 368h16v16h-16zM416.004 400h16v16h-16zM432.004 384h16v16h-16zM400.004
           384h16v16h-16zM464.004 32h16v16h-16zM464.004 64h16v16h-16zM480.004 48h16v16h-16zM448.004
            48h16v16h-16zM96.004 384h16v16h-16zM96.004 416h16v16h-16zM112.004 400h16v16h-16zM80.004
             400h16v16h-16zM48.004 296h16v16h-16zM48.004
           328h16v16h-16zM64.004 312h16v16h-16zM32.004 312h16v16h-16z" fill="#bb5a7d"></path></svg>
          {/* </LogoContainer> */}
          <Grid item xs={10} md={6} lg={6} xl={12}> 

              <CustomText>
                CREATE{" "}
                <RedText>
                  SE<WhiteText>4</WhiteText>AI
                </RedText>
              </CustomText></Grid>
              <P>
                A Training Program on the Development, Deployment and Servicing of
                Artificial Intelligence-based Software Systems
              </P>
              <ButtonLink to="/apply" isDarkMode={isDarkMode}>
                Apply Now
              </ButtonLink>
            </HeroText>
          </Grid>
        </Grid>
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  color: white;
  font-family: "Open Sans", sans-serif;
  margin-left: 0px;
  overflow: hidden;
    /* padding: 4rem 0; */
    position: relative;
  /* margin-right: 0px; */

  /* Media Query for Mobile Devices */
  @media (max-width: 995px) {
    /* padding: 20px; */
  }
`;

const MainContainer = styled.section`
  background-color: #303846;
  /* padding: 0px 0; */
  width:100%; 
  padding: 3.5rem  2rem;
  margin : 1px auto;
  margin-bottom:-60px;
  /* Media Query for Mobile Devices */
  @media (max-width: 995px) {
    padding: 1.8rem 2rem;
  }
`;
const Nserc = styled.span`
  font-size: 1.4rem;
margin-left:-165px;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
/* border:2px solid orange;  */
/* padding: 0; */
margin-top :185px; 
position:absolute;

`;






const HeroText = styled.div`
  /* max-width: 600px; */
  margin: 9px auto;
  padding-bottom:70px;

  /* Media Query for Mobile Devices */
  /* @media (max-width: 995px) {
    max-width: 70%;
  } */
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`; 
 
const ButtonLink = styled(Link)`
  background-color: ${(props) => (props.isDarkMode ? "#BB5A7D" : "#BB5A7D")};
  color: ${(props) => (props.isDarkMode ? "black" : "white")};
  font-weight:700;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  padding: 12px 34px;
  font-size: 19px;
  border: none;
  border-radius: 8px;
  width: 82px;
  cursor: pointer;
  margin-left:-65px;
  /* border :5px solid yellow; */
  text-decoration: none;
  animation: ${fadeInAnimation} 1s ease-in-out;

  /* Media Query for Mobile Devices */
  /* @media (max-width: 995px) {
    padding: 10px 20px;
    font-size: 18px;
    width: 160px;
    margin-top: 10px;
  } */
`;



const CustomText = styled.div`
  font-size: 48px;
  padding-top: 6px;
  margin-left:-65px;
  margin-bottom: -8px;
  font-weight: 700;
  line-height:1.25;
  font-family:system-ui,-apple-system,Segoe UI,Roboto
  ,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,
  "Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji",
  "Segoe UI Emoji","Segoe UI Symbol";
  @media (max-width: 995px) {
width:300px;  
margin-left:-30px;}
`;

const WhiteText = styled.span`
  color: white;
`;

const RedText = styled.span`
  color: #bb5a7d;
`;

const P = styled.p`
  font-size: 24px;
margin-left:-65px;  /* text-align: center; */
  padding-bottom: 5px;
align-items:2.5rem;
line-height:1.75;
font-family:system-ui,-apple-system,Segoe UI,Roboto
  ,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,
  "Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji",
  "Segoe UI Emoji","Segoe UI Symbol";

  /* Media Query for Mobile Devices */
  /* @media (max-width: 995px) {
    font-size: 18px;
    width: 100%;
    margin-left: 0;
  } */
`;

export default MainContent;
