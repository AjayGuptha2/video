import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const RoomPage = () => {
    const { roomId } = useParams();
    const myMeeting = async (element) => {
        const appId = 1324879705;
        const serverSecret = "55ea9ff6ee68a83bcedaf183e25ec7ab";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), "ajay");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    // url: `http://localhost:3000/room/${roomId}`
                    url: window.location.href
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false,
        });
    };
    return (
        <div>
            <div ref={myMeeting} />
        </div>
    )
}

export default RoomPage;
