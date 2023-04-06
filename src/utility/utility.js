import _, { filter, findIndex, sortBy } from "lodash";

export const uniqueID = () => {
  return (Math.random() + 1).toString(36).substring(2);
};
export const isRequiredField = (data) =>{
  Boolean(_.find(data, { required: true }));
}
