// Notification.js
import React from 'react';

const Notification = ({ message }) => {
  return (
    <div style={{ position: 'fixed', top: 10, right: 10, background: 'green', padding: 10, color: 'white' }}>
      {message}
    </div>
  );
};

export default Notification;