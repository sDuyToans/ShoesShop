import User from '../models/User.js'
document.querySelector('#btn-signup').addEventListener('click', (event) =>{
    const newUser = document.querySelectorAll('.form-group input');
    // let user = {
    //     gender: true,
    // };
    let user = new User();
    if (newUser[6].checked){
        user.gender = false;
    }
    for (let i = 0; i < newUser.length - 2; i ++){
        const { id, value } = newUser[i];
        user[id] = value;
    }
    axios({
        method: 'post',
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        responseType: JSON,
        data: user
      })
      .then(result =>{
        console.log(result.data.message)
      })
      .catch(err =>{
        console.log(err)
      })
})