/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{html,js,jsx}"
];
export const theme = {
  extend: {
    fontFamily: {
      'circular-web' : ['circular-web' , 'sanf-serif'],
      'robert-medium' : ['robert-medium' , 'sanf-serif'],
      'robert-regular' : ['robert-regular' , 'sanf-serif'],
      general : ['general' , 'sans-serif'],
      zentry : ['zentry' , 'sans-serif']
    } , 

    colors : {
      yellow : {100 : '#8E983F' , 300 : '#EDFF36'},
      violet : {300 : '#5724FF'},
      blue : {50 : '#DFDFF0' , 75 : '#DFDFF2' , 100 : '#F0F2FA' , 200 : '#010101' ,300 : '#4FB7DD'}

    }
  },
};
export const plugins = [];