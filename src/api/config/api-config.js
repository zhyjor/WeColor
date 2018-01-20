const key_config = {
    app_key: '2059013098',
    app_secret: '694cef3f5c41b4c3051d74fa11b990ce',
    redirect_uri: 'http://192.168.0.14:8089/splash'
}

const host_config = {
    local: 'http://192.168.0.14:8089/',
    host: 'https://pixel-api.herokuapp.com/',
    oauth: 'https://open.weibo.cn/oauth2/authorize',
}

const api_router_config = {
    oauth_post: '/oauth2/access_token',
    home_timeline: '/statuses/home_timeline.json',
    public_timeline: '/statuses/public_timeline.json',
    my_content: '/statuses/user_timeline.json',
    userinfo: '/users/show.json',
    content_comments: '/comments/show.json',
    send_post_text: '/statuses/update.json',
    send_post_image: '/statuses/upload.json',
    at_me_statue: '/statuses/mentions.json',
    at_me_comment: '/comments/mentions.json',
    receive_comment: '/comments/to_me.json',
    send_comment: '/comments/by_me.json',
    my_follower: '/friendships/followers.json',
    my_friend: '/friendships/friends.json'
}

export const HOST_CONCIG = host_config
export const KEY_CONFIG = key_config
export const API_ROUTER_CONFIG = api_router_config
export const DEBUG = false
