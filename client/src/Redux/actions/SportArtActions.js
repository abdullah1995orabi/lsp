import SportartApi from "../API/SportartApi";

export const sportArtHinzufugen = (data) => () => {
  return SportartApi.sportArt.sportArtHinzufugen(data).then((data) => {
    return data;
  });
};
