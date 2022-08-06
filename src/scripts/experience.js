/**
 * @typedef {Object} Experience
 * @property {string} companyName
 * @property {string} roleInformation Duration, title and location of job separated by '|'
 * @property {string[]} responsibilties
 */

/**
 * @type {Experience[]}
 */
const experiences = [
  {
    companyName: "SAP Labs",
    roleInformation:
      "6 June 2022 - Present | Software Engineer | Bangalore, India",
    responsibilties: [
      "As a mid-level software engineer I contributed to the development of the Central Business Configuration (CBC) product line.",
      "Ramped up in a short period of time and started contributing to the Authoring module in CBC.",
      "Got exposure to Kubernetes for deploying webservices.",
      "Got hands on experience configuring Drone CI/CD pipeline.",
      "Introduced good development standards and clean coding practices to the team."
    ],
  },
  {
    companyName: "Siemens",
    roleInformation:
      "1 July 2018 - 1 June 2022 | Software Engineer | Bangalore, India",
    responsibilties: [
      "Lead the development for 3 edge app projects and took part in the development of 1 embedded system project.",
      "Proactively collaborated with multiple external stakeholders from 4 different geographical locations to ensure smooth progress in the product development.",
      "Implemented clean code using SOLID design principles and software design patterns to adapt easily in an agile and ever changing environment.",
      "Up-skilled the team with Test Driven Development (TDD) and Behavior Driven Development (BDD) practices, which helped us deliver bug free software.",
      "Self taught multiple modern technologies to quickly develop and deliver 1 POC and 2 MVPs which helped us get faster feedback from customers.",
    ],
  },
];

class ExperienceView {
  /**
   * @type {number}
   */
  expIndex = 0;

  constructor() {
    this.displayExperience();
  }

  displayExperience() {
    const expList = document.getElementById("experience-list");
    expList.innerHTML = "";

    const experience = experiences[this.expIndex];

    const jobName = document.createElement("h3");
    jobName.innerHTML = experience.companyName;

    const roleInfo = document.createElement("span");
    roleInfo.innerHTML = experience.roleInformation;
    roleInfo.className = "duration";

    const responsibiltyList = document.createElement("ul");
    responsibiltyList.className = "responsibilities";

    for (const responsibility of experience.responsibilties) {
      const responsibilityItem = document.createElement("li");
      responsibilityItem.innerHTML = responsibility;

      responsibiltyList.appendChild(responsibilityItem);
    }

    expList.appendChild(jobName);
    expList.appendChild(roleInfo);
    expList.appendChild(responsibiltyList);
  }

  next() {
    if (this.hasNext()) {
      ++this.expIndex;
      this.displayExperience();
    }
  }

  previous() {
    if (this.hasPrevious()) {
      --this.expIndex;
      this.displayExperience();
    }
  }

  hasNext() {
    return this.expIndex != experiences.length - 1;
  }

  hasPrevious() {
    return this.expIndex != 0;
  }
}

(function addExperienceChangeListener() {
  const expView = new ExperienceView();

  function checkIfEnd() {
    if (!expView.hasNext()) {
      document.getElementById("right-slide-arrow").style.color = "gray";
      document.getElementById("left-slide-arrow").style.color = "black";
    } else if (!expView.hasPrevious()) {
      document.getElementById("left-slide-arrow").style.color = "gray";
      document.getElementById("right-slide-arrow").style.color = "black";
    }
  }

  checkIfEnd();

  const leftArrowBtn = document.getElementById("left-slide-arrow");
  leftArrowBtn.addEventListener("click", () => {
    expView.previous();
    checkIfEnd();
  });

  const rightArrowBtn = document.getElementById("right-slide-arrow");
  rightArrowBtn.addEventListener("click", () => {
    expView.next();
    checkIfEnd();
  });
})();
