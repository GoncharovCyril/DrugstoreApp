const postData = async () => {
    const url = "http://example.com/movies.json";

    return await fetch(url);
}

export const sendVerificationCode = async (phone, navigation) => {
    const url = `http://195.133.145.14/api/send_verification_code`;
    const data = {
        "phone": phone
    }

    try {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let status = response.status;
        let json = await response.json();

        return [status, json];
        // .then((status) => {
        //     switch(status){
        //         case 202:
        //             navigation.navigate('VerificationCodeScreen', {
        //                 "phone": phone
        //             });
        //             break;
        //         default:
        //             break;
        //     }

        // })

    } catch (error) {
        alert(error);
    }
}

export const login = async (phone, verification_code, navigation, dispatch) => {
    const url = `http://195.133.145.14/api/login`;
    const data = {
        "phone": phone,
        "verification_code": verification_code
    };
    try {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let status = response.status;
        let json = await response.json();

        return [status, json];
        // .then((response) => response.json())
        //     .then((json) => {
        //         if (json.Message !== "Invalid verification code") {
        //             dispatch({ type: "SET_TOKEN", payload: { token: json.token } });
        //             getUser(json.token, navigation);
        //         }
        //         // else {
        //         //     const t = "UmAgUTXjv4KizJCTiK5yvIxE3wBa3ZYTIjBsG7RstrDGnL8BJaejCtpMargt2zYD0FO3RIfLJmEaQfEYCiqXC75P6KGaMT93Q60UCLdC87onbbNrxHOEtX7mwQTUC179LoE5RdQ3etDfkhKsRj4X5HfWZoiLu38hjre4VqHnCj8adqVZuAnQhOSFPpg43r6orAZV44MBGmsKMu5kIBpXZwt2DJwUCAuCh1WlexumBHoOfEfWF7KbKZB8csy06Qr";
        //         //     dispatch({ type: "SET_TOKEN", payload: {token: t} });
        //         //     getUser(t, navigation);
        //         // }

        //         // const res = JSON.parse(json);
        //     })
        //     .catch((error) => console.error(error));;

    } catch (error) {
        alert(error);
    }
}


export const getUser = async (token, navigation) => {
    const url = `http://195.133.145.14/api/user`;
    const auth = 'Bearer ' + token;
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': auth
            }
        });
        let status = response.status;
        let json = await response.json();
        return [status, json];
    } catch (error) {
        alert(error)
    }

}