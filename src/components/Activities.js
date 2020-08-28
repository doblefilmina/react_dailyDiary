import { useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core' ;
import Detail from './Activities/Detail.js';
import SidebarMobile from './Activities/SidebarMobile';
import SidebarDesktop from './Activities/SidebarDesktop';



const Activities = ({activities}) => {

  const [showActivities, setShowActivities] = useState(false)
  const [currentActivity, setCurrentActivity] = useState({})

  return (
  
        <div className="Activities" css={css`
        display: grid;
        grid-template-columns: 300px auto;
        grid-template-areas: "sidebar-desktop main";
        width: 100vw;
        height: 100vh;

        @media (max-width: 800px) {
          grid-template-columns: 80px auto;
          grid-template-areas: "sidebar-mobile ${showActivities ? 'sidebar-desktop' : 'main'}";
          height: 100vh;
        }
        `}>
          <SidebarDesktop activities={activities} showActivities={showActivities} setCurrentActivity={setCurrentActivity} />
          <SidebarMobile showActivities={showActivities} setShowActivities={setShowActivities} />
          <Detail showActivities={showActivities} currentActivity={currentActivity} />
         
        </div>
  );
}
export default Activities;
