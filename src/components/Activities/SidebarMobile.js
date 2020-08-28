
/** @jsx jsx */
import { css, jsx } from '@emotion/core' ;

const SidebarMobile = ({showActivities, setShowActivities}) => {


  return (
      <ul css={ulStyle}>
        <div css={buttonStyle} onClick={() => {
            setShowActivities(!showActivities)
            }}>
              <span></span>
              <span></span>
              <span></span>
        </div>
      </ul>
  );
}

const buttonStyle = css`
      display: block;
      padding-top: 20px;
      padding-left: 20px;

      span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        background: gray;
        border-radius: 3px;
        z-index: 1;
      }
      ` 

const ulStyle = css`
      grid-area: sidebar-mobile;
      border-right: 1px solid black;
      height: 100%;
      text-align: left;
      list-style-type: none;

      @media (min-width: 800px) {
        display: none;
      }
      `

export default SidebarMobile;
