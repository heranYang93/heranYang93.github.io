import PersonIcon from "@mui/icons-material/Person";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import AppsIcon from "@mui/icons-material/Apps";
import EmailIcon from "@mui/icons-material/Email";

export const PageArr = [
  {
    id: 1,
    url: "/",
    icon: <PersonIcon />,
    text: "About me",
  },
  {
    id: 2,
    url: "/resume",
    icon: <DocumentScannerIcon />,
    text: "Resume",
  },
  {
    id: 3,
    url: "/portfolio",
    icon: <AppsIcon />,
    text: "Projects",
  },
  {
    id: 4,
    url: "/contact",
    icon: <EmailIcon />,
    text: "Contact",
  },
];
