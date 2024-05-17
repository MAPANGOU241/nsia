import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

/**
 *
 * @param {Object} e
 */
export const attestationPdf = async (e) => {
  const docDefinition = {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: [10, 150, 20, 50],
    content: [
      {
        text: e["infos"],
        relativePosition: { x: 430, y: 55 },
      },
      {
        text: e["agence"],
        absolutePosition: { x: 250, y: 230 },
      },
      {
        text: e["adress"],
        absolutePosition: { x: 420, y: 230 },
      },

      {
        text: e["police"],
        absolutePosition: { x: 190, y: 250 },
        fontSize: 10,
      },
      {
        stack: [
          {
            text: e["immat"],
            absolutePosition: { x: 720, y: 230 },
            fontSize: 10,
          },
          {
            text: e["dateDebut"],
            absolutePosition: { x: 720, y: 260 },
            fontSize: 7,
          },
        ],
      },
      {
        text: e["dateFin"],
        absolutePosition: { x: 780, y: 260 },
        fontSize: 7,
      },
      {
        text: e["police"],
        absolutePosition: { x: 720, y: 280 },
        fontSize: 10,
      },
      {
        stack: [
          {
            text: e["rc"],
            absolutePosition: { x: 140, y: 270 },
            fontSize: 10,
          },
          {
            text: e["incendie"],
            absolutePosition: { x: 140, y: 310 },
            fontSize: 10,
          },
          {
            text: e["dateDebut"],
            absolutePosition: { x: 120, y: 330 },
            fontSize: 10,
          },
        ],
      },
      {
        stack: [
          {
            text: e["dr"],
            absolutePosition: { x: 220, y: 270 },
            fontSize: 10,
          },
          {
            text: e["dom"],
            absolutePosition: { x: 220, y: 310 },
            fontSize: 10,
          },
          {
            text: e["dateFin"],
            absolutePosition: { x: 225, y: 330 },
            fontSize: 10,
          },
        ],
      },
      {
        stack: [
          {
            text: e["vol"],
            absolutePosition: { x: 300, y: 270 },
            fontSize: 10,
          },
          {
            text: e["bg"],
            absolutePosition: { x: 300, y: 310 },
            fontSize: 10,
          },
        ],
      },
      {
        text: e["genre"],
        absolutePosition: { x: 380, y: 330 },
        fontSize: 10,
      },
      {
        text: e["type"],
        absolutePosition: { x: 410, y: 330 },
        fontSize: 10,
      },
      {
        text: e["marque"],
        absolutePosition: { x: 510, y: 330 },
        fontSize: 10,
      },
      {
        text: e["immat"],
        absolutePosition: { x: 610, y: 330 },
        fontSize: 10,
      },
    ],
  };

  pdfMake.createPdf(docDefinition).open();
};
