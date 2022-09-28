const baseURL = 'https://backend-portfolio.onrender.com/api/';

export async function getAbout() {
  const urlAbout = [`${baseURL}about`];
  const [about] = await Promise.all(
    urlAbout.map((url) => fetch(url)
      .then((res) => res.json()))
 );
  return about;
};

export async function getStack() {
  const urlStacks = [`${baseURL}stacks`];
  const [stack] = await Promise.all(
    urlStacks.map((url) => fetch(url)
      .then((res) => res.json()))
 );
  return stack;
};

export async function getAllProjects() {
  const urlProjects = [`${baseURL}projects`];
  const [projects] = await Promise.all(
    urlProjects.map((url) => fetch(url)
      .then((res) => res.json()))
 );
  return projects;
};

export async function getOneProject(id) {
  const urlProject = [`${baseURL}projects/${id}`];
  const [project] = await Promise.all(
    urlProject.map((url) => fetch(url)
      .then((res) => res.json()))
 );
  return project;
};


export async function getCertifications() {
  const urlCertifications = [`${baseURL}certifications`];
  const [certifications] = await Promise.all(
    urlCertifications.map((url) => fetch(url)
      .then((res) => res.json()))
 );
  return certifications;
};

export async function getChallenges() {
  const urlChallenges = [`${baseURL}challenges`];
  const [challenges] = await Promise.all(
    urlChallenges.map((url) => fetch(url)
      .then((res) => res.json()))
 );
  return challenges;
};

export async function getHundredDaysOfCSS() {
  const urlHundredDaysOfCSS = [`${baseURL}challenges/DaysOfCSS`];
  const [DaysOfCSS] = await Promise.all(
    urlHundredDaysOfCSS.map((url) => fetch(url)
      .then((res) => res.json()))
 );
  return DaysOfCSS;
};

export async function getTrainings() {
  const urlTrainings = [`${baseURL}trainings`];
  const [trainings] = await Promise.all(
    urlTrainings.map((url) => fetch(url)
      .then((res) => res.json()))
 );
  return trainings;
};