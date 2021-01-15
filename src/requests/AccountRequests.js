export const sendVerificationCode = async (phone) => {
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
export const login = async (phone, verification_code) => {
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
    } catch (error) {
        alert(error);
    }
}


export const getUser = async (token) => {
    const url = `http://195.133.145.14/api/user`;
    const auth = 'Bearer ' + token;
    console.log(auth)
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