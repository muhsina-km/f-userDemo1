import React from 'react';
import { Modal, Button, Card } from 'antd';

const UserDetails = ({ visible, userDetails, onClose, onLogout }) => {
  return (
    <Modal
      visible={visible}
      title="User Details"
      onCancel={onClose}
      footer={[
        <Button key="logout" type="primary" onClick={onLogout}>
          Logout
        </Button>,
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
      ]}
    >
      <Card>
        <p>Email: {userDetails?.email}</p>
        {/* Add other user details as needed */}
      </Card>
    </Modal>
  );
};

export default UserDetails;