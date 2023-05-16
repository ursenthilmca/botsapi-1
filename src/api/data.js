import { ReactComponent as GitDiff } from "../assets/svg/git_diff.svg";
import { ReactComponent as UsersFour } from "../assets/svg/UsersFour-green.svg";
import { ReactComponent as GitFork } from "../assets/svg/GitFork-green.svg";

export const CUSTOMER_DATA = [
  {
    title: "Available Carrier",
    count: "144",
    value: "Carriers",
    lastUpdate: "Last Update: January 20, 2023",
    icon: <GitDiff />,
  },
  {
    title: "Total Customer",
    count: "77",
    value: "Customers",
    lastUpdate: "Last Update: January 20, 2023",
    icon: <UsersFour />,
  },
  {
    title: "Connected Carrier",
    count: "12",
    value: "Carriers",
    lastUpdate: "Last Update: January 20, 2023",
    icon: <GitFork />,
  },
];

export const CUSTOMER_TYPE = [
  {
    key: "All",
  },
  {
    key: "Carrier",
  },
  {
    key: "TMS",
  },
  {
    key: "ERP",
  },
  {
    key: "Shipper",
  },
];

export const CUSTOMER_DETAILS = [
  {
    key: "All",
    carrier: "CENTRAL FREIGHT LINER (CENF)",
    code: "Code: 1102",
    date: "2021 / 08 /29",
    customer: "3M Company",
    customer_code: "Code: 1102",
    image: "img/Rectangle2.png",
  },
  {
    key: "Carrier",
    carrier: "CENTRAL FREIGHT LINER (CENF)",
    code: "Code: 1102",
    date: "2021 / 08 /29",
    customer: "3M Company",
    customer_code: "Code: 1102",
    image: "img/Rectangle2.png",
  },
  {
    key: "TMS",
    carrier: "CENTRAL FREIGHT LINER (CENF)",
    code: "Code: 1102",
    date: "2021 / 08 /29",
    customer: "3M Company",
    customer_code: "Code: 1102",
    image: "img/Rectangle2.png",
  },
  {
    key: "ERP",
    carrier: "CENTRAL FREIGHT LINER (CENF)",
    code: "Code: 1102",
    date: "2021 / 08 /29",
    customer: "3M Company",
    customer_code: "Code: 1102",
    image: "img/Rectangle2.png",
  },
];
