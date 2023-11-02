export const getAccessToken = () => {
    fetch("http://localhost:3000/auth/getAccessToken",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            refreshToken: sessionStorage.getItem("RefreshToken")
        })
    }).then(res => res.json())
    .then(data => {
        if(data.success)
            sessionStorage.setItem("AccessToken",data.accessToken)
    })
}

