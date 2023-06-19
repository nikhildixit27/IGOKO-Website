console.log("hello")

let web = document.getElementById("product-web-design")
let digital = document.getElementById("product-digital-marketing")
let seo = document.getElementById("product-seo-services")
let email = document.getElementById("product-email-marketing")
let social = document.getElementById("product-social-media")
console.log(web,digital,seo,email,social);

const showweb = ()=>{
    web.style.display="flex";
    seo.style.display="none"
    email.style.display="none"
    social.style.display="none"
    digital.style.display="none"
}
const showdigital = ()=>{
    web.style.display="none"
    seo.style.display="none"
    email.style.display="none"
    social.style.display="none"
    digital.style.display="flex"
}
const showseo = ()=>{
    web.style.display="none"
    seo.style.display="flex"
    email.style.display="none"
    social.style.display="none"
    digital.style.display="none"
}
const showemail = ()=>{
    web.style.display="none"
    seo.style.display="none"
    email.style.display="flex"
    social.style.display="none"
    digital.style.display="none"
}
const showsocial = ()=>{
    web.style.display="none"
    seo.style.display="none"
    email.style.display="none"
    social.style.display="flex"
    digital.style.display="none"
}


let arrowweb = document.getElementById("arrowweb")
let arrowdig = document.getElementById("arrowdig")
let arrowseo = document.getElementById("arrowseo")
let arrowemail = document.getElementById("arrowemail")
let arrowsocial = document.getElementById("arrowsocial")

const showrowweb =()=>{
    arrowweb.style.display="block"
    document.getElementById("webup").style.display="block"
    document.getElementById("webdown").style.display="none"

}
const hiderowweb =()=>{
    arrowweb.style.display="none"
    document.getElementById("webup").style.display="none"
    document.getElementById("webdown").style.display="block"
}
const showarrowdig =()=>{
    arrowdig.style.display="block"
    document.getElementById("digup").style.display="block"
    document.getElementById("digdown").style.display="none"
}
const hidearrowdig =()=>{
    arrowdig.style.display="none"
    document.getElementById("digup").style.display="none"
    document.getElementById("digdown").style.display="block"
}
const showarrowseo =()=>{
    arrowseo.style.display="block"
    document.getElementById("seoup").style.display="block"
    document.getElementById("seodown").style.display="none"
}
const hidearrowseo =()=>{
    arrowseo.style.display="none"
    document.getElementById("seoup").style.display="none"
    document.getElementById("seodown").style.display="block"
}
const showarrowemail =()=>{
    arrowemail.style.display="block"
    document.getElementById("emailup").style.display="block"
    document.getElementById("emaildown").style.display="none"
}
const hidearrowemail =()=>{
    arrowemail.style.display="none"
    document.getElementById("emailup").style.display="none"
    document.getElementById("emaildown").style.display="block"
}
const showarrowsocial =()=>{
    arrowsocial.style.display="block"
    document.getElementById("socialup").style.display="block"
    document.getElementById("socialdown").style.display="none"
}
const hidearrowsocial =()=>{
    arrowsocial.style.display="none"
    document.getElementById("socialup").style.display="none"
    document.getElementById("socialdown").style.display="block"
}