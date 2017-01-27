import React, { Component } from 'react';

export class Redbubble extends Component {
  render () {
    return <svg className="redbubbleIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 788.856 788.143">
            <g>
              <path className="u-fill" d="M792,396.257c0.421,214.952-173.73,393.9-394.306,394.037C177.551,790.431-.454,610.612,3.2,389.261,6.74,174.817,183.455-1.613,404.914,2.213,619.461,5.919,792.3,181.217,792,396.257ZM332.569,425.63c0.7-.329,1.1-0.527,1.506-0.7,20.792-8.955,34.9-24.294,42.707-45.377,6.942-18.744,7.59-38.045,3.6-57.475-4.624-22.514-16.284-40.449-35.931-52.773-16.8-10.539-35.5-14.986-55.043-15.62-17.372-.563-34.774-0.227-52.163-0.25q-28.872-.037-57.745,0c-5.4,0-9.463,2.8-10.743,7.605a21.614,21.614,0,0,0-.565,5.509q-0.039,129.425-.023,258.849c0,0.52-.012,1.041,0,1.561,0.218,7.035,4.577,11.28,11.589,11.28q108.467,0,216.934.02c4.553,0,7.959-1.883,9.96-5.865,2.009-4,1.417-7.9-1.324-11.483q-29.1-38.068-58.176-76.155C342.34,438.446,337.53,432.134,332.569,425.63Zm282.084-43.389a2,2,0,0,1,.146-0.566c0.313-.415.649-0.811,0.981-1.212a60.007,60.007,0,0,0,11.345-21.273c4.739-15.864,4.866-31.959,1.632-48.038-5.116-25.44-19.9-42.76-44.5-51.462-12.886-4.559-26.25-6.227-39.841-6.247-32.7-.049-65.407.1-98.109-0.108-7.042-.045-12.354,4.594-12.207,12.326,0.266,13.968.075,27.945,0.075,41.919q0,109.035-.091,218.07c-0.016,7.754,4.8,12.77,12.745,12.7,33-.278,66-0.063,99-0.157,7.64-.022,15.3-0.281,22.914-0.9a119.971,119.971,0,0,0,40.574-10.263c21.361-9.8,36.613-25.279,42.934-48.287a96,96,0,0,0-3.471-62.038c-5.862-14.818-16.241-25.74-30.593-32.8C617.013,383.331,615.816,382.789,614.653,382.242Z" transform="translate(-3.145 -2.152)"/>
            </g>
          </svg>;
  }
}

export default (props) => {
  const { icon } = props;

  if (icon === "redbubble") return <Redbubble />;
}
