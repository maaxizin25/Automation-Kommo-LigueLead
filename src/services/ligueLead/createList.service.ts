import { list } from "../../app";
import { api } from "../axios/api";

export const createListService = async (date: string): Promise<string> => {
  console.log(date);
  await api
    .post("list", {
      title: date,
      description: "Leads do dia",
      dynamic: "1",
      list: [""],
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {});
  list.name = date;
  return date;
};
