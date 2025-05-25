// interface personalDetailsType {
//         label: string,
//         value: string
//     }

const today = new Date();
const birthDate = new Date("1997-08-01");
let age = today.getFullYear() - birthDate.getFullYear();
const monthDifference = today.getMonth() - birthDate.getMonth();
const currAge =
  monthDifference < 0 ||
  (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ? age--
    : age;

export const useAboutPage = () => {
  const personalDetails = [
    { label: "Name", value: "Quazi Yadgar Husain" },
    {
      label: "Age",
      value: currAge,
    },
    {
      label: "Address",
      value: "India",
    },
    {
      label: "Email",
      value: "quaziyadgar@gmail.com",
    },
    {
      label: "Contact No",
      value: "+91 8299723374",
    },
  ];

  const jobSummary = `Dedicated Full Stack Developer with 9 months of experience in React.js,
TypeScript, and UI development, complemented by certifications in MERN
stack, Data Structures & Algorithms DSA, Android Application Development,
and MySQL. Skilled in building reusable components, optimizing user
engagement by 20%, and delivering responsive web and mobile applications.
Passionate about problem-solving and eager to contribute to innovative
projects in a collaborative, Agile environment`;

  return { personalDetails, jobSummary };
};
