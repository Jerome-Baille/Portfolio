// const baseURL = 'https://backend-portfolio.onrender.com/api/';
// const baseURL = 'https://jerome-baille.fr/api/';
const baseURL = 'http://localhost:3000/api/';


export async function getAbout(lang) {
  const urlAbout = `${baseURL}about/${lang}`;
  const about = await fetch(urlAbout).then((res) => res.json());
  return about;
}

export async function getStack() {
  const urlStacks = `${baseURL}stacks`;
  const stack = await fetch(urlStacks).then((res) => res.json());
  return stack;
}

export async function getAllProjects() {
  const urlProjects = `${baseURL}projects`;
  const projects = await fetch(urlProjects).then((res) => res.json());
  return projects;
}

export async function getOneProject(id) {
  const urlProject = `${baseURL}projects/${id}`;
  const project = await fetch(urlProject).then((res) => res.json());
  return project;
}

export async function getCertifications(query) {
  let queryParam = (query && query!=='All') ? `?status=${query}` :  '';
  const urlCertifications = `${baseURL}certifications${queryParam}`;
  const certifications = await fetch(urlCertifications).then((res) => res.json());
  return certifications;
}

export async function getChallenges(query) {
  let queryParam = (query && query!=='All') ? `?status=${query}` :  '';
  const urlChallenges = `${baseURL}challenges${queryParam}`;
  const challenges = await fetch(urlChallenges).then((res) => res.json());
  return challenges;
}

export async function getHundredDaysOfCSS() {
  const urlHundredDaysOfCSS = `${baseURL}challenges/DaysOfCSS`;
  const DaysOfCSS = await fetch(urlHundredDaysOfCSS).then((res) => res.json());
  return DaysOfCSS;
}

export async function getTrainings() {
  const urlTrainings = `${baseURL}trainings`;
  const trainings = await fetch(urlTrainings).then((res) => res.json());
  return trainings;
}