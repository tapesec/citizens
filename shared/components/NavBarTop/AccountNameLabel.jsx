import React from 'react';

const AccountNameLabel = ({ label, onClick }) => (
    <li>
        <a onClick={onClick}>{ label }</a>
    </li>
);

export default AccountNameLabel;
