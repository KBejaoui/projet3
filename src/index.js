app.get('/api/user', (req, res) => {
    res.send({
        "name": Khadija,
        "verified": true,
        "birthdate": 28/01/1990,
        "friends": ({
            "1": Mother,
            "2": Dad,
            "3": Sister
        }),    
        name: "Khadija",
        verified: "true",
        birthdate: "28/01/1990",
        friends: ([ "Mother", " Dad", " Sister" ]
            ),    
    });
});

const profile = document.getElementById('main-content');
const response = await fetch ('/api/user');
const img = profile.getElementsByClassName('img-profile');
img.innerHtml = img.img

const json = await response.json();
const name = profile.getElementsByClassName('name')[0];
const verified = profile.getElementsByClassName('boolean')[0];
const birthdate = profile.getElementsByClassName('birthday')[0];
const friends = profile.getElementsByClassName('array')[0];

name.innerHTML = json.name;
verified.innerHTML = json.verified;
title.birthdate = json.birthdate;
title.friends = json.friends;
// const profile = document.getElementById('main-content');

// const response = fetch ('/api/user'); //await fetch ('/api/user');

// const json = response.json(); //await response.json();

// const name = profile.getElementsByClassName('name')[0];
// const verified = profile.getElementsByClassName('boolean')[0];
// const birthdate = profile.getElementsByClassName('birthday')[0];
// const friends = profile.getElementsByClassName('array')[0];

// name.innerHTML = json.name;
// verified.innerHTML = json.verified;
// birthdate.innerHTML = json.birthdate;
// friends.innerHTML = json.friends; 