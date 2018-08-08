import React from 'react';

const User = ({match}) => {
  return (
    <div>
      <h1>Hello {match.params.username}!</h1>
    </div>
  );
}
export default User;
