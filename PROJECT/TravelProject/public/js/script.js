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
        optForm.style.display = 'none';
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

const otpcloseBtn = document.getElementById('otpcloseBtn');
otpcloseBtn.addEventListener('click',()=>{
    document.getElementById("otpForm").style.display = 'none';
})



document.getElementById("signupSubmit").addEventListener("click", function() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("otpForm").style.display = "block";
});

document.getElementById("verifyOtp").addEventListener("click", function() {
    const otp = document.getElementById("otp").value;
    fetch('/verify-otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ otp: otp })
    })
    .then(response => response.json())
    .then(data => {
        if (data.verified) {
            window.location.href = "/home"; 
        } else {
            alert("Invalid OTP. Please try again.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
