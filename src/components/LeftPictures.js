import React, { Component } from 'react';
import { Image } from 'antd';

import './LeftPictures.css'
import pic from '../assets/pictures/1.jpg'

class LeftPictures extends Component {
    render() {
        return (
            <div className="leftPictures">
                <Image width={600} src={pic}/>
                {/* <img alt="Developer-Test-Minicart-Size-Click" src="https://s3.invisionapp-cdn.com/storage.invisionapp.com/screens/files/221745405.png?x-amz-meta-iv=4&amp;response-cache-control=max-age%3D2419200&amp;x-amz-meta-ck=daee10707631a9a3504f6cf055e0eb9a&amp;AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&amp;Expires=1606780800&amp;Signature=vWZVxw%2F5MW1ICyTu7w3UkCbWHFE%3D" height="731" width="1440" decoding="sync"> */}
            </div>
        );
    }
}

export default LeftPictures;