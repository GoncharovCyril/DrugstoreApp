const postData = async () => {
    const url = "http://example.com/movies.json";

    return await fetch(url);
}

export const test = () => {
    fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.error(error));
}

export const sendVerificationCode = (phone, navigation) => {
    const url = `http://195.133.145.14/api/send_verification_code`;
    const data = {
        "phone": phone
    }
    const response = fetch(url,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.status)
    .then((status) => {
        console.log(status);
        switch(status){
            case 202:
                navigation.navigate('VerificationCodeScreen', {
                    "phone": phone
                });
                break;
            default:
                break;
        }

    })
    .catch((error) => console.error(error));;
}

export const login = (phone, verification_code, navigation, dispatch) => {
    const url = `http://195.133.145.14/api/login`;
    const data = {
        "phone": phone,
        "verification_code": verification_code
    };
    console.log(data);
    const response = fetch(url,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
    .then((json) => {
        console.log(json)
        if(json.Message !== "Invalid verification code"){
            dispatch({ type: "SET_TOCKEN", payload: {tocken: json.token} });
            getUser(json.token, navigation);
        }
        else {
            const t = "UmAgUTXjv4KizJCTiK5yvIxE3wBa3ZYTIjBsG7RstrDGnL8BJaejCtpMargt2zYD0FO3RIfLJmEaQfEYCiqXC75P6KGaMT93Q60UCLdC87onbbNrxHOEtX7mwQTUC179LoE5RdQ3etDfkhKsRj4X5HfWZoiLu38hjre4VqHnCj8adqVZuAnQhOSFPpg43r6orAZV44MBGmsKMu5kIBpXZwt2DJwUCAuCh1WlexumBHoOfEfWF7KbKZB8csy06Qr";
            dispatch({ type: "SET_TOCKEN", payload: {tocken: t} });
            getUser(t, navigation);
        }
        
        // const res = JSON.parse(json);
        // console.log(res.token)
    })
    .catch((error) => console.error(error));;
}


export const getUser = (token, navigation) => {
    const url = `http://195.133.145.14/api/user`;
    const auth = 'Bearer ' + token;
    console.log(auth)
    const response = fetch(url,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': auth
        }
    }).then((response) => response.json())
    .then((json) => {
        console.log(json);
        switch (json.message){
            
            case "Unauthenticated.":
                console.log("INPUT nUMBERR");
                navigation.navigate("PhoneNumberScreen");
                break; 

            default:
                console.log("Show acc");
                navigation.navigate("AccountScreen", {
                    account: json
                });
                break;
        }
    })
    .catch((error) => console.error(error));;
}