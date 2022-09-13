
  /* Only Share if the Secret if the Origin is Secure! */
  if(window.saveSecret){
    if(window.location.host === "app.localhost.com:5000"){
      let secret = 'ac72961177dd267c4705e62a95c7eb8f4c8294d2';
      console.log("secret Sent!")
      window.saveSecret(secret);
    }
  }
  

