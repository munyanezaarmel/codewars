function emails(str) {
    let email = str.split(" ")
   const result= email.filter(el=>el.includes("@"))
     return result.join(', ');
}
console.log(
  emails(
    `My email is sdf@.com and i wrote an email to mugabo@gmail.com and cced kigali@kigali.com`
  )
);