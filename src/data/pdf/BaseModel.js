import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

/**
 *
 * @param {Object} e
 */
export const attestationPdf = async (e) => {
  console.log(e);
  const docDefinition = {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: [100, 320, 20, 100],

    content: [
      
      {
        text: e["name"],
        style: "anotherStyle",
      },
      {
        text: e["infos"],
        style: "anotherStyle2",
      },
      {
        text: e["id"],
        style: "anotherStyle3",
      },

        {
          columns: [
            {
              width: "40%",
              stack: [
                {
                  text: e["police"],
                  margin: [50, 10, 0, 5],
                },
                {
                  columns: [
                    {
                      stack: [
                        {
                          text: e["rc"],
                          margin: [0, 15, 0, 5],
                        },
                        {
                          text: e["incendie"],
                          margin: [0, 15, 0, 5],
                        },
                      ],
                    },
                    {
                      stack: [
                        {
                          text: e["dr"],
                          margin: [0, 15, 0, 5],
                        },
                        {
                          text: e["dom"],
                          margin: [0, 15, 0, 5],
                        },
                      ],
                    },
                    {
                      stack: [
                        {
                          text: e["vol"],
                          margin: [0, 15, 0, 5],
                        },
                        {
                          text: e["bg"],
                          margin: [0, 15, 0, 5],
                        },
                      ],
                    },
                  ],
                },
                {
                  text: `${e["dateDebut"]}   ${e["dateFin"]}`,
                  margin: [0, 50, 0, 5],
                },
              ],
            },
            {
              width: "*",
              stack: [
                {
                  stack: [
                    {
                      text: `${e["genre"]}      ${e["type"]}     ${e["marque"]}     ${e["immat"]}`,
                      margin: [10, 180, 0, 5],
                    },
                  ],
                },
              ],
            },
            {
              // % width
              width: "20%",
              stack: [

                {
                  text: `${e["dateDebut"]}   ${e["dateFin"]}`,
                  margin: [0, 15, 0, 5],
                },
                {
                  text: e["numberPolice"],
                  margin: [0, 15, 0, 5],
                },
              ],
            },
          ],
          columnGap: 10,
        },
    ],
    styles: {
      header: {
        fontSize: 22,
        bold: true,
      },
      anotherStyle: {
        italics: true,
        alignment: "left",
        margin: [0, 30, 0, 5],
      },
      anotherStyle2: {
        italics: true,
        alignment: "center",
        margin: [0, -100, 0, 5],
      },
      anotherStyle3: {
        italics: true,
        alignment: "right",
        margin: [0, -30, 0, 5],
      },
    },
  };

  pdfMake.createPdf(docDefinition).open();
};
