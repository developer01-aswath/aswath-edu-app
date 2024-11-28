import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import TuneSharpIcon from '@mui/icons-material/TuneSharp';

export const httpClientHost = "http://localhost:3001";

export const OrganizationSidebarMenu = [
  {
    name: "Dashboard",
    path: "/organization",
    Icon: <DashboardSharpIcon />,
  },
  {
    name: "Users",
    path: "/organization/users",
    Icon: <PeopleAltSharpIcon />,
  },
  {
    name: "Settings",
    path: "/organization/settings",
    Icon: <TuneSharpIcon />,
  },
];
