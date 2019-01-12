import axios from 'axios';

export const getRandomDog = () => axios.get("https://dog.ceo/api/breeds/image/random");

export const getDogBreed = (breedName) => axios.get(`https://dog.ceo/api/breed/${breedName}/images`);

export const getBreedList = () => axios.get("https://dog.ceo/api/breeds/list");