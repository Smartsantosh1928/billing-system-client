export const getAccessToken = () => {
    const refreshToken = localStorage.getItem("RefreshToken")
    fetch("http://localhost:3000/auth/getAccessToken",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({refreshToken})
    }).then(res => res.json())
    .then(data => {
        if(data.success){
            console.log("Access Token refreshed");
            localStorage.setItem("AccessToken",data.accessToken)
        }
    }).catch(err => {
        console.log("Error in refreshing Access Token: ",err);
    })
}

