import { getData } from '../index.js';

const {REACT_APP_NEWSAPI_BASE_URL, REACT_APP_NEWSAPI_KEY} = process.env;
const baseUrl = REACT_APP_NEWSAPI_BASE_URL;

export const getTopHeadlines = async () => {
  const url = `${baseUrl}top-headlines?country=us&apiKey=${REACT_APP_NEWSAPI_KEY}`
  try {
    const data = await getData(url);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getBusinessNews = async () => {
  const url = `${baseUrl}top-headlines?category=business&country=us&apiKey=${REACT_APP_NEWSAPI_KEY}`;
  try {
    const data = await getData(url);
    debugger
    return data;
  } catch (error) {
    console.error(error);
  }
};


