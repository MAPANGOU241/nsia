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
    pageMargins: [90, 150, 20, 50],
    content: [
    //   {
    //     text: e["infos"],
    //     relativePosition: { x: 460, y: 55 },
    //   },
    //   {
    //     text: e["agence"],
    //     absolutePosition: { x: 380, y: 230 },
    //   },
    //   {
    //     text: e["adress"],
    //     absolutePosition: { x: 500, y: 230 },
    //   },
    //   {
    //     text: e["police"],
    //     absolutePosition: { x: 290, y: 250 },
    //   },
    //   {
    //     stack: [
    //       {
    //         text: e["rc"],
    //         absolutePosition: { x: 290, y: 280 },
    //       },
    //       {
    //         text: e["incendie"],
    //         absolutePosition: { x: 290, y: 310 },
    //       },
    //       {
    //         text: e["dateDebut"],
    //         absolutePosition: { x: 270, y: 330 },
    //       },
    //     ],
    //   },
    //   {
    //     stack: [
    //       {
    //         text: e["dr"],
    //         absolutePosition: { x: 370, y: 280 },
    //       },
    //       {
    //         text: e["dom"],
    //         absolutePosition: { x: 370, y: 310 },
    //       },
    //       {
    //         text: e["dateFin"],
    //         absolutePosition: { x: 385, y: 330 },
    //       },
    //     ],
    //   },
    //   {
    //     stack: [
    //       {
    //         text: e["vol"],
    //         absolutePosition: { x: 450, y: 280 },
    //       },
    //       {
    //         text: e["bg"],
    //         absolutePosition: { x: 450, y: 310 },
    //       },
    //     ],
    //   },
      {
        text: e["genre"],
        absolutePosition: { x: 500, y: 330 },
      },
    //   {
    //     text: e["type"],
    //     absolutePosition: { x: 550, y: 350 },
    //   },
    //   {
    //     text: e["marque"],
    //     absolutePosition: { x: 670, y: 350 },
    //   },
    //   {
    //     text: e["immat"],
    //     absolutePosition: { x: 730, y: 350 },
    //   },
    ],
    styles: {
      anotherStyle: {
        alignment: "left",
        margin: [0, 0, 0, 5],
      },
      anotherStyle2: {
        alignment: "center",
        margin: [0, 50, 0, 5],
      },
      anotherStyle3: {
        alignment: "right",
        margin: [0, -30, 0, 5],
      },
    },
  };

  pdfMake.createPdf(docDefinition).open();
};
