"use client";
import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieLanguage = () => {
  if (hasCookie("language")) {
    const cookieLanguage = getCookie("language");
    return cookieLanguage;
  }

  else{
    setCookie("language","spanish")
    return "spanish"
  }

};

export const tooggleCookieLanguage = () => {
  if (hasCookie("language")) {
    const cookieLanguage = getCookie("language");
    setCookie(
      "language",
      `${cookieLanguage === "english" ? "spanish" : "english"}`
    );
    return getCookie("language")
  }
  

 
};
