import React from 'react';

const UserPage = () => {
  const barStyle = {
    backgroundColor: 'blue',
    width: '200px', // Adjust the width as needed
    height: '100%', // Bar spans the entire height of its container
    position: 'absolute',
    top: '0',
    left: '0',
  };

  const orangeCircleStyle = {
      backgroundColor: 'orange',
      width: '100px', // Adjust the circle diameter as needed
      height: '100px',
      borderRadius: '50%', // Makes it a circle
      position: 'absolute',
      top: '20px', // Adjust the positioning
      left: '40px', // Adjust the positioning
    };

  const searchStyle = {
    marginTop: '10px', // Add margin to separate search bar from the blue bar
    width: '1000px', // Adjust the width as needed
  };

  const buttonStyle = {
      backgroundColor: 'orange',
      color: 'white',
      padding: '30px',
      borderRadius: '10px',
      cursor: 'pointer',
    };

  const sessionsBoxStyle = {
      backgroundColor: 'orange',
      width: '100px', // Adjust the width of the grey boxes
      height: '20px', // Adjust the height of the grey boxes
      margin: '10px 0', // Add spacing between the grey boxes
      border: '2px solid grey',
      position: 'absolute',
      top: '150px', // Adjust the top position
      left: '40px', // Adjust the left position

  };

  const sessionsBoxTextStyle = {
      color: 'white',
      fontSize: '14px', // Adjust the font size
      textAlign: 'center', // Center the text horizontally
    };

  const greyBoxStyle1 = {
      backgroundColor: 'grey',
              width: '100px', // Adjust the width of the grey boxes
              height: '20px', // Adjust the height of the grey boxes
              margin: '10px 0', // Add spacing between the grey boxes
              border: '2px solid orange',
              position: 'absolute',
              top: '200px', // Adjust the top position
              left: '40px', // Adjust the left position
    };

  const greyBoxStyle2 = {
        backgroundColor: 'grey',
        width: '100px', // Adjust the width of the grey boxes
        height: '20px', // Adjust the height of the grey boxes
        margin: '10px 0', // Add spacing between the grey boxes
        border: '2px solid orange',
        position: 'absolute',
        top: '250px', // Adjust the top position
        left: '40px', // Adjust the left position
      };

  const greyBoxStyle3 = {
        backgroundColor: 'grey',
        width: '100px', // Adjust the width of the grey boxes
        height: '20px', // Adjust the height of the grey boxes
        margin: '10px 0', // Add spacing between the grey boxes
        border: '2px solid orange',
        position: 'absolute',
        top: '300px', // Adjust the top position
        left: '40px', // Adjust the left position
      };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div style={barStyle}></div>
      <div style={barStyle}>
        <div style={sessionsBoxStyle}>
           <div style={sessionsBoxTextStyle}>Sessions</div>
        </div>
        <div style={greyBoxStyle1}></div>
        <div style={greyBoxStyle2}></div>
        <div style={greyBoxStyle3}></div>
      </div>
      <div style={{ marginLeft: '250px' }}>
        <div style={orangeCircleStyle}></div>
        <h1>User Page</h1>
        <input type="text" placeholder="Search" style={searchStyle} />
        {/* Content of your User Page goes here */}
      </div>
      <div style={{ marginLeft: '700px', marginTop: '20px'  }}>
        <button style={buttonStyle}>Start ChatBot</button>
      </div>
    </div>
  );
}

export default UserPage;
