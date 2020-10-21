const getToken = ()=>{
    let info = window.localStorage.getItem('auth')
    info = JSON.parse(info)
    if(info && info.token){
        let token = info.token.accessToken;
        return token;
                  
    }
    return null
}

export default getToken;
