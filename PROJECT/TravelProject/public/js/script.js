document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signupBtn');
    const signupPopup = document.getElementById('signupPopup');
    const loginBtn = document.getElementById('loginBtn');
    const loginPopup = document.getElementById('loginPopup')
    const closeBtn = document.getElementById('closeBtn');
    const loginCloseBtn = document.getElementById('logincloseBtn');

    signupBtn.addEventListener('click', () => {
        signupPopup.style.display = 'block';
    });

    loginBtn.addEventListener('click',() => {
        loginPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        signupPopup.style.display = 'none';
  
    });

    loginCloseBtn.addEventListener('click',()=>{
        loginPopup.style.display = 'none';
    })

    signupPopup.addEventListener('click', (e) => {
        if (e.target === signupPopup) {
            signupPopup.style.display = 'none';
        }
    });

    loginPopup.addEventListener('click',()=>{
        if (e.target === loginPopup){
            loginPopup.style.display='none';
        }
    });

});
