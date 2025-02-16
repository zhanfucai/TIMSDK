import TimRender from "../../../im_electron_sdk/dist/renderer";
// import TimRender from "im_electron_sdk/dist/renderer";
const timRenderInstance = new TimRender();
const TimBaseManager = {
    callExperimentalAPI: () => {
        return timRenderInstance.callExperimentalAPI({
            json_param: {
                request_internal_operation: 'internal_operation_set_custom_server_info',
                request_set_custom_server_info_param: {
                  longconnection_address_array: [{
                        server_address_ip: "202.103.39.205",// ip
                        server_address_port: 8890// 端口
                  }],
                  server_public_key: '0436ddd1de2ec99e57f8a796745bf5c639fe038d65f9df155e3cbc622d0b1b75a40ee49074920e56c6012f90c77be69f7f'// 公钥
                }
            }
        })
    },
    TIMInit: () => {
        return timRenderInstance.TIMInit();
    },
    TIMLogin: () => {
        return timRenderInstance.TIMLogin({
            userID: "109442",
            userSig: "eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwoYGliYmRlCZ4pTsxIKCzBQlK0MTAwNTS3MDSwOITGpFQWZRKlDc1NTUyMAAKlqSmQsSMzMxN7U0NjaGihZnpgMNTjJ3DnLKyXL1TIo0CHdNSnbJCbXMN-aoDIxyt-RKM-BKjir2rnIKDy-zd7RVqgUAuD8wOg__",
            userData: "xingchenhe-test",
            // userID:"100124239",
            // userSig:"eAEtzE0LgjAYB-Dvsmshj9uaz4QugdRBTylhtzWXPUQ1nEkUffdEu-7*Lx9W5vsoNFfjPTUsjRFhJYTEZDklPd3cqEqiEjLhOGuglqVs91R2e3xQkW20aQcwtUYdfGVPRWUX*eVQ1pmxRf02Yc3moXt56sZDBRIBZhtcN57xCP4daty9pzNNHAPEXHKh2fcHoVgxDw__",
            // userData: "private"
            // userID: "lexuslin",
            // userSig: "eJwtjM0KgkAURt9l1iF3rjbjCC1chVFBWtR2dKa8ZGL*IUTvnqnf7jsHzoed94nT25oFDB1gq*mTsWVLd5pwYYeuKahcXGOeuqrIsIB7ANyX7hpnY4eKajtyAB-GzbSl158J9FAAV3Kp0GNMK6Ey40UYp7GmLsrRCDc8Qp7dePqWPc-UVqvd4XJNThv2-QHiqDGk"
        })
    },
    TIMInvite: () => {
        return timRenderInstance.TIMInvite({
            userID: '109442',
            senderID: '3708',

            data: JSON.stringify({
                buisnessID: 'av_call',
                call_type: 2,
                room_id: 22334,
            }),
        })
    },
    TIMInviteInGroup: () => {
        return timRenderInstance.TIMInviteInGroup({
            senderID: '3708',
            groupID: "@TGS#17VSIGKHC",
            userIDs: ['109442'],
            data: JSON.stringify({
                buisnessID: 'av_call',
                call_type: 2,
                room_id: 22334,
            }),
        }).then(data => {
            const inviteID = JSON.parse(JSON.parse(data)[0].message_elem_array[0].custom_elem_data).inviteID;
            console.log(inviteID)
            // timRenderInstance.TIMAcceptInvite({
            //     inviteID: inviteID,
            //     data: JSON.stringify({
            //         buisnessID: 'av_call',
            //         call_type: 2,
            //         room_id: 22334,
            //     })
            // }).then(data => {
            //     console.log(data, 211)
            // })
        })
    },
    TIMOnInvited: () => {
        return timRenderInstance.TIMOnInvited({
            callback: (data) => {
                const inviteID = JSON.parse(JSON.parse(data)[0].message_elem_array[0].custom_elem_data).inviteID;
                console.log(inviteID)
                // timRenderInstance.TIMRejectInvite({
                //     inviteID: inviteID,
                //     data: JSON.stringify({
                //         buisnessID: 'av_call',
                //         call_type: 2,
                //         room_id: 22334,
                //     })
                // }).then(data => {
                //     console.log(data, 211)
                // })
            }
        })
    },
    TIMOnTimeout: () => {
        return timRenderInstance.TIMOnTimeout({
            callback: (data) => {
                console.log('请求超时', data)
            }
        })
    },
    TIMOnRejected: () => {
        return timRenderInstance.TIMOnRejected({
            callback: (data) => {
                console.log('有人拒绝', data)
            }
        })
    },
    TIMOnAccepted: () => {
        return timRenderInstance.TIMOnAccepted({
            callback: (data) => {
                console.log('有人接受', data)
            }
        })
    },
    TIMOnCanceled: () => {
        return timRenderInstance.TIMOnCanceled({
            callback: (data) => {
                console.log('被取消', data)
            }
        })
    },
    TIMUninit: () => {
        return timRenderInstance.TIMUninit()
    },
    TIMGetSDKVersion: () => {
        return timRenderInstance.TIMGetSDKVersion();
    },
    TIMGetServerTime: () => {
        return timRenderInstance.TIMGetServerTime();
    },
    TIMLogout: () => {
        return timRenderInstance.TIMLogout({
            userData: "logout"
        })
    },
    TIMGetLoginStatus: () => {
        return timRenderInstance.TIMGetLoginStatus()
    },
    TIMGetLoginUserID: () => {
        return timRenderInstance.TIMGetLoginUserID({
            userData: "getLoginUserID"
        })
    },
    TIMSetNetworkStatusListenerCallback: () => {
        return timRenderInstance.TIMSetNetworkStatusListenerCallback({
            userData: "setNetworkStatusListenerCallback",
            callback: (data) => {
                console.log(data, 'setNetworkStatusListenerCallback');
            }
        })
    },
    TIMSetKickedOfflineCallback: () => {
        return timRenderInstance.TIMSetKickedOfflineCallback({
            userData: "TIMSetKickedOfflineCallback",
            callback: (data) => {
                console.log(data, 'TIMSetKickedOfflineCallback');
            }
        })
    },
    TIMSetUserSigExpiredCallback: () => {
        return timRenderInstance.TIMSetUserSigExpiredCallback({
            userData: "TIMSetUserSigExpiredCallback",
            callback: (data) => {
                console.log(data, 'TIMSetUserSigExpiredCallback');
            }
        })
    },
    TIMProfileGetUserProfileList: () => {
        return timRenderInstance.TIMProfileGetUserProfileList({
            json_get_user_profile_list_param: {
                friendship_getprofilelist_param_identifier_array: ['3708']
            },
            userData: "TIMProfileGetUserProfileList",
        })
    },
    TIMProfileModifySelfUserProfile: () => {
        return timRenderInstance.TIMProfileModifySelfUserProfile({
            json_modify_self_user_profile_param: {
                user_profile_item_nick_name: 'Jingfeng'
            },
            userData: "TIMProfileModifySelfUserProfile",
        })
    }
}

export default TimBaseManager;