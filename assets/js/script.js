const portfolioBtns = document.querySelectorAll(".portfolio-btns button");
const portfolioBox = document.querySelector(".portfolio-box");
const portfolioData = [
  {
    id: "Nature",
    category: "nature",
    display_category: "طبیعت",
    images: [
      {
        id: "N_1",
        title: "طبیعت 1",
        src: "./assets/images/portfolio/nature/img_1.jpg",
        url: "#",
      },
      {
        id: "N_2",
        title: "طبیعت 2",
        src: "./assets/images/portfolio/nature/img_2.jpg",
        url: "#",
      },
      {
        id: "N_3",
        title: "طبیعت 3",
        src: "./assets/images/portfolio/nature/img_3.jpg",
        url: "#",
      },
      {
        id: "N_4",
        title: "طبیعت 4",
        src: "./assets/images/portfolio/nature/img_4.jpg",
        url: "#",
      },
    ],
  },

  {
    id: "Technology",
    category: "technology",
    display_category: "تکنولوژی",
    images: [
      {
        id: "T_1",
        title: "تکنولوژی 1",
        src: "./assets/images/portfolio/technology/img_1.jpg",
        url: "#",
      },
      {
        id: "T_2",
        title: "تکنولوژی 2",
        src: "./assets/images/portfolio/technology/img_2.jpg",
        url: "#",
      },
      {
        id: "T_3",
        title: "تکنولوژی 3",
        src: "./assets/images/portfolio/technology/img_3.jpg",
        url: "#",
      },
      {
        id: "T_4",
        title: "تکنولوژی 4",
        src: "./assets/images/portfolio/technology/img_4.jpg",
        url: "#",
      },
    ],
  },
  {
    id: "travel",
    category: "travel",
    display_category: "مسافرت",
    images: [
      {
        id: "Travel_1",
        title: "مسافرت 1",
        src: "./assets/images/portfolio/travel/img_1.jpg",
        url: "#",
      },
      {
        id: "Travel_2",
        title: "مسافرت 2",
        src: "./assets/images/portfolio/travel/img_2.jpg",
        url: "#",
      },
      {
        id: "Travel_3",
        title: "مسافرت 3",
        src: "./assets/images/portfolio/travel/img_3.jpg",
        url: "#",
      },
      {
        id: "Travel_4",
        title: "مسافرت 4",
        src: "./assets/images/portfolio/travel/img_4.jpg",
        url: "#",
      },
    ],
  },
];

let data = portfolioData.find((item) => item.category === "nature");

const createBoxInfo = (info) => {
  info.forEach((item) => {
    let divElement = document.createElement("div");
    divElement.classList.add("col-md-6", "col-lg-4");
    portfolioBox.appendChild(divElement);

    let imgBox = document.createElement("img");
    imgBox.src = item.src;
    imgBox.classList.add("img-fluid", "rounded", "shadow");
    divElement.appendChild(imgBox);

    let infoBox = document.createElement("div");
    infoBox.classList.add("info");
    infoBox.innerHTML = `
    <h5 class="text-white" >${item.title}</h5>
    <a class="btn btn-rounded-primary mt-3" href=${item.url}>مطالعه بیشتر</a>
    `;
    divElement.appendChild(infoBox);
  });
};

const removeActiveClass = () => {
  portfolioBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
};
const addActiveClass = (event) => {
  event.target.classList.add("active");
};

portfolioBtns.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    removeActiveClass();
    addActiveClass(event);
    portfolioBox.innerHTML = "";

    let data_portfolio_btn = event.target.getAttribute("data-portfolio-btn");
    if (data_portfolio_btn === "all") {
      data = portfolioData;
      data.forEach((item) => {
        createBoxInfo(item.images);
      });
    } else {
      data = portfolioData.find((item) => item.category === data_portfolio_btn);
      createBoxInfo(data.images);
    }
  })
);

const loading = () => {
  createBoxInfo(data.images);
};
