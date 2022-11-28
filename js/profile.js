const profile = {
  title: "A.A Ngr Rageshwara Bhaskarawarman",
  job: "Web Developer",
  about:
    "Student of the Stikom Bali Institute of Technology and Business majoring in Information Technology. I'm a junior web developer focused on web design & backend developer using PHP for frameworks like Laravel to display data from databases and even APIs and implement payment gateways on websites. Currently I am developingmy skill in the field of frontend developer such as studying deeper fundamentals and also learning to use a frontend framework.",
  address: "Jln. Pulau Yoni Gg. purataman No.5 Denpasar Selatan",
  email: "agungrageshwara24@gmail.com",
  phone: "+6287776741386",
};

const { title, job, about, address, email, phone } = profile;

const nameValue = document.querySelector("h1.home_title");
const jobValue = document.querySelector(".home_proffesion");
const aboutValue = Array.from(
  document.querySelectorAll(".profile_description")
);
const informationValue = Array.from(
  document.querySelectorAll(".home_information")
);

nameValue.innerHTML = title;
jobValue.innerHTML = job;

const infomationData = [];

const addressText = infomationData.push(document.createTextNode(address));
const emailText = infomationData.push(document.createTextNode(email));
const numberText = infomationData.push(document.createTextNode(phone));

informationValue.map((value, index) => {
  value.appendChild(infomationData[index]);
});

aboutValue.map((value) => {
  value.innerHTML = about;
});
