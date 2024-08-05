//select root element
const root = document.querySelector("#root");

//create navbar
const headerElement = document.createElement("header");
headerElement.classList.add("headerElement");
const headerLogo = document.createElement("img");
headerLogo.classList.add("headerLogo");
headerLogo.src = "./assets/images/logo.svg";
const navbar = document.createElement("nav");
navbar.classList.add("navbar");
const featurseBtn = document.createElement("button");
const teamBtn = document.createElement("button");
const signInBtn = document.createElement("button");
featurseBtn.classList = teamBtn.classList = signInBtn.classList = "navbarBtn";
featurseBtn.innerText = "Features";
teamBtn.innerText = "Team";
signInBtn.innerText = "Sign In";


//section1 : All your files in one secure location
const section1 = document.createElement("section");
section1.classList.add("section1");
const firstPartSection1 = document.createElement("section");
firstPartSection1.classList.add("firstPartSection1");
const Section1Heading = document.createElement("h1");
Section1Heading.classList.add("Section1Heading");
Section1Heading.innerText = "All your files in one secure location, accessible anywhere.";
const Section1Para = document.createElement("p");
Section1Para.classList.add("Section1Para");
Section1Para.innerText = "Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.";
const Section1InputBar = document.createElement("div");
Section1InputBar.classList.add("Section1InputBar");
const Section1InputEle = document.createElement("input");
Section1InputBar.classList.add("Section1InputBar");
Section1InputEle.placeholder = "Enter your email...";
Section1InputEle.classList.add("Section1InputEle");
const Section1Button = document.createElement("button");
Section1Button.classList.add("Section1Button");
Section1Button.innerText = "Get Started";
const section1Image = document.createElement("img");
section1Image.classList.add("section1Image");
section1Image.src = "./assets/images/illustration-1.svg";

//section 2 : Stay Productive
const section2 = document.createElement("section");
section2.classList.add("section2");
const bgCurveDesktop = document.createElement("img");
bgCurveDesktop.classList.add("bgCurveDesktop");
bgCurveDesktop.src = "./assets/images/bg-curve-desktop.svg"
const bgCurveMobile = document.createElement("img");
bgCurveMobile.classList.add("bgCurveMobile");
bgCurveMobile.src = "./assets/images/bg-curve-mobile.svg";
const firstPartsection2 = document.createElement("section");
firstPartsection2.classList.add("firstPartSection2");
const section2Heading = document.createElement("h1");
section2Heading.classList.add("section2Heading");
section2Heading.innerText = "Stay productive, wherever you are";
const section2Para = document.createElement("p");
section2Para.classList.add("section2Para");
section2Para.innerText = "Never let location be an issue when accessing your files. Fylo has you covered or all of your file storage needs.";
const section2Para2 = document.createElement("p");
section2Para2.classList.add("section2Para2");
section2Para2.innerText = "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!";
const section2Link = document.createElement("a");
section2Link.classList.add("section2Link");
section2Link.innerText = "See how Fylo works ";
section2Link.href = "#"
const arrowIcon = document.createElement("img");
arrowIcon.classList.add("arrowIcon");
arrowIcon.src = "./assets/images/icon-arrow.svg";
const reviewBox =document.createElement("div");
reviewBox.classList.add("reviewBox");
const qoutationMark = document.createElement("h1");
qoutationMark.classList.add("qoutationMark");
qoutationMark.innerText = "“";
const reviewPara = document.createElement("p");
reviewPara.classList.add("reviewPara");
reviewPara.innerText = "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.";
const profile = document.createElement("div");
profile.classList.add("profile");
const profilePic = document.createElement("img");
profilePic.classList.add("profilePic");
profilePic.src = "./assets/images/avatar-testimonial.jpg";
const profileInfo = document.createElement("div");
profileInfo.classList.add("profileInfo");
const userName = document.createElement("h4");
userName.classList.add("userName");
userName.innerText = "Kyle Burton";
const userRole = document.createElement("p");
userRole.classList.add("userRole");
userRole.innerText = "Founder & CEO, Huddlle";
const section2Image = document.createElement("img");
section2Image.classList.add("section2Image");
section2Image.src = "./assets/images/illustration-2.svg";

//section 3 : Get early access
const section3 = document.createElement("section");
section3.classList.add("section3");
const section3FirstPart = document.createElement("div");
section3FirstPart.classList.add("section3FirstPart");
const section3Heading = document.createElement("h1");
section3Heading.classList.add("section3Heading");
section3Heading.innerText = "Get early access today";
const section3Para = document.createElement("p");
section3Para.classList.add("section3Para");
section3Para.innerText = "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.";
const section3secondPart = document.createElement("div");
section3secondPart.classList.add("section3SecondPart");
const section3Input = document.createElement("input");
section3Input.classList.add("section3Input");
section3Input.placeholder = "email@example.com";
const section3Button = document.createElement("button");
section3Button.classList.add("section3Button");
section3Button.innerText = "Get Started For Free";

//footer
const footerElement = document.createElement("footer");
footerElement.classList.add("footerElement");
const footerLogo = document.createElement("img");
footerLogo.classList.add("footerLogo");
footerLogo.src = "./assets/images/logo.svg";
const footerContainer = document.createElement("section");
footerContainer.classList.add("footerContainer");
const column1 = document.createElement("div");
column1.classList.add("column1");
const column1Row1 = document.createElement("div");
column1Row1.classList.add("column1Row1");
const phoneIcon = document.createElement("img");
phoneIcon.classList.add("phoneIcon");
phoneIcon.src = "./assets/images/icon-phone.svg";
const phoneNumber = document.createElement("p");
phoneNumber.innerText = "phone: +1-543-123-4567";
const column1Row2 = document.createElement("div");


//append elements
column1Row1.append(phoneIcon, phoneNumber);
column1.append(column1Row1);
footerContainer.append(column1);
footerElement.append(footerLogo, footerContainer);
section3secondPart.append(section3Input, section3Button);
section3FirstPart.append(section3Heading, section3Para);
section3.append(section3FirstPart, section3secondPart);
profileInfo.append(userName, userRole)
profile.append(profilePic, profileInfo);
reviewBox.append(qoutationMark, reviewPara, profile);
section2Link.append(arrowIcon);
firstPartsection2.append(section2Heading, section2Para, section2Para2, section2Link, reviewBox);
section2.append(firstPartsection2, section2Image);
Section1InputBar.append(Section1InputEle, Section1Button);
firstPartSection1.append(Section1Heading, Section1Para, Section1InputBar);
section1.append(firstPartSection1, section1Image);
navbar.append(featurseBtn, teamBtn, signInBtn);
headerElement.append(headerLogo, navbar);
root.append(headerElement, section1, bgCurveDesktop, bgCurveMobile, section2, section3, footerElement);