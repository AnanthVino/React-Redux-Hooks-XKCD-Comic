/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React from 'react';
 
const UpdatedHomeComponent = (OriginalHomeComponent) => {
    class NewHomeComponent extends React.Component {
        render() {
            return <OriginalHomeComponent />
        }
    }
    return NewHomeComponent
}

export default UpdatedHomeComponent;