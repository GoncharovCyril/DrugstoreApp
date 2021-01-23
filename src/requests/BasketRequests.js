export const getCart = async(token) => {
    const url = 'http://195.133.145.14/api/cart';
    console.log(token)

    const tokenTemp = token != null ? token : 'none';

    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer '+tokenTemp
            }
        });
        let status = response.status;
        // let json = await response.json();
        let text = await response.text();

        return [status, text];

    } catch (error) {
        alert(error)
    }
}

export const postCart = async(drugId, count, token) => {
    const url = 'http://195.133.145.14/api/cart';
    const data = {
        "drug": drugId,
        "count": count
    }
    try {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": 'Bearer '+token
            }
        });
        let status = response.status;
        // let json = await response.json();
        let text = await response.text();

        return [status, text];

    } catch (error) {
        alert(error)
    }
}


export const delCart = async(drugId, token) => {
    const url = 'http://195.133.145.14/api/cart/'+drugId.toString();
    try {
        let response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": 'Bearer '+token
            }
        });
        let status = response.status;
        // let json = await response.json();
        let text = await response.text();

        return [status, text];

    } catch (error) {
        alert(error)
    }
}

export const delAllCart = async(token) => {
    const url = 'http://195.133.145.14/api/cart';
    try {
        let response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": 'Bearer '+token
            }
        });
        let status = response.status;
        // let json = await response.json();
        let text = await response.text();

        return [status, text];

    } catch (error) {
        alert(error)
    }
}