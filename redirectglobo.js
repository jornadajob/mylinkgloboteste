if (!navigator.userAgent.includes('Googlebot')) {
    // Redirect only normal users
    window.location.href = "https://globo.com/";
} else {
    console.log("Thanks for visiting my page");
}