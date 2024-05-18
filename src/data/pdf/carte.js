import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

/**
 *
 * @param {Object} e
 */
export const cartePdf = async (e) => {
  const docDefinition = {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: [90, 150, 20, 50],
    content: [
      {
        columns: [
          {
            // auto-sized columns have their widths based on their content
            width: 200,

            stack: [
              {
                text: e["nomAdAssure"],
                absolutePosition: { x: 58, y: 214 },
                fontSize: 7,
              },

              {
                text: e["immatriculation"],
                absolutePosition: { x: 95, y: 240 },
                fontSize: 7,
              },

              {
                text: e["marquetype"],
                absolutePosition: { x: 95, y: 250 },
                fontSize: 7,
              },

              {
                text: e["assureur"],
                absolutePosition: { x: 95, y: 259 },
                fontSize: 7,
              },
              {
                text: e["BureauEmetteur"],
                absolutePosition: { x: 100, y: 298 },
                fontSize: 7,
              },
              {
                text: e["police"],
                absolutePosition: { x: 97, y: 315 },
                fontSize: 7,
              },
              {
                text: e["dateDebut"],
                absolutePosition: { x:50, y: 349 },
                fontSize: 7,
              },
              {
                text: e["dateFin"],
                absolutePosition: { x: 220, y: 349 },
                fontSize: 7,
              },

              {
                text: e["usagecat"],
                absolutePosition: { x: 50, y: 376 },
                fontSize: 7,
              },
            ],
          },

          {
            // auto-sized columns have their widths based on their content
            width: "auto",

            stack: [
              {
                text: e["nomAdAssure"],
                absolutePosition: { x: 236, y: 226 },
                fontSize: 7,
              },

              {
                text: e["immatriculation"],
                absolutePosition: { x: 250, y: 240 },
                fontSize: 7,
              },

              {
                text: e["marquetype"],
                absolutePosition: { x: 265, y: 250 },
                fontSize: 7,
              },

              {
                text: e["assureur"],
                absolutePosition: { x: 240, y: 259 },
                fontSize: 7,
              },
              {
                text: e["BureauEmetteur"],
                absolutePosition: { x: 270, y: 298 },
                fontSize: 7,
              },
              {
                text: e["police"],
                absolutePosition: { x: 250, y: 315 },
                fontSize: 7,
              },
              {
                text: e["dateDebut"],
                absolutePosition: { x: 122, y: 349 },
                fontSize: 7,
              },
              {
                text: e["dateFin"],
                absolutePosition: { x: 285, y: 349 },
                fontSize: 7,
              },

              {
                text: e["usagecat"],
                absolutePosition: { x: 230, y: 376 },
                fontSize: 7,
              },
            ],
          },

          {
            // auto-sized columns have their widths based on their content
            width: "auto",

            stack: [
              {
                text: e["nomAdAssure"],
                absolutePosition: { x: 466, y: 240 },
                fontSize: 7,
              },

              {
                text: e["immatriculation"],
                absolutePosition: { x: 465, y: 273 },
                fontSize: 7,
              },

              {
                text: e["NomAdSoCiete"],
                absolutePosition: { x: 461, y: 287 },
                fontSize: 7,
              },

              {
                text: e["NomAdSoCiete"],
                absolutePosition: { x: 454, y: 311 },
                fontSize: 7,
              },
              {
                text: e["usagecat"],
                absolutePosition: { x: 430, y: 378 },
                fontSize: 7,
              },
            ],
          },

          {
            // auto-sized columns have their widths based on their content
            width: "auto",

            stack: [
              {
                text: e["dateDebut"],
                absolutePosition: { x: 580, y: 220 },
                fontSize: 7,
              },

              {
                text: e["dateFin"],
                absolutePosition: { x: 680, y: 220 },
                fontSize: 7,
              },

              {
                text: e["police"],
                absolutePosition: { x: 670, y: 230 },
                fontSize: 7,
              },

              {
                text: e["dateDebut"],
                absolutePosition: { x: 590, y: 245 },
                fontSize: 7,
              },
              {
                text: e["dateFin"],
                absolutePosition: { x: 680, y: 245 },
                fontSize: 7,
              },

              {
                text: e["marquetype"],
                absolutePosition: { x: 660, y: 260 },
                fontSize: 7,
              },

              {
                text: e["NumChassis"],
                absolutePosition: { x: 636, y: 290 },
                fontSize: 7,
              },

              {
                text: e["BureauEmetteur"],
                absolutePosition: { x: 632, y: 328 },
                fontSize: 7,
              },
            ],
          },
        ],
        // optional space between columns
        columnGap: 10,
      },
      //{
      // stack: [
      //   {
      //     text: e["omAdAssure"],
      //     absolutePosition: { x: 996.01, y: 144 },
      //   },
      //   {
      //     text: e["immatriculation"],
      //     absolutePosition: { x:1093.31, y: 423.7 },
      //   },
      //   {
      //     text: e["marquetype"],
      // absolutePosition: { x: 1142.46, y: 406.88 },
      //   },
      //   {
      //     text: e["assureur"],
      // absolutePosition: { x: 1195.63, y: 311.19 },
      //   },
      //   {
      //     text: e["BureauEmetteur"],
      // absolutePosition: { x: 1344, y: 429 },
      //   },
      //   {
      //     text: e["police"],
      // absolutePosition: { x: 311.19, y: 1442.39 },
      //   },
      //   {
      //     text: e["dateDebut"],
      // absolutePosition: { x: 189.21, y: 1542.69 },
      //   },
      //   {
      //     text: e["dateFin"],
      // absolutePosition: { x: 500.54, y: 1538.68 },
      //   },
      //   {
      //     text: e["usagecat"],
      //     absolutePosition: { x: 148.21, y: 1642 },
      //   },

      // ],
      //   columns: [

      //     {
      //       stack: [

      //         {
      //               text: e["omAdAssure"],
      //                absolutePosition: { x: 996.01, y: 144 },
      //             },
      //       ]
      //      },

      //   ]
      // },
      /////////////////////////////////////////////////////////////
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
