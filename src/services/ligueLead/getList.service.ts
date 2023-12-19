import { list } from "../../app";
import { api } from "../axios/api";

interface getList {
  id: string;
  title: string;
}

export const getListService = async (listName: string) => {
  await api
    .get("list")
    .then(function (response) {
      const data: getList = response.data.data.find(
        (e: getList) => e.title === listName
      );
      list.id = data.id;
    })
    .catch(function (error) {
      console.error(error);
    });
};
