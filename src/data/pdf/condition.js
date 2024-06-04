import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

/**
 *
 * @param {Object} e
 */
export const conditionPDF = async (e) => {
  const name = "Doe Jon";
  const docDefinition = {
    pageSize: "A4",
    pageMargins: [10, 5, 5, 10],
    content: [
      {
        table: {
          widths: [545],
          body: [
            [
              {
                text: "CONDITIONS PARTICULIERES AUTOMOBILE",
                style: "titleHeader",
              },
            ],
          ],
        },
      },
      {
        columns: [
          {
            width: "*",
            style: "tableExample",
            table: {
              body: [
                [
                  {
                    text: "Références du souscripteur",
                    alignment: "left",
                    fontSize: 7,
                    border: [true, true, true, true],
                    margin: [2, 2, 165, 2],
                  },
                ],
              ],
            },
          },
          {
            width: "*",
            style: "tableExample",
            table: {
              body: [
                [
                  {
                    text: "Références Conditions particulieres",
                    alignment: "right",
                    fontSize: 7,
                    border: [true, true, true, true],
                    margin: [2, 2, 150, 2],
                  },
                ],
              ],
            },
          },
        ],
        margin: [0, 10, 0, 10],
      },
      {
        columns: [
          {
            width: "*",
            style: "tableExample",
            table: {
              body: [
                [
                  {
                    stack: [
                      {
                        text: "Numéro " + " GB254578954125",
                        alignment: "left",
                      },
                      {
                        text: "Nom     " + name,
                        alignment: "left",
                      },
                      {
                        text: "Adresse",
                        alignment: "left",
                      },
                      {
                        text: "Téléphone",
                        alignment: "left",
                      },
                      {
                        text: "Réseau",
                        alignment: "left",
                      },
                      {
                        text: "Intermédiare",
                        alignment: "left",
                      },
                      {
                        text: "Email",
                        alignment: "left",
                      },
                    ],

                    fontSize: 7,
                    border: [true, true, true, true],
                    margin: [5, 5, 175, 15], // Margin: [top, right, bottom, left]
                  },
                ],
              ],
            },
          },
          {
            width: "*",
            style: "tableExample",
            table: {
              body: [
                [
                  {
                    stack: [
                      {
                        text: "Numéro " + " GB254578954125",
                        alignment: "left",
                      },
                      {
                        text: "Emission",
                        absolutePosition: { x: 450, y: 100 },
                      },
                      {
                        text: "Assuré(e)",
                        alignment: "left",
                      },
                      {
                        text: "Adresse",
                        alignment: "left",
                      },
                      {
                        text: "Effet",
                        alignment: "left",
                      },
                      {
                        text: "Expiration",
                        alignment: "left",
                      },
                      {
                        text: "Durée",
                        absolutePosition: { x: 450, y: 140 },
                      },
                      {
                        text: "Catégorie",
                        alignment: "left",
                      },
                      {
                        text: "Mouvement",
                        alignment: "left",
                      },
                      {
                        text: "Barème",
                        alignment: "left",
                      },
                      {
                        text: "Type",
                        absolutePosition: { x: 450, y: 163 },
                      },
                    ],

                    fontSize: 7,
                    border: [true, true, true, true],
                    margin: [2, 2, 175, 10],
                  },
                ],
              ],
            },
          },
        ],
        margin: [0, 10, 0, 10],
      },
      {
        table: {
          widths: [545],
          body: [
            [
              {
                text: "IDENTIFICATION DU VEHICULE",
                style: "tableHeader",
              },
            ],
            [
              {
                style: "default",
                columns: [
                  {
                    stack: [
                      {
                        text: "N° Immatriculation ",
                      },
                      {
                        text: "Marque ",
                      },
                      {
                        text: "Puissance (CV) ",
                      },
                      {
                        text: "Modèle ",
                      },
                      {
                        text: "Valeur à neuf (FCFA) ",
                      },
                      {
                        text: "Conducteur habituel",
                      },
                    ],
                  },
                  {
                    style: "default",
                    stack: [
                      {
                        text: "1 ére mise en circulation ",
                      },
                      {
                        text: "Genre ",
                      },
                      {
                        text: "Puissance réelle (cm3)",
                      },
                      {
                        text: "Type commercial ",
                      },
                      {
                        text: "Valeur vérale",
                      },
                    ],
                  },
                  {
                    stack: [
                      {
                        text: "Energie ",
                      },
                      {
                        text: "Nbre de places ",
                      },
                      {
                        text: "Charge utile (kg) ",
                      },
                      {
                        text: "N° série  ",
                      },
                      {
                        text: "Zone  ",
                      },
                      {
                        text: "Date Immatriculation ",
                      },
                    ],
                  },
                ],
              },
            ],
          ],
        },
      },
      {
        table: {
          widths: [530],
          body: [
            [
              {
                text: "GARANTIES SOUSCRITES ET CAPITAUX ASSURES (en FCFA)",
                style: "titleHeader",
              },
            ],
          ],
        },
      },
      {
        style: "default",
        widths: [530],
        table: {
          widths: [100, 90, 90, 35, 35, "*", 35],
          body: [
            [
              "Garantie",
              "Capital",
              "Franchise",
              "Prime Annuelle",
              "Prime Nette",
              "Réduction / Majoration",
              "Prime Comptant",
            ],

            [
              {
                text: "Automobile",
                style: "tableHeader",
                colSpan: 7,
                alignment: "left",
              },
              {},
              {},
              {},
              {},
              {},
              {},
            ],
            [
              {
                text: "Responsabilite",
                style: "default",
                alignment: "left",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
            ],
            [
              {
                text: "Recours",
                style: "default",
                alignment: "left",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
            ],
            [
              {
                text: "Extraterritoriale Carte Rose CEMAC ",
                style: "default",
                alignment: "left",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
            ],
            [
              {
                text: "SOUS TOTAL Automobile",
                style: "default",
                alignment: "left",
                colSpan: 3,
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
            ],
            [
              {
                text: "Sécurité routière",
                style: "tableHeader",
                colSpan: 7,
                alignment: "left",
              },
              {},
              {},
              {},
              {},
              {},
              {},
            ],
            [
              {
                text: "Décès accidentel",
                style: "default",
                alignment: "left",
              },
              {
                text: "Infirmité permanente",
                style: "default",
              },
              {
                text: "Frais de traitement",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
              {
                text: "Automobile",
                style: "default",
              },
            ],
            [
              {
                text: "Infirmité permanente",
                style: "tableHeader",
                alignment: "left",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
            ],
            [
              {
                text: "Frais de traitement ",
                style: "tableHeader",
                alignment: "left",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
            ],
            [
              {
                text: "SOUS TOTAL Sécurité routière",
                style: "tableHeader",
                alignment: "left",
                colSpan: 3,
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
              {
                text: "Automobile",
                style: "tableHeader",
              },
            ],
          ],
        },
      },
      {
        text: "Par conséquent, le souscripteur s'engage à p yer au comptant à la signature du présent contrart la somme de 131 106 fFCFA décomptée comme suite : ",
        style: "titleHeader",
      },
      {
        style: "anotherStyle",
        table: {
          widths: [270, 270],
          body: [
            [
              {
                columns: [
                  {
                    stack: [
                      {
                        text: "Prime Nette",
                      },
                      {
                        text: "Montant accessoire",
                      },
                      {
                        text: "Taxe d'enregistrement",
                      },
                      {
                        text: "Carte rose",
                      },
                      {
                        text: "CSS",
                      },
                      {
                        text: "Constat Amiable",
                      },
                      {
                        text: "TOTAL A PAYER",
                      },
                    ],
                  },
                ],
              },
              {
                style: "anotherStyle3",
                columns: [
                  {
                    stack: [
                      {
                        text: "Prime Nette",
                      },
                      {
                        text: "Prime Nette",
                      },
                      {
                        text: "Prime Nette",
                      },
                      {
                        text: "Prime Nette",
                      },
                      {
                        text: "Prime Nette",
                      },
                      {
                        text: "Prime Nette",
                      },
                      {
                        text: "Prime Nette",
                      },
                      {
                        text: "131 106 FCFA",
                      },
                    ],
                  },
                ],
              },
            ],
          ],
        },
      },
      {
        text: "L'assuré paiera la somme de CENT TRENTE ET UN MILLE CENT SIX FCFA",
        style: "default",
      },
      {
        text: "Dispositions Complémentaires",
        style: "default",
      },
      {
        text: "La prise d'effet du contrat est surbordonnée au paiement préalable de la prime conforément aux dispositions de l'article 13",
        style: "default",
      },
      {
        style: "default",
        ul: [
          "Le présent contrat est régi par le code des assurances CIMA, les conditions générales jointes, les Conditions particulières ainsi que les clauses en annexe.",
          "Il est précisé que les Conditions particulières (CP) annulent et remplacent toutes dispositions des conditions généeales (CG) qui leur sont contraintes.",
          "Sont nulles toutes adjonctions ou modifications matérielles non revetues des visas de l'assureur et du souscripteur.",
        ],
      },
    ],

    styles: {
      anotherStyle: {
        alignment: "left",
        margin: [0, 0, 0, 5],
        fontSize: 10,
      },
      anotherStyle2: {
        alignment: "center",
        margin: [0, 50, 0, 5],
      },
      anotherStyle3: {
        alignment: "right",
        margin: [0, 0, 0, 5],
        fontSize: 10,
      },
      titleHeader: {
        bold: true,
        fontSize: 8,
        color: "black",
        alignment: "center",
        border: [true, true, true, true],
        margin: [5, 5, 5, 5],
      },
      tableHeader: {
        bold: true,
        fontSize: 8,
        color: "black",
        alignment: "center",
      },
      default: {
        fontSize: 7,
        color: "black",
        margin: [5, 5, 5, 5],
      },
    },
  };

  pdfMake.createPdf(docDefinition).open();
};
