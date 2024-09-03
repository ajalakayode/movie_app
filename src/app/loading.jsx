import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <div className='h-screen flex items-center justify-center'>

    <Box sx={{ display: 'flex item-center justify-center' }}>
      <CircularProgress />
    </Box>
    </div>
  );
}












// import React from 'react'

// export default function loading() {
//   return (
//     <div>loading...</div>
//   )
// }


// import React from 'react';
// import './Loading.css'; // Import your CSS file for styling

// const Loading = () => {
//   return (
//     <div className="loading-container">
//       <div className="spinner"></div>
//       <p className="loading-text">Loading...</p>
//     </div>
//   );
// };

// export default Loading;



