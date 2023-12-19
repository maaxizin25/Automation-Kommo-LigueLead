import { list } from "../../app";
import { api } from "../api";

interface getList {
  id: string;
  title: string;
}

export const getListService = async (listName: string) => {
  await api
    .get("list")
    .then(function (response) {
      const data: getList[] = response.data.data;
      const myListId = data.filter((e) => {
        return e.title === listName;
      });
      list.id = myListId[0].id;
    })
    .catch(function (error) {
      console.error(error);
    });
};
