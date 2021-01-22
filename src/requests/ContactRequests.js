export const putContacts = async(token, phone, name, email, message) => {
    const url = 'http://195.133.145.14/api/contacts';
    const data = {
        "phone" : phone,
        "name" : name,
        "email" : email,
        "message" : message
    }
    try {
        console.log('body:',data)
        let response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
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