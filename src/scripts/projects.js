//@ts-check
"use-strict";

/**
 * @typedef {Object} Project
 * @property {string} name
 * @property {string[]} details
 */

/**
 * @type {Project[]}
 */
const projects = [
  {
    name: "Edge App: Plc Configuration",
    details: [
      "Delivered a SAAS app for the edge ecosystem that is used for configuring Omron, Allen Bradley, Mitsubishi PLC. Using a common configurator for all PLC reduced the app size on disk by 50%.",
      "Tech stack used are Angular, Node.js, Express.js, C++ and Docker.",
      "Used REST API, Websockets, GRPC and MQTT as mode of communication between the various services.",
    ],
  },
  {
    name: "Connection Broker",
    details: [
      "Developed a web based connection broker, for managing connections between Siemens ITC devices and industrial plant devices such as IPC, HMI Panels, Edge Boxes .etc.",
      "Tech stack used was Angular, Node.js, Express.js and Docker.",
      "Used REST API and MQTT as mode of communication between the various services.",
    ],
  },
  {
    name: "Web Engineering System",
    details: [
      "Built a web based engineering system for Siemens Comfort 2nd Gen Panels, which is expected to increase the feature delivery cycles for the panel runtime by 4x.",
      "Tech stack used are React.js, Node.js, Express.js and C++",
    ],
  },
  {
    name: "Hmi Runtime UI",
    details: [
      "Implemented the Trend Control module for the HMI Runtime to visualize time series PLC data. Used Qt Scene Graph which reduced the CPU load by 30%.",
      "Implemented the Multi Touch Gesture module. Supports gestures such as panning and pinch zoom with upto 5 simultaneous touch points.",
    ],
  }
];

class ProjectView {
  /**
   * @type {number}
   */
  projectIndex = 0;

  constructor() {
    this.displayProject();
  }

  displayProject() {
    const projectsList = document.getElementById("projects-list");
    projectsList.innerHTML = "";

    const project = projects[this.projectIndex];

    const projectName = document.createElement("h3");
    projectName.innerHTML = project.name;

    const projectDetails = document.createElement("ul");
    projectDetails.className = "details";

    for (const detail of project.details) {
      const detailItem = document.createElement("li");
      detailItem.innerHTML = detail;

      projectDetails.appendChild(detailItem);
    }

    projectsList.appendChild(projectName);
    projectsList.appendChild(projectDetails);
  }

  next() {
    if (this.hasNext()) {
      ++this.projectIndex;
      this.displayProject();
    }
  }

  previous() {
    if (this.hasPrevious()) {
      --this.projectIndex;
      this.displayProject();
    }
  }

  hasNext() {
    return this.projectIndex != projects.length - 1;
  }

  hasPrevious() {
    return this.projectIndex != 0;
  }
}

(function addExperienceChangeListener() {
  const projectView = new ProjectView();

  function checkIfEnd() {
    if (!projectView.hasNext()) {
      document.getElementById("right-slide-arrow-project").style.color = "gray";
      document.getElementById("left-slide-arrow-project").style.color =
        "var(--section-color-secondary)";
    } else if (!projectView.hasPrevious()) {
      document.getElementById("left-slide-arrow-project").style.color = "gray";
      document.getElementById("right-slide-arrow-project").style.color =
        "var(--section-color-secondary)";
    }
  }

  checkIfEnd();

  const leftArrowBtn = document.getElementById("left-slide-arrow-project");
  leftArrowBtn.addEventListener("click", () => {
    projectView.previous();
    checkIfEnd();
  });

  const rightArrowBtn = document.getElementById("right-slide-arrow-project");
  rightArrowBtn.addEventListener("click", () => {
    projectView.next();
    checkIfEnd();
  });
})();
